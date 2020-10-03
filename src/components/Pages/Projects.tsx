import { navigate } from "@reach/router";
import React from "react";

const Projects = () => {
  return (
    <div className="ComingSoon">
      <h2>Projects Page Coming Soon</h2>
      <button
        className="Btn"
        onClick={() => {
          navigate("/");
        }}
      >
        Back to home
      </button>
    </div>
  );
};

export default Projects;
