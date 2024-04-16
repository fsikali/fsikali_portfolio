import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>   
  <header>
      <div class="nav-container">
          <h2 class="my-logo">Fsikali</h2>
          <div class="navbar">
              <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Skills</a></li>
                  <li><a href="#">Project</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">About</a></li>
              </ul>
          </div>
      </div>
  </header> 
  
  <main-content-section> 
          <div class="card-wrapper"> 
              <div class="wrapper-1">
                   <h2>MY NAME IS FLEMMING</h2>
              </div>
              <div class="wrapper">
                   <h2>I am Software Developer</h2>
              </div> 
          </div>


          <div class="card-wrapper1">
                <div class="wrapper1">
                      <h2>Hi! Software Engineer</h2>
                </div>
          </div>  

      <div class="space-bar">
          <div class="title">
              <h2></h2>
          </div>
      </div>  
      <h2 class="space">Skills</h2> 

      <div class="skill-container">
          <div class="skill">
                <h2>Full-Stack Web Developer</h2>
          </div> 
          <div class="skill">
                <h2>Android Developer</h2>
          </div>
          <div class="skill">
                <h2>UI/UX Designer</h2> 
          </div>
      </div> 

      <div class="title2">
           <h2>Project</h2>
      </div>  

      <div class="project-container">
          <div class="project">
              <h2>selaApp</h2>
          </div> 
          <div class="project">
              <h2>dbJava</h2>
          </div>
          <div class="project">
              <h2>agricApp</h2> 
          </div> 
      </div> 

      <div class="project-container1">
          <div class="project1">
               <h2>blogweb</h2> 
          </div>  
          <div class="project1">
               <h2>encryptionApp</h2> 
          </div> 
          <div class="project1">
               <h2>driverApp</h2> 
          </div> 
      </div>
     </main-content-section>  
    </>
  )
}

export default App
