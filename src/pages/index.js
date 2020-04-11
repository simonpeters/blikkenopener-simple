import React, { useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import sound from "../sound.mp3"
import kimchi from "../images/kimchi-small.png"
import $ from "jquery"

import PatternBackground from "../components/pattern-background"


const IndexPage = () => {
  useEffect(() => {
    new PatternBackground($(".pattern-background"))
  })

  const click = () => {
    var audio = new Audio(sound)
    audio.play()

    setTimeout(() => {
      window.location.href = "https://forms.gle/QyFkLHDaqwsosUC4A"
    }, 4000)
  }
  return (
    <Layout>
      <audio style={{ "height": "0px" }} src={sound} preload='true'>
      </audio>
      <SEO title="Home"/>

      <div style={{
        width: `570px`,
        padding: "20px",
        margin: `auto`,
      }}>


      </div>

      <div className="pattern-background"
           data-widget="pattern-background"
           data-expand="false"
           data-move="true"
           data-follow="true"
           data-image={kimchi}>
        <canvas></canvas>
      </div>

    </Layout>
  )
}

export default IndexPage
