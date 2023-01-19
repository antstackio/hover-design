import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div>
      <div>
        <a href="https://hover.antstack.com" target="_blank">
          <img src="/logo.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react-hook-form.com/" target="_blank">
          <img src={"/hook-form.svg"} className="logo" alt="React logo" />
        </a>
      </div>
      <h1>Hover + React Hook Form</h1>
      <p className="read-the-docs">
        Click on the React Hook Form and Hover logos to learn more
      </p>
    </div>
  );
};

export default Hero;
