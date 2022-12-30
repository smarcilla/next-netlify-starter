import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Las chapas de werty</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Las chapas de werty" />
        <p className="description">
          Aqui os presento mi coleccion de chapas de ultima generación.
        </p>
        <img src='images/2022-12-30 14.42.29.jpg'/>        
      </main>

      <Footer />
    </div>
  )
}
