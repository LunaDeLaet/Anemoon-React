import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// pages
import Welkom from './pages/Welkom'
import Teamleden from './pages/Teamleden'
import Onderzoek from './pages/Onderzoek'
import Therapie from './pages/Therapie'
import Tarieven from './pages/Tarieven'
import Contact from './pages/Contact'
import Subteams from './pages/Subteams'
import ErdonPage from './pages/teamleden/Erdon'
import SnehaPage from './pages/teamleden/Sneha'
import AysePage from './pages/teamleden/Ayse'
import SylkePage from './pages/teamleden/Sylke'
import LamiyaPage from './pages/teamleden/Lamiya'
import IremPage from './pages/teamleden/Irem'
import KarenPage from './pages/teamleden/Karen'
import ElliePage from './pages/teamleden/Ellie'
import JennyPage from './pages/teamleden/Jenny'
import SemraPage from './pages/teamleden/Semra'
import DieterPage from './pages/teamleden/Dieter'
import JenthePage from './pages/teamleden/Jenthe'
import SarahPage from './pages/teamleden/Sarah'
import SinemPage from './pages/teamleden/Sinem'
import SamiraPage from './pages/teamleden/Samira'
import CharlottePage from './pages/teamleden/Charlotte'
import MariaPage from './pages/teamleden/Maria'
import KatleenPage from './pages/teamleden/Katleen'

//components
import { Header, Footer } from './components/HeaderFooter'
import { TeamledenWilrijk } from './components/Teamleden'

function App() {
  return (
    <Router>
      <Header />
      <main className="app">
        <Routes>
          <Route exact path="/" element={<Welkom />} />
          <Route exact path="teamleden" element={<Teamleden />} />
          <Route
            exact
            path="psychodiagnostisch-onderzoek"
            element={<Onderzoek />}
          />
          <Route exact path="therapie-begeleiding" element={<Therapie />} />
          <Route exact path="tarieven" element={<Tarieven />} />
          <Route exact path="contact" element={<Contact />} />

          <Route
            exact
            path="teamleden-wilrijk"
            element={<TeamledenWilrijk />}
          />
          <Route exact path="subteams" element={<Subteams />} />

          <Route exact path="teamleden/erdon" element={<ErdonPage />} />
          <Route exact path="teamleden/sneha" element={<SnehaPage />} />
          <Route exact path="teamleden/ayse" element={<AysePage />} />
          <Route exact path="teamleden/sylke" element={<SylkePage />} />
          <Route exact path="teamleden/lamiya" element={<LamiyaPage />} />
          <Route exact path="teamleden/irem" element={<IremPage />} />
          <Route exact path="teamleden/karen" element={<KarenPage />} />
          <Route exact path="teamleden/ellie" element={<ElliePage />} />
          <Route exact path="teamleden/jenny" element={<JennyPage />} />
          <Route exact path="teamleden/semra" element={<SemraPage />} />
          <Route exact path="teamleden/dieter" element={<DieterPage />} />
          <Route exact path="teamleden/jenthe" element={<JenthePage />} />
          <Route exact path="teamleden/sarah" element={<SarahPage />} />
          <Route exact path="teamleden/sinem" element={<SinemPage />} />
          <Route exact path="teamleden/samira" element={<SamiraPage />} />
          <Route exact path="teamleden/charlotte" element={<CharlottePage />} />
          <Route exact path="teamleden/maria" element={<MariaPage />} />
          <Route exact path="teamleden/katleen" element={<KatleenPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
