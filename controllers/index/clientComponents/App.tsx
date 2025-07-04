import Footer from "./Footer/Footer"
import Banner from "./Heading/Banner"
import NavBar from "./NavBar/NavBar"
import AppScrollTrigger from "./ScrollTrigger/AppScrollTrigger"
import Desktop from "./Template/Desktop/Desktop"
import DesktopCard from "./eCards/Desktop/Desktop"
import Marketing from "./Template/Marketing"
import Mobile from "./Template/Mobile/Mobile"

const App = () => {
  return (
    <div className="bg-gradient-to-r from-[#C8F8FF] to-[#FFD18C] flex flex-col items-center">
        <NavBar />
        <Banner />
        <Mobile />
        <Desktop />
        <Marketing />
        <DesktopCard />
        <AppScrollTrigger/>
        <Footer />
    </div>
  )
}

export default App
