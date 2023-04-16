import React from 'react'
import { FiMail,FiGithub } from 'react-icons/fi'
import { MdDateRange } from 'react-icons/md'

const About = ({bgColorr,themeColor}) => {
  return (
    <main className='flex flex-col flex-1 sm:overflow-auto sm:px-5 px-10 sm:py-10 pb-10 z-10' style={{backgroundColor:themeColor}}>
      <div className='w-full p-10 drop-shadow-lg rounded-lg' style={{backgroundColor:bgColorr}}>
        <div>
        <div className='mb-10'>
        <h2 className='text-3xl mb-2'>About ziza</h2>
        <p className='flex items-center text-sm'><MdDateRange /> April 16,2023 1:23PM</p>
        </div>
        <div>
          <p className='mb-7 text-lg indent-10'>
          A curious person with an Interest and Knowledge in computers, currently taking a bachelor's degree in Information Technology at AMA Computer College.
          </p>
          <p className='text-lg mb-5 indent-10'>
          Hi! I'm <span className='font-bold'>Jay Ar Nava</span> from Bicol, pursuing my goal of becoming a <span className='font-bold'>Full-stack Web Developer</span>. If you're wondering where and when I got my username "Ziza", to make the story short, it was back in the year 2021 when I was still addicted to mobile games, computer games, and anime. I discovered a trending MMORPG game on a social media platform, so I decided to try the game and used "ZizanamiZ" as my username. I got that idea from the anime Naruto, specifically the Izanami technique. I just added a "Z" at the beginning and end of the word because the game was very strict in creating a username. I started playing the game and began to like it, not only for the game but also for the community. I made some friends and enemies, and they started calling me Ziza. Then I started using this username on my social media accounts.
          </p>
        </div>
        </div>
        <div className='mb-5'>
            <h3 className='text-2xl mb-2'>My computer journey:</h3>
            <p className='text-lg indent-10'>
            In 2013, my parents brought a desktop to our home, but we did not have internet at that time. My favorite programs were Microsoft Paint and Microsoft PowerPoint, as those were the programs I always used. Around 2015, my parents brought a laptop that introduced me to Encarta Kids. I started programming in 2021, and my first programming language was Python. Fast forward to 2022, I created an account on GitHub and started learning other programming languages like Javascript.
            </p>
          </div>
        <div>
          <h2 className='text-2xl mb-2'>Contacts:</h2>
          <div className='flex items-center'>
          <FiMail/>
          <p className='text-lg ml-2'>Email: <a href="mailto:winfourteen@gmail.com" className='link relative'><span className='linkText bg'></span>winfourteen@gmail.com</a></p>
          </div>
          <div className='flex items-center'>
          <FiGithub/>
          <p className='text-lg ml-2'>Discord Server: <a href="https://discord.gg/TUWt9GQpXP" className='link relative'><span className='linkText bg'></span>WeTech</a></p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default About