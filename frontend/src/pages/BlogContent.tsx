import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import api from "../api"
import {DateTime} from 'luxon'
import Navbar from "../components/Navbar"

const BlogContent = () => {
    const [content, setContent] = useState({story : {_id : '',title : '', tag : '', image : '', content : '', date : ''}, relatedContent : []})
    const {id} = useParams()
    const navigate = useNavigate()
    useEffect(()=>{
        api.get(`/api/story/${id}`)
        .then((res)=>{
            console.log(res)
            setContent(res.data)
        })
    },[id, navigate])
  return (
    <div>
      <Navbar/>
      <main className="flex justify-center px-5 pt-24 pb-11 lg:pt-44 font-satoshi">
    <section className="w-full md:w-[85%] lg:max-w-[55.55vw]">
    <div className="flex items-center gap-2 pb-10 md:pb-[52px]">
        <p>
            Blog
        </p>
        <img src="/images/blogArrow.svg" alt="blog arrow"/>
        <p>
            Story
        </p>
    </div>
            <div>
            <p className="p-2 bg-[#EBD7FF] w-fit mb-2 md:mb-4 text-purple rounded-md">story.tag</p>
            <h1 className="text-[clamp(28px,2.5vw,36px)] pb-5 font-bold lg:leading-10">
                {content['story']['title']}
            </h1>
            <div className="flex items-center gap-5 pb-5 md:pb-8">
                <div className="flex items-center">
                    <img src="/images/dp.png" alt="display png"/>
                    <p>Temitope Odetunde</p>
                </div>
                <p>{DateTime.fromJSDate(new Date(content['story']['date'])).toLocaleString(DateTime.DATE_MED)}</p>
            </div>
           <div className="pb-8">
            <img className="lg:w-[55.55vw] rounded-xl " src={content['story']['image']}  alt="Story image"/>
           </div>
           <div dangerouslySetInnerHTML={{__html : content['story']['content']}}>

           </div>
            
        </div>
    </section>
</main>
<section className="px-8 md:px-14 lg:px-[clamp(90px,7.63vw,110px)] py-10 md:py-14 lg:py-20 font-satoshi">
    <h1 className="lg:text-[clamp(18px,1.666vw,24px)] font-medium text-[#000] pb-5">
        More Stories
    </h1>
    {
        content.relatedContent.length > 0 ? (<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {content.relatedContent.map(cover => (
          <div className=" bg-white p-4 rounded-xl border border-[#E8E8EA] transition-transform hover:scale-90 duration-1000">
            <Link className="blogButton" to={`/blog/${cover['_id']}`}>
              <img className="w-full" src={cover['image']} alt="cover"/>
            <div>
              <p className="bg-[#F2E5FF] rounded-md mt-3 md:mt-6 py-1 px-2 w-fit text-purple text-xs md:text-sm font-medium">{cover['tag']}</p> 
              <h2 className="mt-2 md:mt-4 text-lg font-bold lg:text-[clamp(18px1.66vw,24px)]">{cover['title'] }</h2>
              <div className="flex items-center gap-3 lg:gap-5 mt-3">
                <img src="/images/blogCoverImgs/author.png" alt="author"/>
                <p className="text-xs md:text-base">Author's Blog</p>
                <p className="text-xs lg:text-base">{DateTime.fromJSDate(new Date(cover['date'])).toLocaleString(DateTime.DATE_MED)}</p>
              </div>
            </div>
          </Link>
          </div>)
        )}
      </div>) : (<h1>No Related Stories for Now</h1>)
    }
</section>
    </div>
  )
}

export default BlogContent
