import React from 'react'
import { useEffect } from 'react';

const Links = ({bgColorr,links,themeColor}) => {
  useEffect(() => {
    document.title = "ziza - Links"
 }, []);

  return (
    <main className='flex flex-col flex-1 sm:overflow-auto sm:px-2 px-2 sm:py-10 pb-10 z-20 '  style={{backgroundColor:themeColor}}>
      <div className='' >
        <h1 className='font-semibold mb-1 pl-2 text-xl'>LINKS</h1>
        <h2 className='text-lg rounded-lg min-h-[50px] p-5 flex flex-col justify-evenly mb-10 drop-shadow-lg overflow-hidden' style={{backgroundColor:bgColorr}}>My list of accounts</h2>
      </div>
      {links.map((link)=>(
        <a href={link.link} key={link.id} className='mb-1 min-h-[130px] p-5 flex flex-col justify-evenly drop-shadow-lg overflow-hidden' style={{backgroundColor:bgColorr}}>
          <h1>{link.title}</h1>
          <p>{link.description}</p>
        </a>
      ))}
    </main>
  )
}

export default Links