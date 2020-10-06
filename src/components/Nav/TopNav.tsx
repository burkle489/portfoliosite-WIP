import { navigate } from "@reach/router";
import React from "react";

const TopNav = () => {
  return (
    <div className="TopNav">
      <h2
        onClick={() => {
          navigate("/");
        }}
      >
        burkle.dev
      </h2>
    </div>
  );
};

export { TopNav };
