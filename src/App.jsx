import Nav from "./Pages/Nav"
import { Route,Routes } from 'react-router-dom';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Achivements from "./Pages/Achivements";
import Links from "./Pages/Links";
import Projects from "./Pages/Projects";
import Resume from "./Pages/Resume";
import Contact from "./Pages/Contact";
import Feed from "./Pages/Feed";
import Missing from "./Pages/Missing";
import { useState } from "react";

function App() {
  const home = [
    {
      title: "Capstone Title Generator",
      description:"The Capstone Title Generator generate a random title for capstone/thesis project for tech students. I know the struggle of those students who are having a hard time finding or making a unique title for their projects, so as a developer, I made this title generator to help them to find a unique title for their project. You can generate a random title by simply clicking the generate button and you can copy it by clicking the copy button.",
      category:"projects",
      date:"January 13,2023",
      time:"11:39 PM",
      id: 1,
      img:'./src/Assets/Capstonegen.png',
      link:'https://zizaaa.github.io/Title-Capstone-Generator/',
      repo:'https://github.com/zizaaa/Title-Capstone-Generator'
    },
    {
      title: "Freedom Wall Online",
      description:"This project I made is one of the platforms of our school organization, the COVID Party List. I started making this project back in December 2022 and till 2023 it's still in progress, It already has an admin side where you can monitor all the notes, Ip addresses, and reports. Using the Ip address of the user you can block them in this website, and once their IP is blocked they're no longer have a permission to post a notes.",
      category:"projects",
      date:"January 13,2023",
      time:"11:24 PM",
      id: 2,
      img:'./src/Assets/Freedomwall.png',
      link:'https://zizaaa.github.io/Freedom-Wall/',
      repo:'https://github.com/zizaaa/Freedom-Wall'
    },
    {
      title: "Regional Start Up Bootcamp",
      description:"On December 3-4, 2022, BEECALLtbi and HAKA Naga invited our school to participate in the Regional Start-Up Bootcamp. I decided to participate in order to gain more knowledge about Start-Up Business with Technology. During the Bootcamp, our mentors and coaches taught us how to build and maintain our businesses. My team's Start-Up Business is called \"SKILLED IT\". As an IT student member of my team, I decided to create a mock-up design for our system. Skilled IT is an online learning platform that offers a program called \"Study Now, Pay Later\", where you can learn about technology and other related courses without upfront payment. Our goal in this business is to help people who cannot afford to attend regular classes due to a lack of finances. Our Start-Up Business (SKILLED IT) placed 7th among the 26 participating teams from different colleges and universities.",
      category:"achivements",
      date:"December 3-4,2022",
      time:"9:00 AM",
      id: 3,
      img:'./src/Assets/bootcampcert.jpg',
      link:'',
      repo:''
    },
    {
      title: "Cisco Networking Award",
      description:"",
      category:"achivements",
      date:"April 13,2023",
      time:"",
      id: 4,
      img:'./src/Assets/Networkingcert.png',
      link:'',
      repo:''
    },
    {
      title: "Cisco Javascript Essentials",
      description:"",
      category:"achivements",
      date:"October 19,2022",
      time:"",
      id: 5,
      img:'./src/Assets/Jscert.png',
      link:'',
      repo:''
    }
  ];

  let textColor;
  let bgColor;
  let bgColorr;
  let themeColor;
  const [theme, setTheme] = useState(false);

  const themeToggler =()=>{
      setTheme(()=> theme ? (false) : (true));
  }
  if(theme){
    textColor = "rgb(82,100,119)";
    bgColor = "rgb(245,245,250)";
    bgColorr="rgb(245,245,250)"
    themeColor = "rgb(245,245,250)"
  }else{
    textColor = "rgb(195,195,195)";
    bgColor = "rgb(48,48,48)";
    bgColorr="rgb(66,66,66)"
    themeColor = "rgb(48,48,48)"
  }



  return (
    <main className="App flex sm:flex-row overflow-auto flex-col w-full h-screen" style={{backgroundColor:bgColor,color:textColor}}>
    <Nav theme={theme} themeToggler={themeToggler} bgColorr={bgColorr}/>
    <Routes>
      <Route path="/" element={<Home home={home} themeColor={themeColor} bgColorr={bgColorr}/>}/>
      <Route path="/about" element={<About />}/>
      <Route path="/achivements" element={<Achivements home={home} themeColor={themeColor} bgColorr={bgColorr}/>}/>
      <Route path="/links" element={<Links />}/>
      <Route path="/projects" element={<Projects home={home} themeColor=  {themeColor} bgColorr={bgColorr}/>}/>
      <Route path=":id" element={<Feed home={home} bgColorr={bgColorr}/>}/>
      <Route path="/resume" element={<Resume />}/>
      <Route path= "/contact" element={<Contact />}/>
      <Route path="*" element={<Missing />}/>
    </Routes>
      
    </main>
  )
}

export default App
