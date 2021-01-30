import React, { SetStateAction, useContext, useState } from "react";
import "./App.css";
import { Router, RouteComponentProps, useLocation } from "@reach/router";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Projects from "./components/Pages/Projects";
import "./styles/Main.scss";
import { Contact } from "./components/Pages/Contact";
import { TopNav } from "./components/Nav/TopNav";
import { store } from "./store";
import { animated, useTransition } from "react-spring";

interface HomeProps extends RouteComponentProps {
  setInitialVisit: React.Dispatch<SetStateAction<boolean>>;
  initialVisit: boolean;
}

const HomePage: React.FC<HomeProps> = ({ setInitialVisit, initialVisit }) => <Home initialVisit={initialVisit} setInitialVisit={setInitialVisit} />;
const AboutPage: React.FC<RouteComponentProps> = () => <About />;
const ProjectsPage: React.FC<RouteComponentProps> = () => <Projects />;
const ContactPage: React.FC<RouteComponentProps> = () => <Contact />;

const App = () => {
  const [initialVisit, setInitialVisit] = useState<boolean>(true)
  const globalState = useContext(store);
  const { dispatch, state } = globalState;
  console.log({ dispatch, state })
  const location = useLocation()
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })

  return (
    <>
      <main className="MainContainer">
        <div className="Content">
          {
            transitions.map(({ item, props, key }) =>
              <animated.div key={key} style={props}>
                <TopNav />
                <Router location={item}>
                  <HomePage path="/" setInitialVisit={setInitialVisit} initialVisit={initialVisit} />
                  <AboutPage path="/about" />
                  <ProjectsPage path="/projects" />
                  <ContactPage path="/contact" />
                </Router>
              </animated.div>
            )}
        </div>
      </main>
    </>
  );
};

export default App;
