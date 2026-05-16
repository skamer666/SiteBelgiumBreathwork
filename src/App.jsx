import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ScrollToTop from './utils/ScrollToTop'
import Home from './pages/Home'
import Burnout from './pages/Burnout'
import Sommeil from './pages/Sommeil'
import Anxiete from './pages/Anxiete'
import Blog from './pages/Blog'
import BreathworkBurnout from './pages/articles/BreathworkBurnout'
import RespirationSommeil from './pages/articles/RespirationSommeil'
import AlternativePsychologue from './pages/articles/AlternativePsychologue'

export { CALENDLY_URL } from './constants'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
    </BrowserRouter>
  )
}
