import React from "react";
import "./App.css";
import { Router, RouteComponentProps } from "@reach/router";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Projects from "./components/Pages/Projects";
import "./styles/Main.scss";
import { Contact } from "./components/Pages/Contact";
import { TopNav } from "./components/Nav/TopNav";

const HomePage: React.FC<RouteComponentProps> = () => <Home />;
const AboutPage: React.FC<RouteComponentProps> = () => <About />;
const ProjectsPage: React.FC<RouteComponentProps> = () => <Projects />;
const ContactPage: React.FC<RouteComponentProps> = () => <Contact />;

const App = () => {
  return (
    <>
      <TopNav />
      <main className="MainContainer">
        <div className="Content">
          <Router className="Content">
            <HomePage path="/" />
            <AboutPage path="/about" />
            <ProjectsPage path="/projects" />
            <ContactPage path="/contact" />
          </Router>
        </div>
      </main>
    </>
  );
};

export default App;
