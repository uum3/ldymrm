// You can use any data fetching library
import fetch from 'node-fetch'
import Head from 'next/head'


// posts will be populated at build time by getStaticProps()
function Blog({ file }) {
  const humanFileSize = (bytes, si) => {
      var thresh = si ? 1000 : 1024;
      if(Math.abs(bytes) < thresh) {
          return bytes + ' B';
      }
      var units = si
          ? ['kB','MB','GB','TB','PB','EB','ZB','YB']
          : ['KiB','MiB','GiB','TiB','PiB','EiB','ZiB','YiB'];
      var u = -1;
      do {
          bytes /= thresh;
          ++u;
      } while(Math.abs(bytes) >= thresh && u < units.length - 1);
      return bytes.toFixed(1)+' '+units[u];
  }
  return (
	<div>
  <Head>
    <title>uum3 file sharing - {file.name}</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head>
	filename: {file.name}<br/>
	size: { humanFileSize(file.size)}
		{file.type === "image/jpeg" && <img src="api/download/4"/>}
    <br/>
		{file.type === "video/mp4" && <video style={{maxWidth: "500px", width: "100%"}} controls>
			<source src={`api/download/${file.id}`} type={file.type} />
		</video>}
    <br/>
    {
      file.type !== "video/mp4" && <a href={`/api/download/${file.id}/${file.name}`}>Download</a>
    }
	</div>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getServerSideProps({ req, params}) {
	let res;
	if(req){
		res = await fetch(`http://localhost:3000/api/file/${params.id}`)
	}
	else {
		  res = await fetch(`api/file/${params.id}`)
	}
  // Call an external API endpoint to get posts.
  const file = await res.json()
	console.log(file);
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      file,
    },
  }
}

export default Blog
