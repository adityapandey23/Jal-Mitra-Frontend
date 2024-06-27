import {HowContent} from '../constants'
import {how1, how2} from '../assets'

function How() {
  return <div className='mt-20'>
    <h3 className='text-center font-bold text-2xl md:text-4xl'>How ?</h3>


    <div className=' mt-10 md:mt-20 flex justify-center md:justify-between items-center md:px-20 flex-wrap'>
      <img src={how1} alt="" className='h-[400px] w-[400px] max-md:mb-10'/>
      <div className='flex items-center max-w-[75%] md:max-w-[50%]'>
        <p className='text-center'>
          {HowContent[0].content}
        </p>
      </div>
    </div>


    <div className='flex justify-center md:justify-between items-center md:px-20 mt-10 flex-wrap-reverse'>
      <div className='text-center'>
        <p>
          {HowContent[1].S}
        </p>
        <p >
          {HowContent[1].RRF}
        </p>
        <p >
          {HowContent[1].RSTR}
        </p>
        <p >
          {HowContent[1].RSWI}
        </p>
        <p >
          {HowContent[1].RGWI}
        </p>
        <p >
          {HowContent[1].RTP}
        </p>
        <p >
          {HowContent[1].RWCS}
        </p>
        <p >
          {HowContent[1].VF}
        </p>
        <p >
          {HowContent[1].LF}
        </p>
        <p >
          {HowContent[1].GE}
        </p>
        <p >
          {HowContent[1].T}
        </p>
        <p >
          {HowContent[1].E}
        </p>
        <p >
          {HowContent[1].B}
        </p>
        <p >
          <b>
            {HowContent[1].Relation}
          </b>
        </p>
      </div>

      <img src={how2} alt="" className='h-[400px] w-[400px]'/>
    </div>
  </div>
}

export default How