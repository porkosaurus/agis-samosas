import React from 'react'
import './bottom-curve.css'
import BottomCurveImage from '../../images/BottomCurveContainer.webp'
import SmallImageContainer from '@/public/brett-jordan-mWu0EHu5zW8-unsplash.jpg'
import BigImageContainer from '@/public/393779499_17958954023670408_2906163036312879448_n.jpg'
import Image from 'next/image'

const BottomCurve = () => {
  return (
        <div className='bottom-curve-container relative'>
        <div className='curve-bg-overlay'>
            <div className='w-full h-full flex items-center'>
                <div className='w-[60%] flex items-center justify-around'>
                    {/* <div className='w-[30%]'>
                        <Image src={SmallImageContainer} alt='small image'/>
                    </div> */}
                    <div className='w-[60%]'>
                        <Image src={BigImageContainer} alt='big image'/>
                    </div>
                </div>
                <div className='w-[40%]'>
                <h2 className='text-4xl font-bold text-custom-secondary-color uppercase mb-8 underline'>Hansammy Juman</h2>
                <p className='w-[80%] sm:text-md md:text-sm paragraph font-bold text-custom-secondary-color uppercase'>Agi (meaning Grandma) came from British Guyana to America in the mid-90s and brought her amazing cuisine with her. Hansammy Juman, Agi's Daughter-in-law, our head chef and Mom was side by side with Agi cooking in America year after year. Now Hansammy has opened Agi's Caribbean to share Agi's wisdom with the World. We are a family owned business whi is here to feed your belly with delicious new flavors. Come try Agi's Caribbean Cuisine!</p>

                </div>
            </div>
        </div>
        </div>
  )
}

export default BottomCurve