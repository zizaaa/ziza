import React from 'react'
import { useEffect } from 'react';
import './styles/feed.css';
import { MdDateRange } from 'react-icons/md'
import { useParams,Link } from 'react-router-dom'

const Feed = ({home,bgColorr}) => {

  const {id} = useParams();
  const homes = home.find(item => (item.id) == id);
  
  useEffect(() => {
    document.title = `ziza - ${homes.category}`
 }, []);

  return (
<main className={`flex flex-col flex-1 sm:overflow-auto px-10 sm:py-10 pb-10 z-20`}>

  <div className='homeContainer w-full '>
      <div key={homes.id} className='rounded-lg p-5 flex flex-col justify-evenly mb-10 drop-shadow-lg break-all' style={{backgroundColor:bgColorr}}>
          
        <div className='title mb-10'>
          <h2 className='text-[50px]'>{homes.title}</h2>
          <div className='flex mt-3'>
          <div className='flex md:flex-row flex-col'>
          <div>
            <Link to={`/${homes.category}`} className={`link relative backdrop:mr-3 rounded-full mr-2`}>#{homes.category}<span className='linkText bg'></span></Link>
          </div>
          <div className='flex items-center'>
            <MdDateRange/>
            <p className='mr-3'>{homes.date}</p>
            <p>{homes.time}</p>
          </div>
          </div>

        </div>
        </div>

        <div className='mb-10'>
          <p className='text-[20px]'>
            {homes.description}
          </p>
        </div>
        {homes.category === "projects" ? (
          <div className='mb-10'>
          <p>You can try this using this link: {<a href={`${homes.link}`} className='link relative'><span className='linkText bg'></span>{homes.title}</a>}</p>
          <p>You can check the source code here: {<a href={`${homes.repo}`} className='link relative'><span className='linkText'></span>Github Repo</a>}</p>
        </div>
        ):(
          null
        )}

        <div className='imgContainer'>
            <img src={`${homes.img}`} alt="img" />
          </div>
      </div>
    <div className={`w-24 h-0 border-solid border-2 border-white my-16`}>
    </div>
    <footer>
        <p className='font-semibold'>&copy; 2022 - 2023 Ziza</p>
    </footer>
  </div>
</main>
  )
}

export default Feed