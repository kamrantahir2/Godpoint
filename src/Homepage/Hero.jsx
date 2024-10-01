const Hero = () => {
  return (
    <div className="h-screen w-full bg-[url('./heroFurniture.jpg')] bg-cover bg-center heroImage border-b-4 border-red-700 ">
      <div className="">
        <img className="md:w-11/12 lg:w-5/12 m-auto" src="./logo.png" alt="" />
      </div>
      <div className=" flex -mt-24 font-cinzel justify-center text-white ">
        <button className="text-xl hover:bg-red-900 ease-in-out  bg-red-700 mr-12 font-semibold duration-500 transition">
          Learn More
        </button>
        <button className="text-xl hover:bg-red-900 ease-in-out  bg-red-700 font-semibold duration-500 transition">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Hero;
