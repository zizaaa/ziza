import React from 'react';
import { FiGithub,FiFacebook } from 'react-icons/fi';
import { TbBrandDiscord } from 'react-icons/tb';
import { TfiTwitter } from 'react-icons/tfi';
import { BiMedal } from 'react-icons/bi';
import { AiOutlineProject, AiOutlineHome,AiOutlineUser,AiOutlineContacts } from 'react-icons/ai';
import { RiFilePaper2Line } from 'react-icons/ri';
import { BsLink45Deg, BsMoonStars,BsSun } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './styles/nav.css';
import { useState } from 'react';

const Nav = ({theme,themeToggler}) => {
    const [opener, setOpener] = useState("");
    const [num, setNum] = useState(0);

    let themeColor;
    let textColor;
    if(theme){
        themeColor = "rgb(245,245,250)"
        textColor = "rgb(82,100,119)";
      }else{
        themeColor = "rgb(66,66,66)"
        textColor = "rgb(195,195,195)";
      }

    const handleOpen=()=>{
        setOpener(()=>opener ? "" : "open");
        setNum(()=> num ? 0 : 250);
    }


  return (
    <nav className=' relative px-10 pt-10 pb-5 flex flex-col justify-between sm:w-72 w-full'>
        <div className={`menu sm:pb-0 pb-[${num}px]`}>
            <div className='imgContainer'>
                <img src="./src/img/profile4.png" alt="profile" className='drop-shadow-xl'/>
            </div>
            <div className='textContainer mb-5'>
                <p className='text-md mb-3 font-bold tracking-widest'>ziza</p>
                <p className=' text-sm'>A curious person who loves to explore the internet and computers.</p>
            </div>
            <div className='socialContainer flex gap-5 text-lg'>
                <a href="https://github.com/zizaaa"><FiGithub/></a>
                <a href="https://www.facebook.com/jyrnv"><FiFacebook/></a>
                <a href="#"><TbBrandDiscord/></a>
                <a href="#"><TfiTwitter/></a>
            </div>
        </div>
        <div className=' sm:flex flex-col hidden gap-5 text-'>
            <Link to='/' className='flex items-center'><span className='mr-5'><AiOutlineHome /></span> Home</Link>
            <Link to='/about' className='flex items-center'><span className='mr-5'><AiOutlineUser /></span> About</Link>
            {/* <Link to='/achivements' className='flex items-center'><span className='mr-5'><BiMedal /></span> Achivements</Link>
            <Link to='/projects' className='flex items-center'><span className='mr-5'><AiOutlineProject /></span> Projects</Link> */}
            <Link to='/contact' className='flex items-center'><span className='mr-5'><AiOutlineContacts /></span> Contact</Link>
            {/* <Link to='/resume' className='flex items-center'><span className='mr-5'><RiFilePaper2Line /></span> Resume</Link> */}
            <Link to='/links' className='flex items-center'><span  className='mr-5'><BsLink45Deg /></span> Links</Link>
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
        <div className={`flex-col overflow-hidden  text-lg drop-shadow-lg mt-6 p-5 gap-3 flex absolute left-10 right-10 top-[300px] sm:hidden`} style={{backgroundColor:themeColor}}>
        <Link to='/' className='flex items-center'><span className='mr-5'><AiOutlineHome /></span> Home</Link>
            <Link to='/about' className='flex items-center'><span className='mr-5'><AiOutlineUser /></span> About</Link>
            {/* <Link to='/achivements' className='flex items-center'><span className='mr-5'><BiMedal /></span> Achivements</Link> */}
            {/* <Link to='/projects' className='flex items-center'><span className='mr-5'><AiOutlineProject /></span> Projects</Link> */}
            {/* <Link to='/resume' className='flex items-center'><span className='mr-5'><RiFilePaper2Line /></span> Resume</Link> */}
            <Link to='/links' className='flex items-center'><span  className='mr-5'><BsLink45Deg /></span> Links</Link>
            <Link to='/contact' className='flex items-center'><span className='mr-5'><AiOutlineContacts /></span> Contact</Link>

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