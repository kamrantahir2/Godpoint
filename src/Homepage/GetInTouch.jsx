const GetInTouch = () => {
  return (
    <div className="py-12 bg-black border-t-4 border-red-800">
      <div>
        <h1 className="text-center text-5xl mb-12 font-cinzel font-semibold text-white">
          Get In <span className="text-red-600">Touch</span>
        </h1>
        <div className="w-5/12 bg-red-600 h-1 m-auto rounded-full"></div>
      </div>

      <div className="m-auto w-7/12 mt-8 font-livvic">
        <form action="">
          <div className="text-center">
            <label className="text-white text-xl" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="ml-4 rounded-md w-7/12 h-[3rem] pl-2"
              placeholder="John Doe"
            />
          </div>
          <div className="text-center mt-8">
            <label className="text-white text-xl" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="ml-4 rounded-md w-7/12 h-[3rem] pl-2"
              placeholder="johndoe@email.com"
            />
          </div>
          <div className="text-center mt-8">
            <label className="text-white text-xl -ml-4" htmlFor="subject">
              Subject:
            </label>
            <input
              type="text"
              id="subject"
              className="ml-4 rounded-md w-7/12 h-[3rem] pl-2"
              placeholder="Subject"
            />
          </div>
          <div className="text-center mt-8 flex justify-center">
            <label className="text-white text-xl -ml-8 " htmlFor="message">
              Message:
            </label>
            <textarea
              type="textarea"
              id="message"
              className="ml-4 rounded-md w-7/12 p-2 h-24"
              placeholder="Message"
            />
          </div>
          <div className="text-center mt-12">
            <button className="text-white text-xl bg-red-800 font-cinzel font-semibold hover:bg-red-900 border-2 border-red-800">
              Submit
            </button>
            a
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
