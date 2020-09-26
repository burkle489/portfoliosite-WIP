import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const moveToAttributes = () => {
    const height = window.innerHeight;
    window.scrollBy(0, height);
}

const Home: React.FC<any> = () => {
    return (
        <div className="PageContent">
            <div className="HeroContainer">
                <div className="Wrapper">
                    <section className="Hero">
                        <h1>Tayler Burke</h1>
                        <h2>Front-end Web Developer</h2>
                    </section>
                </div>
            </div>
            <div className="MovePageDown" onClick={moveToAttributes}>
                <FontAwesomeIcon icon={faChevronDown} size="2x" />
            </div>
            <section className="Attributes">
                <div className="Attribute">
                    <div className="AttributeHeader">
                        <img src="" alt="Logo"></img>
                        <h3>Skill</h3>
                    </div>
                    <p>more info on skill blah blah blah</p>
                </div>
                <div className="Attribute">
                    <div className="AttributeHeader">
                        <img src="" alt="Logo"></img>
                        <h3>Skill</h3>
                    </div>
                    <p>more info on skill blah blah blah</p>
                </div>
                <div className="Attribute">
                    <div className="AttributeHeader">
                        <img src="" alt="Logo"></img>
                        <h3>Skill</h3>
                    </div>
                    <p>more info on skill blah blah blah</p>
                </div>
                <div className="Attribute">
                    <div className="AttributeHeader">
                        <img src="" alt="Logo"></img>
                        <h3>Skill</h3>
                    </div>
                    <p>more info on skill blah blah blah</p>
                </div>
            </section>
        </div>
    )
}

export default Home;