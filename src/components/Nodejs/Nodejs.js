import { Navbar } from "../Navbar/Navbar";
import NodeJsLogo from "../../assets/Images/Nodejs.png";

export const NodeJs = () => {
  return (
    <div className="w-screen h-screen overflow-auto  bg-gradient-to-br from-[#84C14D] via-[#1F1D1D] to-black">
      <Navbar />
      <div className=" relative z-20 container mx-auto mt-28 md:mt-56 2xl:mt-60 text-white flex flex-col justify-center items-center gap-10 break-words">
        <p className="font-Herculanum text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
          Node.js
        </p>
        <img
          className="absolute -z-10 right-0 opacity-20 w-96"
          src={NodeJsLogo}
          alt="MongodbLogo"
        />
        <p className="text-center px-5 md:px-9 ">
          Welcome to nodejs module, in this module you will learn how to setup
          your first nodejs application and learn how to use libraries like
          express and how it works with nodejs, you will also learn how to
          install package.json file and stat working on creating servers and
          restful api's. by the end you will learn how you can connect you
          database and start using express.
        </p>
        <div className="flex flex-col justify-center items-center gap-5">
          <hr className="text-white w-60 md:w-72" />
          <p className="text-white">Get Started</p>
        </div>
      </div>
    </div>
  );
};
