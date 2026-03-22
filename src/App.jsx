import { useScroll, useSpring, motion } from 'framer-motion'
import Navbar           from './components/Navbar'
import Hero             from './components/Hero'
import ProchainSeances  from './components/ProchainSeances'
import PainPoints       from './components/PainPoints'
import HowItWorks  from './components/HowItWorks'
import About       from './components/About'
import Services    from './components/Services'
import GaleriePhotos from './components/GaleriePhotos'
import Testimonials from './components/Testimonials'
import FAQ         from './components/FAQ'
import CTABanner   from './components/CTABanner'
import Footer      from './components/Footer'
import MobileCTA       from './components/MobileCTA'
import WhatsAppButton  from './components/WhatsAppButton'

const CALENDLY_URL = 'https://calendly.com/belgiumbreathwork'

export { CALENDLY_URL }

export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  return (
    <div className="font-inter bg-cream text-navy-500 overflow-x-hidden">
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[100]"
        style={{
          scaleX,
          background: 'linear-gradient(90deg, #4A7C59, #7C9A7E, #2D4A7A)',
        }}
      />

      <Navbar calendlyUrl={CALENDLY_URL} />

      <main>
        <Hero              calendlyUrl={CALENDLY_URL} />
        <ProchainSeances   calendlyUrl={CALENDLY_URL} />
        <PainPoints />
        <HowItWorks />
        <About      calendlyUrl={CALENDLY_URL} />
        <Services   calendlyUrl={CALENDLY_URL} />
        <GaleriePhotos />
        <Testimonials />
        <FAQ />
        <CTABanner  calendlyUrl={CALENDLY_URL} />
      </main>

      <Footer calendlyUrl={CALENDLY_URL} />

      {/* Sticky bottom CTA – mobile only */}
      <MobileCTA calendlyUrl={CALENDLY_URL} />

      {/* WhatsApp floating button */}
      <WhatsAppButton />
    </div>
  )
}
