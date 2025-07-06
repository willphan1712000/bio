import Footer from "./Footer/Footer"
import Banner from "./Heading/Banner"
import NavBar from "./NavBar/NavBar"
import AppScrollTrigger from "./ScrollTrigger/AppScrollTrigger"
import Template from "./Template/Template"
import ECards from "./eCards/ECards"
import Marketing from "./Template/Marketing"
import Separator from "./Separator"
import UpSell from "./eCards/UpSell"

const App = () => {
  return (
    <div className="bg-gradient-to-r from-[#C8F8FF] to-[#FFD18C] flex flex-col items-center">
        <NavBar />
        <Banner />
        <Template />
        <Marketing />
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
