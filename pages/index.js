import Head from 'next/head'

export default function Home() {

  const changeFilter = (color) => {
    if (typeof window !== 'undefined') {
      console.log(document.getElementById("filter-color"));
      document.getElementById("filter-color").className = "filter " + color;
    }
  }

  return (
    <div>
      <Head>
        <title>RGB camera filter</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div class="wrapper">
          <video id="videoFeed" autoPlay loop muted playsInline></video>
          <div id="filter-color"></div>
          <div class="filters">
            <div class="filter-button" style={{ backgroundColor: "rgba(255,255,255,1)" }} onClick={() => changeFilter('')}> </div>
            <div class="filter-button" style={{ backgroundColor: "rgba(255,0,0,1)" }} onClick={() => changeFilter('red')}> </div>
            <div class="filter-button" style={{ backgroundColor: "rgba(0,255,0,1)" }} onClick={() => changeFilter('green')}> </div>
            <div class="filter-button" style={{ backgroundColor: "rgba(0,0,255,1)" }} onClick={() => changeFilter('blue')}> </div>
          </div>
        </div>
      </main>
      <script src="/script.js" async />
    </div>
  )
}
