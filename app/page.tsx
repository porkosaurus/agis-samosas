import Image from 'next/image';
import './page.css';
import samosas from '../public/kisspng-samosa-pakora-indian-cuisine-take-out-roti-samosa-5abe1ef607dda6.9005272015224092060322.png';
import samosa from '../public/F054142F-E627-45F4-94CF-820D08A285C2.png';
import dish from '../public/IMG_0587-removebg-preview.png'
import dish1 from '../public/IMG_0152-removebg-preview.png';
import dish2 from '../public/IMG_0159-removebg-preview.png';
import dish3 from '../public/IMG_0154-removebg-preview.png';
import Gallery from '@/app/components/gallery/gallery';
import ann from '@/public/393779499_17958954023670408_2906163036312879448_n.jpg'
import samosasTeam from '../public/Samosas-on-plate-SQ.webp'
import ContactImage from '../public/contact.jpg'
import BottomCurve from './components/bottom-curve/bottom-curve';
import {AiOutlineInstagram} from 'react-icons/ai'
import {FaYelp} from 'react-icons/fa'
import Modal from './components/modal/modal';

export default function Home() {
  return (
    <main>
      <section className='header sm:h-[60vh] lg:h-[100vh] w-full relative'>

          <div className='w-full h-[100vh]'>
            <img src="https://static.tildacdn.com/tild3334-3965-4164-a331-306439656639/_svg-3.svg" alt="" />
            <nav className='absolute top-16'>
            <ul className='w-screen flex justify-center pl-20 pr-20 text-lg text-custom-secondary-color'>
              <li className='cursor-pointer mr-16'>About</li>
              <li className='cursor-pointer mr-16'>Home</li>
              <li className='cursor-pointer'><a href="#contact">Contact</a></li>
            </ul>
          </nav>
            <div className='m-20 w-screen mx-auto '>
                <h1 className='text-center uppercase text-9xl text-custom-secondary-color'>Caribbean Fusion</h1>
                <h2 className='heading-secondary text-center uppercase text-8xl text-custom-secondary-color'>Agi&apos;s Samosas</h2>
                <div className='mt-8 w-screen flex items-center'>
                <button className='p-4 pl-8 pr-8 mx-auto text-center bg-custom-secondary-color text-2xl rounded-md border border-3 border-black'>Contact Us</button>

                </div>
            </div>
            <div className='second-section bg-custom-secondary-color h-[25vh]'>

            </div>
          </div>
          <div className='absolute bottom-16 left-10 w-[22vw]'>
          <Image height={250} src={samosa} alt='samosa'/>
          </div>
          {/* <div className='absolute bottom-16 right-0'>
            <Image height={200} src={samosas} alt='samosas'/>
          </div> */}
      </section>
        <section className='h-[80vh] w-screen relative bg-custom-secondary-color flex flex-col justify-center items-centers'>
          <div>
          <h2 className='pt-2 uppercase text-center text-8xl text-custom-primary-color'>Caribbean Cuisine</h2>
            <h2 className='pt-2 uppercase text-center text-8xl text-custom-main-green'>Most Popular In The World</h2>
          </div>
          <h2 className='mx-auto mt-4 mb-0 text-2xl'>Find us weekly at</h2>

            <div className='w-[40%]  mx-auto flex mt-4'>
              <div className='h-[30%] w-[50%] uppercase mr-12'>
                <h3 className='text-3xl text-custom-primary-color'>Hollywood Farmer&apos;s Market</h3>
                <h5 className='text-xl uppercase'>Sunday</h5>
                <h5 className='text-xl'>8AM to 1PM</h5>
              </div>
              <div className='h-[30%] w-[50%] uppercase'>
                <h3 className='text-3xl text-custom-primary-color'>Playa Vista Farmer&apos;s Market</h3>
                <h5 className='text-xl uppercase'>Saturday</h5>
                <h5 className='text-xl'>9AM to 2PM</h5>

              </div>
            </div>
        </section>
        <section>
          <div className='bottom-curve-container h-[120vh] w-screen bg-custom-secondary-color'>
            <div className='curve-bg-overlay'>
              <BottomCurve/>
            </div>

          </div>
        </section>
        <section className='h-[30vw] bg-custom-banner-color w-screen'>
            <div className='w-full h-full flex justify-around items-center'>
              <div className='w-[25vw]'>
              <Image className='md:block sm:hidden' src={dish} alt='dish'/>
              </div>
              <div className='w-[25vw]'>
              <Image className='w-' src={dish1} alt='dish'/>
              </div>
              <div className='w-[25vw]'>
              <Image src={dish2} alt='dish'/>
              </div>
              <div className='w-[25vw]'>
              <Image className='md:block sm:hidden' src={dish3} alt='dish'/>
              </div>
            </div>
        </section>
        <section id='contact' className='h-[90vh] flex items-center pb-12'>
          <div className='contact-form p-4 bg-white mx-auto w-[80%] sm:h-[70%] md:h-[85%]'>
            <form className='w-[50%] h-full flex justify-center flex-col' action="">
              <h2 className='text-3xl text-custom-primary-color mb-8 pl-4'>Contact Us</h2>
              <input placeholder='Enter your email:' className='mb-8 bg-white border border-pink-500 border-3 h-[10%] w-[70%] pl-4' type="text" />
              <input placeholder='Enter your message:' className='bg-white border border-pink-500 border-3 h-[10%] w-[70%] pl-4' type="text" />
              <button className='text-black bg-custom-secondary-color mt-8 sm:p-1 md:p-4 w-[40%] rounded-lg' type='submit'>Submit Your Message</button>
            </form>

          </div>
        </section>
        <section className='w-screen'>
          <div className='flex justify-center w-full'>
            <div className='flex justify-end w-[15%] flex-col'>
              <h3 className='text-center text-4xl text-main-black'>Join the</h3>
              <h2 className='text-center text-4xl text-custom-secondary-color m-0'>Samosa Team</h2>
            </div>
            <div className='flex items-end mb-1.5'>
              <a href="https://www.instagram.com/agiscaribbean/"><AiOutlineInstagram size={30} color="#F0CEA0" className="mr-3"></AiOutlineInstagram></a>
              <a href="https://www.yelp.com/biz/agis-caribbean-hollywood"><FaYelp size={28} color="#F0CEA0"/></a>
            </div>
          </div>
          <Gallery></Gallery>
        </section>
        <Modal/>
    </main>
  )
}
