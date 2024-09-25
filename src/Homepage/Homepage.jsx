import Hero from "./Hero.jsx";
import WhatWeDo from "./WhatWeDo.jsx";
import Welcome from "./Welcome.jsx";
import AboutUs from "./AboutUs.jsx";
import GetInTouch from "./GetInTouch.jsx";

const Homepage = () => {
  return (
    <div className="h-full">
      <Hero />
      <Welcome />
      <AboutUs />
      <WhatWeDo />
      <GetInTouch />
    </div>
  );
};

export default Homepage;
