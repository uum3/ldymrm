import '../styles.css'
import Layout from '../components/layout'

export default function MyApp({ Component, pageProps }) {
  return <>
    <Layout>
      <header>
        <h1>umm3</h1>
      </header>
      <Component {...pageProps} />
    </Layout>
    </>
}
