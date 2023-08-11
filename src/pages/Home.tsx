 
import Navbar1 from '../components/Navbar1'
import Hero from '../components/Hero'
import Popular from '../components/Popular'
import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
        <Navbar1/>
        <Hero/>
        <Popular/>
        <AboutUs/>
        <Footer/>
    </div>
  )
}

export default Home