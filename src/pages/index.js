import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn How To Create Web App Using Gatsby</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi,
          aspernatur! Sed saepe modi minus assumenda quis, vel voluptas cum
          expedita qui consequuntur nostrum amet, fuga odio recusandae, itaque
          soluta voluptatibus?
        </p>
        <Link to="/page-2">Watch the Video</Link>
      </div>
    </div>
  </Layout>
)
export const Head = () => <Seo title="Home" />

export default IndexPage
