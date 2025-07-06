import Footer from "./Footer/Footer"
import Banner from "./Heading/Banner"
import NavBar from "./NavBar/NavBar"
import AppScrollTrigger from "./ScrollTrigger/AppScrollTrigger"
import Template from "./Template/Template"
import ECards from "./eCards/ECards"
import Separator from "./Separator"
import UpSell from "./eCards/UpSell"
import ETemplate from "./eCards/ETemplate"

const App = () => {
  return (
    <div className="bg-gradient-to-r from-[#C8F8FF] to-[#FFD18C] flex flex-col items-center">
        <NavBar />
        <Banner />
        <Template />
        <Separator />
        <ETemplate />
        <Separator />
        <ECards />
        <Separator />
        <AppScrollTrigger/>
        <Separator />
        <UpSell />
        <Separator />
        <Footer />
    </div>
  )
}

export default App
