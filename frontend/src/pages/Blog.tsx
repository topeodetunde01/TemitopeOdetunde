import { useEffect, useState } from "react"
import api from "../api"
import { Link } from "react-router-dom"
import {DateTime} from 'luxon'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import spinner from "../assets/spinner.svg"

const Blog = () => {
    const [loading, setLoading] = useState(false)
    const [blog, setBlog] = useState([])
    useEffect(()=>{
        setLoading(true)
        api.get('/api/blog')
    .then((res)=> {
        console.log(res)
        setBlog(res.data)
     setTimeout(()=>{
      setLoading(false)
     }, 1500)
    })
    }, [])
  return (
    <div>
        {
           loading ? <div className="h-screen flex items-center justify-center">
            <img src={spinner} alt="" />
           </div> : (<>
           <Navbar/>
        <section className=" px-5 md:px-14  pt-24 pb-11 lg:pt-44 lg:px-[102px] py-12 lg:py-20 font-satoshi">
    <div className="flex flex-col gap-4 text-white items-center">
      <h3 className="text-2xl md:text-3xl text-[#000] lg:text-[clamp(45px,4vw,64px)] text-center font-bold lg:leading-10">Learn, Grow, Discover</h3>
      <p className="text-[#4B587C] text-base md:text-lg lg:text-[clamp(18px,1.666vw,24px)] w-[90%] md:w-[80%] lg:w-[60%] text-center lg:leading-10">
        In the pursuit of personal and professional growth, there are endless opportunities to learn, grow, and discover.
      </p>
    </div>
    <section className="flex items-center  px-5 md:px-14 lg:px-20 mt-10">
      <iframe className="w-full h-[480px] lg:h-[520px]" src="https://www.youtube.com/embed/padwHiGXr3Y" title="Interview with Yemi Jackson on AIM" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </section>
    <div className="grid  lg:grid-cols-3 mt-10 lg:mt-28 gap-6 ">
     {blog.map(cover => 
          (<div className=" bg-white p-4 rounded-xl border border-[#E8E8EA]" key={cover['_id']}>
            <Link className="blogButton" to={`${cover['_id']}`}>
              <img className="w-full" src={cover['image']} alt="cover" />
            <div>
              <p className="bg-[#F2E5FF] rounded-md mt-3 md:mt-6 py-1 px-2 w-fit text-purple text-xs md:text-sm font-medium">{cover['tag']}</p> 
              <h2 className="mt-2 md:mt-4 text-lg font-bold lg:text-[clamp(18px1.66vw,24px)]">{cover['title']}</h2>
              <div className="flex items-center gap-3 lg:gap-5 mt-3">
                <img src="/images/blogCoverImgs/author.png" alt="author"/>
                <p className="text-xs md:text-base">Author's Blog</p>
                <p className="text-xs lg:text-base">{DateTime.fromJSDate(new Date(cover['date'])).toLocaleString(DateTime.DATE_MED)}</p>
              </div>
            </div>
          </Link>
          </div>)
        )}
    </div>
  </section>
  <Footer/>
           </>)
        }
    </div>
  )
}

export default Blog
