import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import sound from "../sound.mp3" // Tell Webpack this JS file uses this image

const IndexPage = () => {
  const click = () => {
    var audio = new Audio(sound)
    audio.play()

    setTimeout(() => {
      window.location.href = "https://forms.gle/QyFkLHDaqwsosUC4A"
    }, 4000);
  }
  return (
    <Layout>
      <SEO title="Home"/>

      <div style={{
        maxWidth: `550px`,
        margin: `auto`,
      }}>
        <h1 style={{
          textAlign: `center`,
        }}>De Blikkenopener!</h1>
        <p>
          Een awkward kookshow waar je tussen de soep en de patatten ook vanalles te weten komt!
        </p>
        <p>
          Kan jij ook nooit volgen met kookshows? Frustreren die reeds voorgesneden groenten jou ook
          zo mateloos? Heb je achteraf wel gegeten maar niets bijgeleerd?
        </p>
        <p>
          De Blikkenopener biedt soelaassalsa!
        </p>
        <p>
          In de Blikkenopener nodigen we je uit voor een live kooksessie in de professionele
          Zendelingen keuken. Tussen pot en pint kom je vanalles te weten over wat we klaarmaken en
          daarnaast is het vooral gezellig samen koken. Simon bepaalt het menu, Esther voert uit,
          Bram
          filmt en Liesbeth last blikjes aan elkaar. Door Esthers minimale kennis en trage
          snijtechniek ligt het niveau laag genoeg zodat iedereen thuis mee kan volgen.
        </p>
        <p>
          We koken in real time dus je kan vanuit je eigen keuken thuis gewoon meedoen op het ritme
          van een absoluut keuken groentje met de glam van een keukenprinses.
        </p>
        <p>
          Tussendoor verbaast Chefkok Simon zijn publiek met ongezien interessante weetjes over wat
          we
          aan het koken zijn! Onze creatieve geesten Bram en Liesbeth zorgen ervoor dat de sfeer
          goed
          zit en we geen enkele detail over het hoofd zien!
        </p>
        <p>
          Als de thuiskoks tijdens de show toch nog een vraag hebben kunnen ze die reallife aan
          Simon
          stellen. De hele groep luisteren mee en inzichten worden gedeeld. Zo groeit de
          Blikkenopener
          community. Want koken met de Blikkenopener is koken met vrienden.
        </p>

        <button style={{ "margin": "auto" }} className={"button -green center"}
                onClick={click}>Inschrijven!
        </button>

        <div style={{ "height": "100px" }}>
        </div>
      </div>


    </Layout>
  )
}

export default IndexPage
