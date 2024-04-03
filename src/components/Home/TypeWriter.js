import React from "react";
import Typewriter from "typewriter-effect";

function TypeWriter() {
  return (
    <Typewriter
      options={{
        strings: [
          "Senior Software Engineer",
          "Over 9 years Experience",
          "Full Stack Developer",
          "DevOps Engineer",
          "Bioinfomatics",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default TypeWriter;
