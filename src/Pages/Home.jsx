import React from 'react';
import { Link } from 'react-router-dom';
import { SiJavascript,SiReact,SiTailwindcss,SiNodedotjs,SiHtml5,SiCss3,SiMongodb,SiExpress } from 'react-icons/si';
import { useEffect } from 'react';
import { MdDateRange } from 'react-icons/md';
import { HiArrowLongRight } from 'react-icons/hi2';

const Home = ({home,bgColorr,themeColor}) => {
  
  useEffect(() => {
    document.title = "ziza - Home"
 }, []);

  return (
    <main className='flex sm:flex-1 sm:px-3 px-2 py-10 pb-10 z-20' style={{backgroundColor:themeColor}}>
      <div className='homeContainer md:w-2/3 w-full sm:overflow-auto'>
        {home.map((item)=> (
          <Link to={`${item.id}`} key={item.id} className='rounded-lg min-h-[130px] p-5 flex flex-col justify-evenly mb-10 sm:mr-2 drop-shadow-lg overflow-hidden' style={{backgroundColor:bgColorr}}>
          
            <div className='title text-2xl mb-3'>
              <h2>{item.title}</h2>
            </div>

            <div>
              <p>
                {(item.description).length <= 100 ? item.description : `${(item.description).slice(0,100)}...`}
              </p>
            </div>

            <div className='flex mt-3'>
              <div>
                <p className={`mr-3 px-3 rounded-full bg-[${themeColor}]`}>#{item.category}</p>
              </div>

              <div className='flex items-center'>
                <MdDateRange/>
                <p className='mr-3'>{item.date}</p>
                <p>{item.time}</p>
              </div>
            </div>

          </Link>
        ))}

        <div className={`w-24 h-0 border-solid border-2 border-[${bgColorr}] my-16`}></div>
        <footer>
            <p className='font-semibold'>&copy; 2022 - 2023 Ziza</p>
        </footer>
      </div>

      <div className='rightSideContainer md:flex flex-col pl-10 justify-between hidden'>
              <div>
                <div className='title'>
                    <h2 className='uppercase font-semibold mb-5'>Categories</h2>
                </div>
                  <div className='flex gap-3 flex-wrap'>
                    <Link to="/projects" className={`px-3 rounded-full drop-shadow-md`} style={{backgroundColor:bgColorr}}>#Projects</Link>
                    <Link to="/achivements" className={`px-3 rounded-full drop-shadow-md`} style={{backgroundColor:bgColorr}}>#Achievements</Link>
                  </div>
                </div>
              <div>
                <div className='title'>
                  <h2 className='uppercase font-semibold mb-5'>Key Skills</h2>
                </div>
                  <ul className='flex flex-col gap-3 cursor-pointer'>
                    <li className='flex items-center'>
                    <HiArrowLongRight/> 
                    <span className='ml-2'>Time Management</span>
                    </li>
                    <li className='flex items-center'>
                    <HiArrowLongRight/> 
                    <span className='ml-2'>Goal Oriented</span>
                    </li>
                    <li className='flex items-center'>
                    <HiArrowLongRight/> 
                    <span className='ml-2'>Problem Solving</span>
                    </li>
                    <li className='flex items-center'>
                    <HiArrowLongRight/>
                    <span className='ml-2'>Adaptability</span>
                    </li>
                    <li className='flex items-center'>
                    <HiArrowLongRight/> 
                    <span className='ml-2'>Communication</span>
                    </li>
                  </ul>
              </div>
              <div className='technology'>
              <div className='title'>
                <h2 className='uppercase font-semibold mb-5'>Tech Stack</h2>
              </div>
              <div className='flex flex-wrap gap-3 text-xl'>
                <SiJavascript/>
                <SiReact/>
                <SiTailwindcss/>
                <SiNodedotjs/>
                <SiHtml5/>
                <SiCss3/>
                <SiMongodb/>
                <SiExpress/>
              </div>
            </div>
      </div>
    </main>
  )
}

export default Home