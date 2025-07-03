import { Theme } from "@radix-ui/themes"
import Footer from "./Footer/Footer"
import AppScrollTrigger from "./ScrollTrigger/AppScrollTrigger"
import NavBar from "./NavBar/NavBar"
import Banner from "./Heading/Banner"

const Container = () => {
  return (
    <Theme>
        <div className="bg-gradient-to-r from-[#C8F8FF] to-[#FFD18C]">
            <NavBar />
            <Banner />
            <AppScrollTrigger />
            <Footer />
        </div>
    </Theme>
  )
}

export default Container
