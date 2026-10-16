import "./App.css";
import { useState } from "react";
import Login from "./login";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  if (showLogin) {
    return <Login setShowLogin={setShowLogin} />;
  }

  function handleClick() {
    window.open("https://www.google.com/", "_blank", "noopener,noreferrer");
  }

  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">Jugnu</div>

        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#skills">Skills</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#services">Services</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* LOGIN BUTTON */}
        <button className="nav-btn" onClick={() => setShowLogin(true)}>
          Login
        </button>
      </nav>

      {/* HOME */}
      <section id="home" className="hero">
        <p className="hello">Hello, I'm</p>

        <h1>Jugnu Saini</h1>

        <h2>MERN Full Stack Web Developer</h2>

        <p>
          I am a passionate web developer who loves creating modern and
          responsive websites using HTML, CSS, JavaScript, React and Node.js.
        </p>

        <div className="hero-buttons">
          <a href="#projects">
            <button>View My Projects</button>
          </a>

          <a href="#contact">
            <button>Contact Me</button>
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          Hello! My name is Jugnu Saini. I am a B.Tech Computer Science student
          and a passionate Full Stack Web Developer. I enjoy creating modern,
          responsive and user-friendly websites.
        </p>

        <p>
          Currently, I am working as a Full Stack Development Intern where I am
          improving my practical knowledge of frontend and backend development.
          I am continuously learning new technologies and applying them by
          building real-world projects.
        </p>

        <p>
          On the frontend, I work with HTML, CSS, JavaScript and React. I focus
          on creating clean layouts, responsive designs and interactive user
          interfaces that work well on different devices.
        </p>
        <p>
          On the backend, I am learning Node.js and Express.js and understanding
          how APIs, server-side applications and databases work together. I am
          also learning MongoDB for storing and managing application data.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="skills">
        <h2>My Skills</h2>

        <div className="skill-container">
          <div className="skill-card">
            <h3>Frontend</h3>
            <p>HTML, CSS, JavaScript, React</p>
          </div>

          <div className="skill-card">
            <h3>Backend</h3>
            <p>Node.js, Express.js</p>
          </div>

          <div className="skill-card">
            <h3>Database</h3>
            <p>MongoDB</p>
          </div>

          <div className="skill-card">
            <h3>Tools</h3>
            <p>Git, GitHub, VS Code</p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="projects">
        <h2>My Projects</h2>

        <p>
          Here are some projects that I have created while learning web
          development.
        </p>

        <div className="project-container">
          <div className="project-card">
            <h3>SBI Website Clone</h3>
            <p>A responsive SBI website clone created using HTML and CSS.</p>
            <button>View Project</button>
          </div>

          <div className="project-card">
            <h3>E-Commerce Website</h3>
            <p>E-commerce website with products and responsive design.</p>
            <button>View Project</button>
          </div>

          <div className="project-card">
            <h3>Expense Tracker</h3>
            <p>Website to manage and track daily expenses.</p>
            <button>View Project</button>
          </div>

          <div className="project-card">
            <h3>Typing Master</h3>
            <p>Typing speed testing website created using JavaScript.</p>
            <button>View Project</button>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="services">
        <h2>My Services</h2>

        <div className="service-container">
          <div className="service-card">
            <h3>Website Development</h3>
            <p>I can create modern and responsive websites.</p>
          </div>

          <div className="service-card">
            <h3>Frontend Development</h3>
            <p>Frontend development using HTML, CSS, JavaScript and React.</p>
          </div>

          <div className="service-card">
            <h3>Responsive Design</h3>
            <p>Websites that work properly on mobile, tablet and desktop.</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <h2>Contact Me</h2>

        <p>If you want to work with me, feel free to contact me.</p>

        <button onClick={handleClick}>Contact Me</button>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <h3>Jugnu Saini</h3>

        <p>MERN Full Stack Web Developer</p>
      </footer>
    </div>
  );
}

export default App;
