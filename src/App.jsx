import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './utils/ScrollToTop'

const Home                  = lazy(() => import('./pages/Home'))
const Burnout               = lazy(() => import('./pages/Burnout'))
const Sommeil               = lazy(() => import('./pages/Sommeil'))
const Anxiete               = lazy(() => import('./pages/Anxiete'))
const Blog                  = lazy(() => import('./pages/Blog'))
const BreathworkBruxelles   = lazy(() => import('./pages/BreathworkBruxelles'))
const BreathworkWaterloo    = lazy(() => import('./pages/BreathworkWaterloo'))
const BreathworkBurnout     = lazy(() => import('./pages/articles/BreathworkBurnout'))
const RespirationSommeil    = lazy(() => import('./pages/articles/RespirationSommeil'))
const AlternativePsychologue = lazy(() => import('./pages/articles/AlternativePsychologue'))
const BurnoutSymptomes      = lazy(() => import('./pages/articles/BurnoutSymptomes'))
const CoherenceCardiaque    = lazy(() => import('./pages/articles/CoherenceCardiaque'))
const LacherPrise           = lazy(() => import('./pages/articles/LacherPrise'))
const NotFound              = lazy(() => import('./pages/NotFound'))

export { CALENDLY_URL } from './constants'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-screen bg-hero-bg" />}>
        <Routes>
          <Route path="/"                                                    element={<Home />} />
          <Route path="/breathwork-bruxelles"                                element={<BreathworkBruxelles />} />
          <Route path="/breathwork-waterloo"                                 element={<BreathworkWaterloo />} />
          <Route path="/burnout"                                             element={<Burnout />} />
          <Route path="/sommeil"                                             element={<Sommeil />} />
          <Route path="/anxiete"                                             element={<Anxiete />} />
          <Route path="/blog"                                                element={<Blog />} />
          <Route path="/blog/comment-le-breathwork-aide-contre-le-burnout"  element={<BreathworkBurnout />} />
          <Route path="/blog/exercices-de-respiration-pour-mieux-dormir"    element={<RespirationSommeil />} />
          <Route path="/blog/breathwork-ou-psychologue-bruxelles"           element={<AlternativePsychologue />} />
          <Route path="/blog/burnout-symptomes"                              element={<BurnoutSymptomes />} />
          <Route path="/blog/coherence-cardiaque"                            element={<CoherenceCardiaque />} />
          <Route path="/blog/lacher-prise"                                   element={<LacherPrise />} />
          <Route path="*"                                                    element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
