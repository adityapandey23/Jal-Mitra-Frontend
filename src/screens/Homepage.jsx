import {Navbar, HeroSection, AboutUs} from '../components/index'

function Homepage() {
  return <div>
    <Navbar />
    <HeroSection/>
    <div className='bg-blue-100'>
    <div className='max-w-7xl mx-auto'>
      <AboutUs />
    </div>
    </div>
    
  </div>
}

export default Homepage