import React from "react";
import Links from "./Links.js";

function About({ bio, links }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && bio.length > 0 && <p>{bio}</p>}
      {!bio || bio.length === 0 && <p>No bio provided</p>}
      <Links github={links.github} linkedin={links.linkedin} />
    </div>
  );
}

export default About;