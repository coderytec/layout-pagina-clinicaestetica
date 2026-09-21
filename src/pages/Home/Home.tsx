import "./home.css"

import { Header } from "../../components/Header/Header"
import { Hero } from "../../components/Hero/Hero"
import { Problem } from "../../components/Problem/Problem"
import { Solution } from "../../components/Solution/Solution"
import { Benefits } from "../../components/Benefits/Benefits"
import { Modules } from "../../components/Modules/Modules"
import { Bonuses } from "../../components/Bonuses/Bonuses"
import { Testimonials } from "../../components/Testimonials/Testimonials"
import { Authority } from "../../components/Authority/Authority"
import { Pricing } from "../../components/Pricing/Pricing"
import { Guarantee } from "../../components/Guarantee/Guarantee"
import { FAQ } from "../../components/FAQ/FAQ"
import { CTA } from "../../components/CTA/Cta"
import { Footer } from "../../components/Footer/Footer"

export function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <Benefits />
      <Modules />
      <Bonuses />
      <Testimonials />
      <Authority />
      <Pricing />
      <Guarantee />
      <FAQ />
      <CTA />
      <Footer />
    </>
  )
}
