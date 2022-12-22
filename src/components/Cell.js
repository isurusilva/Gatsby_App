import React from "react"
import styled from "styled-components"
import logo from "../images/logo-react.png"

const CellGroup = styled.div`
  display: grid;
  grid-template-columns: 60px auto;
  grid-gap: 25px;
  align-item: center;
  min-width: 320px;
`

const CellImage = styled.div`
  width: 60px;
  height: 60px;
  margin: 15px 0 0 0;
  background: #212c4f;
  border-radius: 10px;
  background-image: url(${logo});
  ${"" /* background-image: {logo}; */}
  background-size: 60px;
`

const CellTitle = styled.div`
  font-size: 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 30px 0;
`

const Cell = props => (
  <CellGroup>
    <CellImage image={logo}></CellImage>
    <CellTitle>{props.title}</CellTitle>
  </CellGroup>
)

export default Cell
