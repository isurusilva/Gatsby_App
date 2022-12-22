import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import sketch from "../images/logo-sketch.png"
import figma from "../images/logo-figma.png"
import studio from "../images/logo-studio.png"
import framer from "../images/logo-framer.png"
import react from "../images/logo-react.png"
import swift from "../images/logo-swift.png"
import wallpaper from "../images/wallpaper.jpg"
import wallpaper2 from "../images/wallpaper2.jpg"
import Card from "../components/Card"
import Section from "../components/Section"
import Wave from "../components/Wave"
import staticdata from "../../staticdata.json"
import Cell from "../components/Cell"
import styled from "styled-components"

const SecttionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppsercase;
  color: #94a4ba;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grd-column-gap: 20px;
  padding: 0 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

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
          <img src={sketch} width="50" alt="sketch_logo" />
          <img src={figma} width="50" alt="figma_logo" />
          <img src={studio} width="50" alt="studio_logo" />
          <img src={framer} width="50" alt="framer_logo" />
          <img src={react} width="50" alt="react_logo" />
          <img src={swift} width="50" alt="swift_logo" />
        </div>
        <Wave />
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
    <Section
      image={wallpaper2}
      logo={react}
      title="React for Designers"
      text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum pariatur ad expedita dolor nostrum, eaque rerum accusantium et. Natus odit deleniti sapiente ullam. Exercitationem labore nulla, eveniet soluta expedita doloremque!"
    />

    <SecttionCaption>12 sections - 6 hours</SecttionCaption>
    <SectionCellGroup>
      {staticdata.cells.map(cell => (
        <Cell title={cell.title} image={cell.image} />
      ))}
    </SectionCellGroup>
  </Layout>
)
export const Head = () => <Seo title="Home" />

export default IndexPage
