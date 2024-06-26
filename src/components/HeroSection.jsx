import { WavesVector } from '../assets'
import {SquareRoundButton} from './index'

function HeroSection() {
  return <div className='pt-20 mt-10 mx-auto'>
    <div className='mt-20'>
      <h2 className='font-bold text-3xl md:text-5xl leading-normal md:leading-relaxed text-center'>Predicting Groundwater <br /> Levels and Quality <br /> for a Sustainable Future</h2>
      <div className='flex justify-center mt-10'>
        <SquareRoundButton label="Get Started" onClick={() => {}}/>
      </div>
    </div>
    <div className='mt-24 md:mt-44'>
      <img src={WavesVector} alt="" className='w-full h-48'/>
    </div>
  </div>
}

export default HeroSection