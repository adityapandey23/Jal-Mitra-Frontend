import { AboutUsContent } from "../constants"
import { about_1, about_2, about_3 } from "../assets"

function AboutUs() {
  return <div>
    <h3 className='text-center font-bold text-2xl md:text-4xl pt-20'>About Us</h3>

    <div className='flex justify-around items-center mt-16 md:mt-10 flex-wrap max-md:pb-10 max-md:text-center'>
        <div>
            <h3 className="font-semibold text-2xl mb-3">{AboutUsContent[0].Title}</h3>
            <p className="max-w-md">{AboutUsContent[0].Content}</p>
        </div>

        <img src={about_1} alt="" className="max-md:mt-20"/>
    </div>

    <div className='flex justify-around items-center mt-16 md:mt-10 flex-wrap-reverse max-md:pb-10 max-md:text-center'>
        <img src={about_2} alt="" className="max-md:mt-20"/>

        <div>
            <h3 className="font-semibold text-2xl mb-3">{AboutUsContent[1].Title}</h3>
            <p className="max-w-md">{AboutUsContent[1].Content}</p>
        </div>
    </div>

    <div className='flex justify-around items-center mt-16 md:mt-10 flex-wrap max-md:pb-10 max-md:text-center'>
        <div>
            <h3 className="font-semibold text-2xl mb-3">{AboutUsContent[2].Title}</h3>
            <p className="max-w-md">{AboutUsContent[2].Content}</p>
        </div>

        <img src={about_3} alt="" />
    </div>


  </div>
}

export default AboutUs