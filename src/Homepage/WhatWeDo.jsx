const WhatWeDo = () => {
  return (
    <div className=" text-black border-t-4 border-black">
      <div className=" grid grid-cols-2">
        <div className="w-full border-l-4 border-red-900 warehouse">
          {" "}
          <img className="" src="./warehouse.jpg" alt="" />
        </div>
        <div className=" order-first font-livvic">
          <div className=" text-center rounded-xl p-12 ">
            <h2 className="text-4xl font-semibold  m-auto my-8 font-cinzel">
              What We <span className="text-red-700 font-bold">Offer</span>
            </h2>
            <div className="w-5/12 bg-red-600 h-1 m-auto "></div>
            <h3 className="text-3xl mt-24 m-auto w-8/12 leading-snug text-cinzel">
              Lorem ipsum dolor sit amet. Sed vero modi eum quas unde ut
              provident distinctio ut provident mollitia quo quaerat temporibus.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
