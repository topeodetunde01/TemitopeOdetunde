import { Link, useLocation} from "react-router-dom"
import { market,comments,bookCovers,merch } from "../constants"
import api from "../api"
import {DateTime} from 'luxon'
import { useEffect, useState } from "react"
import {Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay } from "swiper/modules";
import linkedin from "../assets/linkedin.svg"
import x from "../assets/twitter.svg"
import ig from "../assets/ig.svg"
import fb from "../assets/fb.svg"
import tiktok from "../assets/tiktok.svg"
import 'swiper/css';
import 'swiper/css/autoplay'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoadingScreen from "../components/LoadingScreen";
import Enhance from "../components/Enhance"

const Home: React.FC = () => {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(false);
  const element = useLocation()

  useEffect( ()=>{
    setLoading(true)
    api.get('/api/home')
    .then((res)=> {
      console.log(res.data)
      setBlog(res.data)
     setTimeout(()=>{
      setLoading(false)
     }, 4500)
    }
    )

  },[])

  useEffect(()=>{
    console.log(loading)
    if(element.hash && !loading){
      const newElement = element.hash.slice(1)
      console.log(newElement)
      document.getElementById(`${newElement}`)!.scrollIntoView({ block : 'end', behavior : "instant"});
    }
  },[element.hash, loading])
  return (<>
  {loading ? <LoadingScreen/> : (<>
    <Navbar/>
    <div className="overflow-x-hidden">
    <section className=" bg-grey-100 px-5 pt-24 pb-11 lg:pt-44 lg:py-[clamp(85px,15.62vh,174px)] lg:pl-[clamp(85px,8.125vw,117px)] font-satoshi flex relative">
      <div>
        <h1 className="text-3xl md:text-5xl lg:text-[clamp(75px,8vw,120px)] leading-none font-extrabold">
          Empowering <br/> Careers, <br/> Enriching Souls.
        </h1>
        <p className="mt-6 lg:mt-[clamp(20px,5.54vh,48px)] lg:text-3xl font-normal md:w-[80%] lg:w-[75%] text-balance">
          I work with individuals to discover their unique path to career fulfilment and finding the greatest version of themselves.
        </p>
      </div>
      <div className="absolute w-20 top-24 md:w-36 lg:w-[200px] lg:top-[150px] right-10 lg:right-36">
        <img src="/images/home.gif" alt="" className="w-full"/>
      </div>
    </section>
    <section className="bg-purple bg-bio bg-no-repeat flex justify-end relative font-satoshi">
      <img src="/images/homeAbout.png" alt="" className="lg:w-[68.68vw]"/>
      <div className="absolute bottom-0 md:bottom-28 lg:bottom-6 md:left-12 bg-white rounded-xl p-3 md:p-5 lg:rounded-3xl flex flex-col items-start text-grey-200 w-[90%] max-w-[clamp(650px,62vw,897px)]">
        <h4>
          Who am I?
        </h4>
        <h1 className="lg:text-[clamp(45px,4vw,64px)] font-bold text-black-200">
          Temitope Odetunde
        </h1>
        <p className="text-xs lg:text-[clamp(16px,1.38vw,20px)] lg:leading-7 line-clamp-4 md:line-clamp-6 text-wrap text-justify truncate ">
          Your guide to navigating the intersection of professional success and spiritual fulfillment. As a leading voice in pharmacy consultancy and faith-based personal development, Temitope blends her extensive expertise in the pharmaceutical industry with a deep-rooted commitment to Christian values. With Temitope, you'll discover a path to excellence in your career while staying true to your faith, driven by a passion for empowering individuals to achieve greatness in all aspects of their lives.
        </p>
        <Link to="/about" className="bg-black-200 border mt-3 border-black-200 text-white hover:bg-white hover:text-black-200 transition-all duration-700 py-2 px-3 md:py-4 md:px-5 rounded text-xs md:text-lg">
          Read More
        </Link>
      </div>
    </section>
    <section className="bg-[#000] px-5 md:px-14 lg:px-28 py-12 md:py-24 font-satoshi">
      <p className="text-[#E4E7EC] text-xl md:text-[clamp(20px,2.222vw,32px)] md:leading-9 lg:w-[75%]">
        As a mentor in personal development, I support individuals in aligning their professional goals with their spiritual values. Together, we embark on a journey towards excellence, driven by passion, expertise, and unwavering faith.
      </p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-16 mt-12 lg:mt-16 text-[#D0D5DD] text-lg md:text-2xl">
      <div className="flex items-center gap-4">
        <div className="w-2 h-2 rounded-full bg-white " />
        <p>Career</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-2 h-2 rounded-full bg-white " />
        <p>Author and Speaker</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-2 h-2 rounded-full bg-white " />
        <p>Coaching and Mentoring</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-2 h-2 rounded-full bg-white " />
        <p>Medicines Management Consultant</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-2 h-2 rounded-full bg-white " />
        <p>Regulatory and Compliance Specialist</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-2 h-2 rounded-full bg-white " />
        <p>Develop and Review Medicines Policies and <br /> Procedures</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-2 h-2 rounded-full bg-white " />
        <p>
          Review Educational Provider's Training Materials
        </p>
      </div>
      </div>

    </section>
    <section className="bg-[#1D2739] px-5 md:px-14 lg:px-24 py-12 lg:py-28 font-satoshi">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col items-start md:flex-row md:items-center text-white gap-5">
          <img src="/images/medal.png" alt="" />
          <h1 className="text-4xl lg:text-7xl font-bold ">Ambassadors <br/>
            <span className="font-normal">in the marketplace</span>
          </h1>
        </div>
        <div className="flex items-center  gap-4">
          <Link to="/aim" className="text-white bg-purple rounded px-4 py-3 md:py-4 md:px-5 border border-purple hover:bg-grey-100 hover:text-purple transition-all duration-700 cursor-pointer"> 
            Visit AIM Page
          </Link>
          <Link to="https://www.youtube.com/@AmbassadorTemitope" target="_blank" className="text-purple border border-purple rounded px-4 py-3 md:py-4 md:px-5">
            Visit youtube
          </Link>
        </div>
      </div>
      <div className="mt-16 lg:mt-[90px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {market.map((item,index) => {
          if(index == 1 || index == 2){
            return (<div className=" lg:col-span-3 bg-[#D0D5DD] rounded-md lg:rounded-3xl p-5 lg:p-14 " key={item}>
              <img src="/images/Verified.png" alt="verify icon" className="pb-5"/>
              <p className="text-xl md:text-2xl lg:text-3xl">{item}</p>
            </div>)
          }else{
              return (<div className="bg-biogrey bg-no-repeat lg:col-span-2 bg-[#E4E7EC] rounded-lg lg:rounded-3xl p-5 lg:p-14 " key={item} id="veri">
                <img src="/images/Verified.png" alt="verify icon" className="pb-5"/>
                <p className="text-xl md:text-2xl lg:text-3xl">{item}</p>
              </div>)
          }
         
})}
      </div>
    </section>

    <section className="py-20 px-5 lg:py-[clamp(85px,15.62vh,144px)] bg-[#F9F4FF] lg:pl-[clamp(85px,8.125vw,117px)] font-satoshi">
      <h1 className="text-w[#000] text-3xl leading-[50px] md:font-normal font-semibold lg:text-[64px] lg:leading-[90px] mb-7 md:mb-14">
        What people say <br/> about Temitope
      </h1>
      <Swiper className="swiper"
      modules={
        [Autoplay]
      }
      speed={2000}
      autoplay ={
        {
          delay: 1500,
          pauseOnMouseEnter : true
        }
      }
      loop={true}
      slidesPerView= {1}
      spaceBetween ={20}
      breakpoints={
        {
          700 : {
          slidesPerView : 1.5,
          spaceBetween : 24,
          
        },
        1024 : {
          slidesPerView : 2.5,
          spaceBetween : 24,
        }
      }
      }
      >
          {comments.map((commentus) => (
            <SwiperSlide className="swiper-slide swipery bg-white px-10 py-[61px] rounded-[30px] text-[#475367] cursor-pointer slidey" key={commentus.name} >
              <h3 className="mb-2 text-lg md:text-2xl font-normal">{commentus.comment}</h3>
              <p className="bg-[#F2E5FF] rounded-md mt-1 md:mt-3 mb-3 py-1 px-2 w-fit text-purple text-xs md:text-sm font-medium">{commentus.tag}</p> 
              <h2 className="font-bold text-lg md:text-2xl line-clamp-3 truncate" >{commentus.name}</h2>
              <h2 className="font-normal text-lg md:text-2xl line-clamp-3 truncate" >{commentus?.title}</h2>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>

    <section className="bg-white px-5 md:px-14 lg:px-24 py-12 lg:py-28 font-satoshi">
      <div className="flex flex-col gap-5 items-start lg:items-center lg:flex-row lg:gap-[62px] lg:pl-[150px]">
        <h4 className="text-[#4B587C] lg:w-[49%] text-xl md:text-[clamp(20px,2.222vw,32px)]">
          Whether you're seeking professional guidance, personal growth insights, or spiritual enrichment, our library has something for everyone.
        </h4>
        <Link target="_blank" to='https://www.amazon.co.uk/stores/author/B09ZPZNWNT/allbooks?ingress=0&visitId=0bd1183d-303b-40c3-86b8-3b6cb55872b8&ref_=ap_rdr' className="bg-black-200 border border-black-200 text-white hover:bg-white hover:text-black-200 transition-all duration-700 py-2 px-3 md:py-4 md:px-5 rounded text-xs md:text-lg ">
          Visit Book Store
        </Link>
      </div>
      <div>
        <div className="lg:hidden mt-10">
        <Swiper className="swiper2 mobSwiper lg:hidden mt-10"
        modules={
          [Autoplay]
        }
        speed={2000}
        autoplay ={
          {
            delay: 1500,
            pauseOnMouseEnter : true
          }
        }
        slidesPerView ={1.5}
        spaceBetween ={20}
        breakpoints= {
          {700 : {
            slidesPerView : 3,
            spaceBetween : 14,
          }}
        }
        >
        {bookCovers.map((bookcover) => 
              (<SwiperSlide className="swiper-slide" key={bookcover.imgSrc}>
                <img src={bookcover.imgSrc} alt="bookcover"/>
              </SwiperSlide>)
            )}
        </Swiper>
        </div>
        <div className="hidden lg:flex gap-5 mt-28">
         { bookCovers.map(bookcover => (<div key={bookcover.imgSrc}>
              <img className="hover:scale-90 transition-transform duration-700 cursor-pointer" src={ bookcover.imgSrc} alt="bookcover"/>
            </div>)
          )}
        </div>
      </div>
      <div>
        <img src="/images/bookCoverImgs/bottomWood.png" alt="bottom Wood"/>
      </div>
    </section>
    <section className="bg-[#000] px-5 md:px-14 lg:px-[102px] py-12 lg:py-20 font-satoshi">
        <div className="flex flex-col gap-4 text-white items-start lg:flex-row lg:items-center lg:justify-between">
          <h3 className="text-2xl md:text-3xl lg:text-[40px]">Get educated from my blog</h3>
          <Link to="/blog">
            <button className="bg-purple rounded px-4 py-3 md:py-4 md:px-5 border border-purple hover:bg-grey-100 hover:text-purple transition-all duration-700 cursor-pointer"> 
              Visit Blog
            </button>
          </Link>
        </div>

        <Swiper
        modules={
          [Autoplay]
        }
        speed={4000}
        autoplay={
          {
            delay : 2000,
            pauseOnMouseEnter : true
          }
        }
        centeredSlides={true}
        breakpoints={
          {
            700 : {
              slidesPerView : 2.1,
              spaceBetween : 14,
            },
            1024 :{
              slidesPerView : 3,
              
            }
          }
        }
         className="blogSlider mt-10 lg:mt-28 ">
        {blog && blog.map(cover => (
            <SwiperSlide className="bg-white p-4 rounded-xl " key={cover['_id']}>
              <Link className="blogButton" to={`blog/${cover['_id']}`}>
                <img className="w-full" src={cover['image']} alt="cover"/>
              <div>
                <p className="bg-[#F2E5FF] rounded-md mt-3 md:mt-6 py-1 px-2 w-fit text-purple text-xs md:text-sm font-medium">{cover['tag']}</p> 
                <h2 className="mt-2 md:mt-4 text-sm font-bold md:text-base lg:text-[clamp(18px1.66vw,24px)]">{cover['title']}</h2>
                <div className="flex items-center gap-3 lg:gap-5 mt-3">
                  <img src="/images/blogCoverImgs/author.png" alt="author"/>
                  <p className="text-xs md:text-base">Author's Blog</p>
                  <p className="text-xs lg:text-base">{DateTime.fromJSDate(new Date(cover['date'])).toLocaleString(DateTime.DATE_MED)}</p>
                </div>
              </div>
            </Link>
            </SwiperSlide>)
          )}
        </Swiper>
    </section>
    <section className="bg-white px-5 md:px-14 lg:px-[102px] py-12 lg:py-20 font-satoshi">
      <div className="flex flex-col items-center justify-center gap-3">
        <h1 className="text-[#000] text-2xl md:text-3xl lg:text-[40px] font-medium lg:leading-[56px]">Get our merch from Esty</h1>
        <Link to="https://www.etsy.com/uk/shop/RIOSINFLUENCIA?ref=hpsh" target="_blank" className="bg-purple text-white rounded px-4 py-3 md:py-4 md:px-5 border border-purple hover:bg-grey-100 hover:text-purple transition-all duration-700 cursor-pointer">
          Shop for merch
        </Link>
      </div>
      <Swiper
       modules={
        [Autoplay]
      }
      speed={4000}
      autoplay={
        {
          delay : 2000,
          pauseOnMouseEnter : true
        }
      }
      spaceBetween={20}
      breakpoints={
        {
          700 : {
            slidesPerView : 2.1,
            spaceBetween : 14,
          },
          1024 :{
            slidesPerView : 3,
            
          }
        }
      }
      className="merchswiper mt-10 lg:mt-28">
      {merch.map(merchs => (
            <SwiperSlide className="swiper-slide bg-[#F9F4FF]  p-4 rounded-xl " key={merchs.item}>
              <Link target="_blank" to={merchs.link}>
                <img className="w-full" src={merchs.img} alt="cover"/>
              <div className="text-[#181A2A]">
                <p className="rounded-md mt-3 md:mt-5 text-lg lg:text-lg font-normal">{merchs.item}</p> 
                <h2 className="mt-2 md:mt-3 text-lg font-bold lg:text-2xl">{merchs.price}</h2>
              </div>
              </Link>
            </SwiperSlide>)
          )}
      </Swiper>
    </section>
    <Enhance/>
    <section className="bg-[#FFF3E1] px-5 md:px-14 lg:px-24 py-12 lg:py-28 font-satoshi grid grid-cols-1 lg:grid-cols-5 gap-5 mb-14 lg:mb-28" id="contact-me">
      <div className="bg-[#FAAF40] bg-bio bg-tope bg-100 bg-no-repeat lg:col-start-1 lg:col-end-4 flex justify-center  max-h-[500px] rounded-xl" >
        <img src="/images/contactDp.png" alt="" className="lg:w-[49.9vw] object-contain" />
      </div>
      <div className="bg-[#000] lg:col-start-4 lg:col-end-6 bg-bio bg-50 md:bg-25 lg:bg-100 bg-bottome rounded-xl bg-no-repeat text-[#E8E8EA] py-10 lg:pt-[76px] px-10 flex flex-col gap-8 lg:gap-12">
        <h2 className="text-2xl lg:text-[32px] font-bold">
          Contact me via
        </h2>
        <Link to="mailto:info@temitopeodetunde.com" target="_blank" className="flex items-center gap-4" >
          <img src="/images/Letter.svg" alt="letter"/>info@temitopeodetunde.com
        </Link>
        <Link to="tel:+447838374496" target="_blank" className="flex items-center gap-4">
          <img src="/images/Phone.svg" alt="Phone"/> +447838374496
        </Link>
        <div className="flex items-center gap-4">
          <Link to='https://www.linkedin.com/in/temitope-odetunde' target="_blank">
            <img src={linkedin} alt="" />
          </Link>
          <Link to='https://x.com/todetunde' target="_blank">
            <img src={x} alt="" />
          </Link>
          <Link to='https://www.instagram.com/odetunde.top/' target="_blank">
            <img src={ig} alt="" />
          </Link>
          <Link to='https://www.facebook.com/odetunde.top?mibextid=LQQJ4d' target="_blank">
            <img src={fb} alt="" />
          </Link>
          <Link to='https://www.tiktok.com/@topeodetunde' target="_blank">
            <img src={tiktok} alt="" />
          </Link>
        </div>
      </div>
    </section>
  </div>
    <Footer/>
  </>)}
  </>)
}

export default Home
