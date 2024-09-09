const About = () => {
  return (
    <div className="my-3">
      <div className="w-5/12 h-2 bg-red-700 m-auto  rounded full my-6"></div>

      <h2 className="text-4xl underline mb-8 text-center font-cinzel">
        Welcome to{" "}
        <span className="font-cinzel text-5xl text-red-700">GodPoint </span>{" "}
        <span className="text-5xl font-medium">Businesses</span>
      </h2>
      <div className="grid grid-cols-2 m-auto">
        <div className="text-center font-livvic w-8/12 m-auto">
          <h3 className="text-2xl">
            Lorem ipsum dolor sit amet. Ut galisum perferendis qui obcaecati
            porro non vitae voluptatem ut beatae error id dolorem quidem. Eos
            natus consequuntur rem aperiam velit vel ullam minus est accusantium
            recusandae. Aut debitis blanditiis sed ipsam minus quo repudiandae
            corrupti et nesciunt eius. Et omnis voluptatem et neque quas et
            eligendi Quis et officia expedita ut accusantium autem id quis
            dolores.
            <br />
            <br />
            Qui animi dolore et voluptas magni 33 voluptatum optio. Et esse nisi
            ut fugiat maiores quo totam consequatur quo iste pariatur qui
            molestiae quasi. In incidunt recusandae aut accusantium illum ut
            voluptatem autem et iste dicta.
          </h3>
        </div>
        <div m-auto>
          <img className="w-5/12 wood" src="./wood.jpg" alt="" />
        </div>
      </div>

      <div className="w-5/12 h-2 bg-red-700 m-auto  rounded full mt-6 mb-12"></div>
    </div>
  );
};

export default About;
