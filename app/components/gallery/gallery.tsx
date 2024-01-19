import React from 'react'
import Image from 'next/image'
import './gallery.css'
import gallery1 from '@/public/IMG_1954.jpeg'
import gallery2 from '@/public/C25859E5-6D4D-475F-B98D-515D149EFF71.jpeg'
import gallery3 from '@/public/IMG_0153.jpeg'
import gallery4 from '@/public/IMG_0780.jpg'
import gallery5 from '@/public/gallery5.jpg'
import gallery6 from '@/public/IMG_1403.jpeg'
import gallery7 from '@/public/IMG_1304.jpg'
import gallery8 from '@/public/IMG_5689.jpeg'

const Gallery = () => {
  return (
    <div className='gallery-container pt-8 mb-16'>
        <div className="masonryGalleryDesktop">
            <div className="itemBox box-0">
                <Image src={gallery4} alt="Delicious Burrito" />
            </div>
            <div className="itemBox box-1">
                <Image src={gallery2} alt="Tacos On A Plate" />
            </div>
            <div className="itemBox box-2">
                <Image src={gallery1} alt="Egg On a Taco" />
            </div>
            <div className="itemBox box-3">
                <Image src={gallery3} alt="Beautiful Plate Of Tacos" />
            </div>
            <div className="itemBox box-4">
                <Image src={gallery7} alt="Tacos Tequila Whiskey Team" />
            </div>
            <div className="itemBox box-5">
                <Image src={gallery5} alt="Tacos Tequila Whiskey food Truck" />
            </div>
            <div className="itemBox box-6">
                <Image src={gallery6} alt="Taco's With Salsa and Lime" />
            </div>
            <div className="itemBox box-7">
                <Image src={gallery8} alt="Dinner Being Served" />
            </div>
        </div>
    </div>
  )
}

export default Gallery