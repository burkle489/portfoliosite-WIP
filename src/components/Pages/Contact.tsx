import { navigate } from "@reach/router";
import React from "react";

const Contact: React.FC<any> = () => {
  return (
    <div className="ComingSoon">
      <h2>Contact Page Coming Soon</h2>
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

export { Contact };
