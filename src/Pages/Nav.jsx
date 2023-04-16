import React from 'react';
import { FiGithub,FiFacebook } from 'react-icons/fi';
import { TbBrandDiscord } from 'react-icons/tb';
import { TfiTwitter } from 'react-icons/tfi';
import { BiMedal } from 'react-icons/bi';
import { AiOutlineProject, AiOutlineHome,AiOutlineUser} from 'react-icons/ai';
import { BsLink45Deg, BsMoonStars,BsSun } from 'react-icons/bs';
import { HiArrowLongRight } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import './styles/nav.css';
import { useState } from 'react';
import  profile  from '/src/Assets/Profile.png'

const Nav = ({theme,themeToggler,bgColorr}) => {
    
    const [opener, setOpener] = useState("");
    const [num, setNum] = useState(0);

    const handleOpen=()=>{
        setOpener(()=>opener ? "" : "open");
        setNum(()=> num ? 0 : '290px');
    }


  return (
    <nav className=' relative pt-10 pb-5 sm:pl-10 pl-3 sm:pr-0 pr-3  flex flex-col justify-between sm:w-72 w-full'>
        <div className='menu' style={{paddingBottom:num}}>
            <div className='imgContainer sm:mb-5'>
                <img src={profile} alt="profile" className='drop-shadow-xl w-48'/>
            </div>
            <div className='textContainer mb-5'>
                <p className='text-md mb-3 font-bold tracking-widest'>Ziza</p>
                <p className=' text-sm'>A curious person with an interest and knowledge in computers.</p>
            </div>
            <div className='socialContainer flex gap-5 text-lg sm:mb-5'>
                <a href="https://github.com/zizaaa"><FiGithub/></a>
                <a href="https://www.facebook.com/jyrnv"><FiFacebook/></a>
                <a href="#"><TbBrandDiscord/></a>
                <a href="#"><TfiTwitter/></a>
            </div>

        <div className=' sm:flex flex-col hidden mb-10 gap-5 text-'>
            <Link to='/' className='flex items-center'><span className='mr-5'><AiOutlineHome /></span> Home<span className='par relative h-5 w-10 overflow-hidden'><HiArrowLongRight className={`arrow text-2xl `}/></span></Link>

            <Link to='/about' className='flex items-center'><span className='mr-5'><AiOutlineUser /></span>About <span className='par relative h-5 w-10 overflow-hidden'><HiArrowLongRight className={`arrow  text-2xl`}/></span></Link>

            <Link to='/achivements' className='flex items-center'><span className='mr-5'><BiMedal /></span> Achivements<span className='par relative h-5 w-10 overflow-hidden'><HiArrowLongRight className={`arrow text-2xl `}/></span></Link>

            <Link to='/projects'  className='flex items-center'><span className='mr-5'><AiOutlineProject /></span>Projects<span className='par relative h-5 w-10 overflow-hidden'><HiArrowLongRight className={`arrow text-2xl `}/></span></Link>

            <Link to='/links'  className='flex items-center'><span  className='mr-5'><BsLink45Deg /></span>Links<span className='par relative h-5 w-10 overflow-hidden'><HiArrowLongRight className={`arrow text-2xl `}/></span></Link>
        </div>

        <div>
            <button className='sm:flex items-center hidden' onClick={themeToggler}>
                {
                    theme ? (<BsMoonStars/>) : (<BsSun/>)
                }
                {
                    theme ? <p className='ml-5'>Night</p> : <p className='ml-5'>Light</p>
                }
            </button>
        </div>
        </div>
        
        {/* Hamburger Icon */}{/* hamburger menu */}
        <div className='absolute right-10 sm:hidden'>
        <button
            id="menu-btn"
            className={`${opener} block hamburger md:hidden focus:outline-none`} onClick={handleOpen}>
            <span className='hamburger-top'></span>
            <span className='hamburger-middle'></span>
            <span className='hamburger-bottom'></span>
        </button>
        </div>
        <div className={`flex-col overflow-hidden  text-lg drop-shadow-lg mt-6 p-5 gap-3 flex absolute left-0 right-0 top-[345px] sm:hidden`} style={{backgroundColor:bgColorr}}>
        
        <Link to='/' className='flex items-center'><span className='mr-5'><AiOutlineHome /></span> Home</Link>
            <Link to='/about' className='flex items-center'><span className='mr-5'><AiOutlineUser /></span> About</Link>

            <Link to='/achivements' className='flex items-center'><span className='mr-5'><BiMedal /></span> Achivements</Link>

            <Link to='/projects' className='flex items-center'><span className='mr-5'><AiOutlineProject /></span> Projects</Link>

            <Link to='/links' className='flex items-center'><span  className='mr-5'><BsLink45Deg /></span> Links</Link>


            <button className='flex items-center' onClick={themeToggler}>
                {
                    theme ? (<BsMoonStars/>) : (<BsSun/>)
                }
                {
                    theme ? <p className='ml-5'>Night</p> : <p className='ml-5'>Light</p>
                }
            </button>
        </div>
    </nav>
  )
}

export default Nav