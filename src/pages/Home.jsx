import Layout          from '../components/Layout'
import Hero            from '../components/Hero'
import ProchainSeances from '../components/ProchainSeances'
import PainPoints      from '../components/PainPoints'
import HowItWorks      from '../components/HowItWorks'
import About           from '../components/About'
import Services        from '../components/Services'
import GaleriePhotos   from '../components/GaleriePhotos'
import Testimonials    from '../components/Testimonials'
import Etudes          from '../components/Etudes'
import FAQ             from '../components/FAQ'
import CTABanner       from '../components/CTABanner'
import { CALENDLY_URL } from '../constants'

export default function Home() {
  return (
    <Layout>
      <Hero             calendlyUrl={CALENDLY_URL} />
      <ProchainSeances  calendlyUrl={CALENDLY_URL} />
      <PainPoints />
      <HowItWorks />
      <About            calendlyUrl={CALENDLY_URL} />
      <Services         calendlyUrl={CALENDLY_URL} />
      <GaleriePhotos />
      <Testimonials />
      <Etudes />
      <FAQ />
      <CTABanner        calendlyUrl={CALENDLY_URL} />
    </Layout>
  )
}
