import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react' 
import { SiJavascript,SiReact,SiTailwindcss,SiNodedotjs,SiHtml5,SiCss3,SiMongodb,SiExpress } from 'react-icons/si';
import { HiArrowLongRight } from 'react-icons/hi2';

const Projects = ({home,themeColor,bgColorr}) => {
    useEffect(() => {
      document.title = "ziza - Projects"
    }, []);

  return (
    <main className='flex flex-1 sm:overflow-auto px-2 sm:py-10 pb-10 z-20' style={{backgroundColor:themeColor}}>
      <div className='homeContainer w-full'>
      <div>
        <h1 className='font-semibold mb-1 pl-2'>CATEGORIES</h1>
        <div className='rounded-lg min-h-[50px] sm:mr-2 p-5 mb-10 drop-shadow-lg' style={{backgroundColor:bgColorr}}>
          <h2 className='text-lg uppercase font-semibold'>Projects</h2>
        </div>
      </div>
        {home.map((item)=>(
          item.category === "projects" ? (
            <div key={item.id} className='p-5 flex flex-col mb-1 sm:mr-2 drop-shadow-lg' style={{backgroundColor:bgColorr}}>
          
          <div className='title text-2xl mb-3'>
            <h2>{item.title}</h2>
          </div>

          <div>
              <p>
                {(item.description).length <= 200 ? item.description : `${(item.description).slice(0,200)}...`}
                <Link to={`/${item.id}`}className='link relative ml-2'>View more<span className='linkText'></span></Link>
              </p>
          </div>

          <div className='flex mt-3'>
            <div>
              <p className={`mr-3 px-3 rounded-full bg-[${themeColor}]`}>#{item.category}</p>
            </div>

            <div className='flex'>
              <p className='mr-3'>{item.date}</p>
              <p>{item.time}</p>
            </div>
          </div>

        </div>
          ):(null)
        ))}
        <div className='w-24 h-0 border-solid border-2 border-white my-16'></div>
        <footer>
            <p className='font-semibold'>&copy; 2022 - 2023 Ziza</p>
        </footer>
      </div>
    </main>
  )
}

export default Projects