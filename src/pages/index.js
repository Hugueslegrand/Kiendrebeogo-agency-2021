import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <h1>Welcome to Inghelbrecht Agency!</h1>
      <Link to="/about">About page</Link>
      <p>Lorem ipsum</p>
      <StaticImage
        alt="randomized unsplash image!"
        src="../images/gatsby-astronaut.png"
      />
    </main>
  )
}
export default IndexPage
