import { useState } from 'react';
import './App.css';

import SpotlightCard from './assets/card/SpotlightCard.jsx';
import GooeyNav from './assets/nav/GooeyNav.jsx';
import GradientText from './assets/fonts/text.jsx';
import ProfileCard from './assets/ProfileCard/profile.jsx';
import SkillsShowcase from "./assets/skills/skill.jsx";
import Footer from './assets/Footer/footer.jsx';

// Navigation items
const items = [
  { label: "Home", href: "#" },
  { label: "Membership", href: "https://www.buymeacoffee.com/codingwithlakindu" },
  { label: "Products", href: "https://github.com/lakindu2008?tab=stars" },
];

// Alert handlers
const showAlert = () => alert("Massage Sended 📢");
const Subscribe = () => alert("Subscribed ❤️");


 
function App() {
  return (
    <>
      {/* Header */}
      <div className="head" style={{ display: "flex" }}>
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className="gtext"
        >
          <h1 className='headtxt'>Rexoplay🦊</h1>
        </GradientText>

        <div className="nav_bar">
          <GooeyNav
            items={items}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
        </div>

        <a href="https://chat.whatsapp.com/EFDlozs5oSi86YtuCkyw7k">
          <button className='btn1'>Hire Me</button>
        </a>
      </div>

      {/* Profile Section */}
      <div className="profilecard1">
        <div className="details1">
          <div className="cardinfo1">
            <ProfileCard
              className='profile_card'
              name="R.Lakindu"
              handle="Lakindu"
              status="Online"
              contactText="Github"
              avatarUrl="https://github.com/lakindu2008/garde10/blob/main/images/logo.png?raw=true"
              showUserInfo={true}
              enableTilt={true}
              onContactClick={() => console.log('Contact clicked')}
              title="Fullstack Developer"
            />
          </div>

          <div className="cardinfo2">
            <h1 className='txt3'>Hello👋,<br /><span> Welcome To Rexoplay.</span></h1>
            <p className='p7'>
              I'm a passionate web developer with 5+ years of experience creating modern websites and applications. I specialize in responsive design, user experience, and clean code.
            </p>
            <a href="https://chat.whatsapp.com/EFDlozs5oSi86YtuCkyw7k">
              <button className='btn7'>Chat With Me</button>
            </a>
          </div>
        </div>

        {/* Skills Section */}
        <h1 className='txt4'>My Skills 🚀</h1>
        <div className="cards">
          <SpotlightCard className='card1'>
            <img src="https://github.com/lakindu2008/garde10/blob/main/images/1%20(1).png?raw=true" style={{ width: "60%" }} />
            <h1 style={{ fontSize: "18px" }}>React Native</h1>
            <a href="https://github.com/stars/lakindu2008/lists/react-native">
              <button className='btn2'>View Projects</button>
            </a>
          </SpotlightCard>

          <SpotlightCard className='card1'>
            <img src="https://github.com/lakindu2008/garde10/blob/main/images/1%20(4).png?raw=true" style={{ width: "60%" }} />
            <h1 style={{ fontSize: "18px" }}>Web Design</h1>
            <a href="https://github.com/stars/lakindu2008/lists/web-projects">
              <button className='btn2'>View Projects</button>
            </a>
          </SpotlightCard>

          <SpotlightCard className='card1'>
            <img src="https://github.com/lakindu2008/garde10/blob/main/images/1%20(5).png?raw=true" style={{ width: "60%" }} />
            <h1 style={{ fontSize: "18px" }}>JavaScript</h1>
            <a href="https://github.com/stars/lakindu2008/lists/java-script">
              <button className='btn2'>View Projects</button>
            </a>
          </SpotlightCard>

          <SpotlightCard className='card1'>
            <img src="https://github.com/lakindu2008/garde10/blob/main/react_icon_231932.png?raw=true" style={{ width: "60%" }} />
            <h1 style={{ fontSize: "18px" }}>React</h1>
            <a href="https://github.com/lakindu2008?tab=repositories">
              <button className='btn2'>View Projects</button>
            </a>
          </SpotlightCard>
        </div>

        {/* YouTube Promo */}
        <div className="box1">
          <h1 className='txt5'>Watch Coding Lessons On Youtube 🔴</h1>
          <div className="social_media">
            <iframe
              className='yt_vid'
              width="560"
              height="315"
              src="https://www.youtube.com/embed/VpWKxwEXb6c?si=eRUfInd3eRj_ZdaL"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>

            <div className="yt_details">
              <p className='txt6'>
                From React tutorials to UI/UX designs and real-world mini projects — I make learning to code simple and fun.
                Subscribe for clean code, cool designs, and hands-on learning!
              </p>
              <a href="https://www.youtube.com/@codeBlocksLakindu">
                <button className='yt_btn'>View Channel</button>
              </a>
            </div>
          </div>
        </div>

        {/* Social Media Cards */}
        <div className="channels">
          <h2 style={{ textAlign: "left", paddingTop: 10, paddingLeft: 30 }}>Follow Me On</h2>
          <div className="cards" style={{ marginTop: 10 }}>
            <SpotlightCard className='card1'>
              <img src="https://github.com/lakindu2008/garde10/blob/main/images/github.png?raw=true" style={{ width: "60%" }} />
              <h1 style={{ fontSize: "18px" }}>Github</h1>
              <a href="https://github.com/lakindu2008">
                <button className='btn2'>Follow</button>
              </a>
            </SpotlightCard>

            <SpotlightCard className='card1'>
              <img src="https://github.com/lakindu2008/garde10/blob/main/images/instagram%20(1).png?raw=true" style={{ width: "60%" }} />
              <h1 style={{ fontSize: "18px" }}>Instagram</h1>
              <a href="https://www.instagram.com/lakindu_perera_/">
                <button className='btn2'>Follow</button>
              </a>
            </SpotlightCard>

            <SpotlightCard className='card1'>
              <img src="https://github.com/lakindu2008/garde10/blob/main/images/facebook.png?raw=true" style={{ width: "60%" }} />
              <h1 style={{ fontSize: "18px" }}>Facebook</h1>
              <a href="https://web.facebook.com/profile.php?id=100075824373847">
                <button className='btn2'>Join us</button>
              </a>
            </SpotlightCard>

            <SpotlightCard className='card1'>
              <img src="https://github.com/lakindu2008/garde10/blob/main/images/social%20(1).png?raw=true" style={{ width: "60%" }} />
              <h1 style={{ fontSize: "18px" }}>whatsapp</h1>
              <a href="https://whatsapp.com/channel/0029VaEA1tcJf05ibW48xo0i">
                <button className='btn2'>Follow</button>
              </a>
            </SpotlightCard>
          </div>
        </div>

        {/* Contact Section */}
        <div className="contact">
          <div className="row1">
            <h1 className='contact_txt'>Get In Touch</h1>
            <p className='p5'>Email : codingwithlakindu@gmail.com</p>
            <p className='p5'>Phone : +94 74 288 2008</p>
            <p className='p5'>Company : Rexoplay</p>
          </div>

          <div className="row2">
            <input type="text" placeholder='Your Name' className='input2' /><br />
            <input type="text" placeholder='Email Address' className='input2' /><br />
            <input type="text" placeholder='Write Message' className='input2' style={{ height: 170, borderRadius: 10 }} /><br />
            <input type="submit" onClick={showAlert} className='input2' />
          </div>
        </div>

        {/* Footer */}
        <br /><br />
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
