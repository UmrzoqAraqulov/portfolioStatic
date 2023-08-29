import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import FrontLayout from "./components/layouts/FrontLayout"
import AboutPage from "./pages/AboutPage"
import PortfoliosPage from "./pages/PortfoliosPage"
import ResumePage from "./pages/ResumePage"
import ContactPage from "./pages/ContactPage"
import CreatePortFolioPage from "./pages/CreatePortFolioPage"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path="/" element={<FrontLayout/>}>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/portfolios" element={<PortfoliosPage/>}/>
          <Route path="/resume" element={<ResumePage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/createportfolio" element={<CreatePortFolioPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App