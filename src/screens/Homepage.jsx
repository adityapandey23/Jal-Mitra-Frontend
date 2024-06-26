import {Navbar, HeroSection, AboutUs, How} from '../components/index'

function Homepage() {
  return <div>
    <Navbar />
    <HeroSection/>
    <div className='bg-blue-155'>
      <div className='max-w-7xl mx-auto'>
        <AboutUs />
      </div>
    </div>
    <div className='max-w-7xl mx-auto'>
      <How />
    </div>
    
  </div>
}

export default Homepage