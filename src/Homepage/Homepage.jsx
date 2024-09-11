import Hero from "./Hero.jsx";
import WhatWeDo from "./WhatWeDo.jsx";
import About from "./About.jsx";
import WhatWeOffer from "./WhatWeOffer.jsx";

const Homepage = () => {
  return (
    <div className="h-full">
      <Hero />
      <About />
      <WhatWeOffer />
      <WhatWeDo />
    </div>
  );
};

export default Homepage;
