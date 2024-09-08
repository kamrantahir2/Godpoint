import Hero from "./Hero.jsx";
import WhatWeOffer from "./WhatWeOffer.jsx";
import About from "./About.jsx";

const Homepage = () => {
  return (
    <div className="h-full">
      <Hero />
      <About />
      <WhatWeOffer />
    </div>
  );
};

export default Homepage;
