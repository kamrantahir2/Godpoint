const WhatWeDo = () => {
  return (
    <div className=" text-black border-t-4 pb-12 border-black">
      <div className=" ">
        <div className=" order-first font-livvic">
          <div className=" text-center rounded-xl p-12 ">
            <h2 className="text-5xl font-semibold  m-auto my-8 font-cinzel">
              What We <span className="text-red-700 font-bold">Do</span>
            </h2>
            <div className="w-5/12 bg-red-600 h-1 m-auto rounded-full"></div>
            <h3 className="text-3xl mt-24 m-auto w-8/12 leading-snug text-cinzel">
              Lorem ipsum dolor sit amet. Sed vero modi eum quas unde ut
              provident distinctio ut provident mollitia quo quaerat temporibus.
            </h3>
          </div>

          <div className="mx-12 grid grid-cols-3 gap-12">
            <div className="h-[80vh] border-2 shadow-2xl border-red-700  rounded-3xl text-black">
              <img
                src="./room.jpg"
                className="rounded-t-3xl border-b-4 border-red-700"
                alt=""
              />
              <h3 className="text-center mt-4 text-3xl font-cinzel font-bold">
                Wardrobe
              </h3>

              <h4 className="mt-6 px-8 font-raleway text-2xl text-center">
                Lorem ipsum dolor sit amet. Sed vero modi eum quas unde ut
                provident distinctio ut provident mollitia quo quaerat
                temporibus.
              </h4>

              <div className="flex">
                <button className="m-auto mt-12 bg-red-700 font-cinzel font-semibold text-lg text-white">
                  Learn More
                </button>
              </div>
            </div>
            <div className="h-[80vh] border-2 shadow-2xl border-red-700  rounded-3xl text-black">
              <img
                src="./heroFurniture.jpg"
                className="rounded-t-3xl border-b-4 border-red-700"
                alt=""
              />
              <h3 className="text-center mt-4 text-3xl font-cinzel font-bold">
                Furniture
              </h3>

              <h4 className="mt-6 px-8 font-raleway text-2xl text-center">
                Lorem ipsum dolor sit amet. Sed vero modi eum quas unde ut
                provident distinctio ut provident mollitia quo quaerat
                temporibus.
              </h4>

              <div className="flex">
                <button className="m-auto mt-12 bg-red-700 font-cinzel font-semibold text-lg text-white">
                  Learn More
                </button>
              </div>
            </div>
            <div className="h-[80vh] border-2 shadow-2xl border-red-700  rounded-3xl text-black">
              <img
                src="./kitchen.jpg"
                className="rounded-t-3xl border-b-4 border-red-700"
                alt=""
              />
              <h3 className="text-center mt-4 text-3xl font-cinzel font-bold">
                Kitchen
              </h3>

              <h4 className="mt-6 px-8 font-raleway text-2xl text-center">
                Lorem ipsum dolor sit amet. Sed vero modi eum quas unde ut
                provident distinctio ut provident mollitia quo quaerat
                temporibus.
              </h4>

              <div className="flex">
                <button className="m-auto mt-12 bg-red-700 font-cinzel font-semibold text-lg text-white">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
