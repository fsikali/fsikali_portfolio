import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> 
      <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
  <link rel="icon" type="image/svg+xml" href="/vite.svg" />
  <link rel="stylesheet" href="style.css">  
  <!-- Font Awesome CDN Links-->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
  integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" /> 
  <!-- Google Fonts Link --> 

  <title>FLEMMING SIKALI PORTFOLIO</title>
</head>
<body>
  <header>
      <div class="navbar-container">
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
