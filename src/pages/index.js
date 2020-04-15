import React, { useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
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
      window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSegPRrg8zvV36u56iL2dvwKlsKLgOrYuN_94MtVMy-LjIY2zg/viewform?usp=sf_link"
    }, 4000)
  }
  return (
    <Layout>
      <audio style={{ "height": "0px" }} src={sound} preload='true'>
      </audio>

      <SEO title="Home"/>

      <div style={{
        maxWidth: `570px`,
        padding: "20px",
        margin: `auto`,
        background: 'rgba(255,255,255,0.8)',
      }}>
        <h3 style={{
          textAlign: `center`,
        }}>Een awkward kookshow waar je tussen de soep en de patatten ook vanalles te weten komt!
        </h3>

        <p>
          Kan jij ook nooit volgen met kookshows? Frustreren die reeds voorgesneden groenten jou ook
          zo mateloos? Heb je achteraf wel gegeten maar niets bijgeleerd?
        </p>
        <p>
          De Blikkenopener biedt soelaassalsa!
        </p>
        <p>
          De Blikkenopener is een live kookshow vanuit de professionele Zendelingen keuken. Simon
          bepaalt het menu, Esther voert uit, Bram filmt en Liesbeth verzorgt de scenografie.
          Tussendoor kom je vanalles te weten over wat we klaarmaken en daarnaast is het vooral
          gezellig samen koken.
        </p>
        <p>
          Door Esthers minimale kennis en trage snijtechniek ligt het niveau laag genoeg zodat
          iedereen thuis mee kan volgen. Als de thuiskoks tijdens de show toch nog een vraag hebben
          kunnen ze die in realtime aan Simon stellen.
        </p>

        <p>
          <b>Volgende kookshow:</b> TBA!
        </p>
        <button style={{ "margin": "auto" }}
                className={"button -red center"}
                onClick={click}>Hou me op de hoogte!
        </button>

        <div style={{ "height": "30px" }}></div>

        <p>
          Want koken met de Blikkenopener is koken met vrienden.
        </p>
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
