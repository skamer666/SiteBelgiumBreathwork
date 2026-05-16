import { useScroll, useSpring, motion } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'
import MobileCTA from './MobileCTA'
import WhatsAppButton from './WhatsAppButton'
import { CALENDLY_URL } from '../constants'

export default function Layout({ children }) {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  return (
    <div className="font-inter bg-cream text-navy-500 overflow-x-hidden">
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[100]"
        style={{ scaleX, background: 'linear-gradient(90deg, #4A7C59, #7C9A7E, #2D4A7A)' }}
      />
      <Navbar calendlyUrl={CALENDLY_URL} />
      <main>{children}</main>
      <Footer calendlyUrl={CALENDLY_URL} />
      <MobileCTA calendlyUrl={CALENDLY_URL} />
      <WhatsAppButton />
    </div>
  )
}
