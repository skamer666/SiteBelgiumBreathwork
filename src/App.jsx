import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ScrollToTop from './utils/ScrollToTop'

const Home                  = lazy(() => import('./pages/Home'))
const Burnout               = lazy(() => import('./pages/Burnout'))
const Sommeil               = lazy(() => import('./pages/Sommeil'))
const Anxiete               = lazy(() => import('./pages/Anxiete'))
const Blog                  = lazy(() => import('./pages/Blog'))
const BreathworkBurnout     = lazy(() => import('./pages/articles/BreathworkBurnout'))
const RespirationSommeil    = lazy(() => import('./pages/articles/RespirationSommeil'))
const AlternativePsychologue = lazy(() => import('./pages/articles/AlternativePsychologue'))

export { CALENDLY_URL } from './constants'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-screen bg-hero-bg" />}>
        <Routes>
          <Route path="/"                                                    element={<Home />} />
          <Route path="/burnout"                                             element={<Burnout />} />
          <Route path="/sommeil"                                             element={<Sommeil />} />
          <Route path="/anxiete"                                             element={<Anxiete />} />
          <Route path="/blog"                                                element={<Blog />} />
          <Route path="/blog/comment-le-breathwork-aide-contre-le-burnout"  element={<BreathworkBurnout />} />
          <Route path="/blog/exercices-de-respiration-pour-mieux-dormir"    element={<RespirationSommeil />} />
          <Route path="/blog/breathwork-ou-psychologue-bruxelles"           element={<AlternativePsychologue />} />
          <Route path="*"                                                    element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
