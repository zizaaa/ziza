import React from 'react'
import { Link } from 'react-router-dom'

const Achivements = ({home,themeColor,bgColorr}) => {
  return (
    <main className='flex flex-1 sm:overflow-auto px-10 sm:py-10 pb-10 z-20' style={{backgroundColor:themeColor}}>
    <div className='homeContainer md:w-2/3 w-full'>
      {home.map((item)=>(
        item.category === "achivements" ? (
          <Link to={`/${item.id}`} key={item.id} className='rounded-lg min-h-[130px] p-5 flex flex-col justify-evenly mb-10 drop-shadow-lg' style={{backgroundColor:bgColorr}}>
        
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

          <div className='flex'>
            <p className='mr-3'>{item.date}</p>
            <p>{item.time}</p>
          </div>
        </div>

      </Link>
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

export default Achivements