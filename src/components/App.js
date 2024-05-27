import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import user from "../data/user";
console.log(user);

function App() {
  const user = {
    name: "John Doe",
    bio: "I made this",
    links: {
      github: "https://github.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe"
    }
  };

  return (
    <div>
      <About bio={user.bio} links={user.links} />
    </div>
  );
}

export default App;
