import Hero from "./Hero.jsx";
import WhatWeDo from "./WhatWeDo.jsx";
import Welcome from "./Welcome.jsx";
import AboutUs from "./AboutUs.jsx";

const Homepage = () => {
  return (
    <div className="h-full">
      <Hero />
      <Welcome />
      <AboutUs />
      <WhatWeDo />
    </div>
  );
};

export default Homepage;
