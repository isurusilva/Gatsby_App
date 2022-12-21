import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

import sketch from "../images/logo-sketch.png"
import figma from "../images/logo-figma.png"
import studio from "../images/logo-studio.png"
import framer from "../images/logo-framer.png"
import react from "../images/logo-react.png"
import swift from "../images/logo-swift.png"
import wallpaper from "../images/wallpaper.jpg"
import Card from "../components/Card"

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>
          Learn To <br /> Create Web App Using Gatsby
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi,
          aspernatur! Sed saepe modi minus
        </p>
        <Link to="/page-2">Watch the Video</Link>
        <div className="Logos">
          <img src={sketch} width="50" />
          <img src={figma} width="50" />
          <img src={studio} width="50" />
          <img src={framer} width="50" />
          <img src={react} width="50" />
          <img src={swift} width="50" />
        </div>
        <svg
          width="100%"
          height="172"
          viewBox="0 0 100% 172"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="white">
            <animate
              repeatCount="indefinite"
              fill="freeze"
              attributeName="d"
              dur="15s"
              values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;
              M0 87.1596C316 87.1597 444 160 884 52.0001C1324 -55.9999 1320.29 34.966 1538 71.251C1814 117.251 2156 189.252 2560 87.1597V233.161L0 233.161V87.1596Z;
              M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;
              M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z"
            />
          </path>
        </svg>
      </div>
    </div>
    <div className="Cards">
      <h2>11 courses, more coming</h2>
      <div className="CardGroup">
        <Card title="Design system" text="8 sections" image={wallpaper} />
        <Card
          title="React for Designers"
          text="12 sections"
          image={wallpaper}
        />
        <Card title="Sound system" text="11 sections" image={wallpaper} />
        <Card
          title="Advance React for Designers"
          text="10 sections"
          image={wallpaper}
        />
      </div>
    </div>
  </Layout>
)
export const Head = () => <Seo title="Home" />

export default IndexPage
