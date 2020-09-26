import React from 'react';
import './App.css';
import { Router, RouteComponentProps } from '@reach/router';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Projects from './components/Pages/Projects';
import "./styles/Main.scss";
import Nav from './components/Nav/Nav';


const HomePage: React.FC<RouteComponentProps> = () => (
  <Home />
)
const AboutPage: React.FC<RouteComponentProps> = () => (
  <About />
)
const ProjectsPage: React.FC<RouteComponentProps> = () => (
  <Projects />
)


const App = () => {

  return (
    <main className="MainContainer">
      <Nav />
      <div className="Content">
        <Router className="Content">
          <HomePage path="/" />
          <AboutPage path="/about" />
          <ProjectsPage path="/projects" />
        </Router>
      </div>
    </main>
  );
}

export default App;
