import React from 'react'
import Head from "next/head";

export default class Layout extends React.Component {
  render () {
    return (
      <div>
        <Head>
		        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-165915835-1"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-165915835-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-165915835-1');
</script>
              `,
          }}
        />
        </Head>
        {this.props.children}
      </div>
    )
  }
}
