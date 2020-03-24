import React from "react"
import Layout from "../components/Layout"

const Home = () => (
  <Layout>
    <div className="logo">
      <h1>Michael A. Persaud</h1>
    </div>
    <div className="inner">
      <div className="image-fit">
        <img
          src="https://templated.co/items/demos/caminar/images/pic02.jpg"
          alt=""
        ></img>
      </div>
      <div className="s2">
        <header className="s2-header">
          <h2>Portfolio</h2>
          <hr></hr>
          <p>Art. Photography. Everything in between.</p>
        </header>
      </div>
      <div className="gallery">
        <div className="column">
          <img src="https://templated.co/items/demos/caminar/images/pic03.jpg"></img>
          <img src="https://templated.co/items/demos/caminar/images/pic01.jpg"></img>
          <img src="https://templated.co/items/demos/caminar/images/pic04.jpg"></img>
        </div>
        <div className="column">
          <div className="textbox">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <img src="https://templated.co/items/demos/caminar/images/pic05.jpg"></img>
          <img src="https://instagram.fewr1-5.fna.fbcdn.net/v/t51.2885-15/e35/62018998_402654270594328_5619821698064839953_n.jpg?_nc_ht=instagram.fewr1-5.fna.fbcdn.net&_nc_cat=104&_nc_ohc=sNddo9d7S2sAX_KPxbb&oh=bface1833242a4bffd9247efa3dc5d57&oe=5EA0D4CA"></img>
        </div>
      </div>
    </div>
  </Layout>
)

export default Home
