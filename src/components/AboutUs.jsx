import { AboutUsContent } from "../constants"
import { about_1, about_2, about_3 } from "../assets"

function AboutUs() {
  return <div>
    <h3 className='text-center font-bold text-2xl md:text-4xl'>About Us</h3>

    <div className='flex justify-around items-center mt-10'>
        <div>
            <h3 className="font-semibold text-2xl mb-3">{AboutUsContent[0].Title}</h3>
            <p className="max-w-md">{AboutUsContent[0].Content}</p>
        </div>

        <img src={about_1} alt="" />
    </div>

    <div className='flex justify-around items-center mt-10'>
        <img src={about_2} alt="" />

        <div>
            <h3 className="font-semibold text-2xl mb-3">{AboutUsContent[1].Title}</h3>
            <p className="max-w-md">{AboutUsContent[1].Content}</p>
        </div>
    </div>

    <div className='flex justify-around items-center mt-10'>
        <div>
            <h3 className="font-semibold text-2xl mb-3">{AboutUsContent[2].Title}</h3>
            <p className="max-w-md">{AboutUsContent[2].Content}</p>
        </div>

        <img src={about_3} alt="" />
    </div>


  </div>
}

export default AboutUs