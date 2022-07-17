import { Navbar } from "../Navbar/Navbar";
import ExpressLogo from "../../assets/Images/Express.png";

export const Express = () => {
  return (
    <div className="w-screen h-screen overflow-auto  bg-gradient-to-br from-[#828282] via-[#100F0F] to-black">
      <Navbar />
      <div
        className=" relative z-20 container mx-auto mt-28 md:mt-56
      2xl:mt-60  text-white flex flex-col justify-center items-center gap-10 break-words"
      >
        <p className="font-Herculanum text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
          Express
        </p>
        <img
          className="absolute -z-10 right-0 opacity-20 w-96"
          src={ExpressLogo}
          alt="MongodbLogo"
        />
        <p className="text-center px-5 md:px-9 ">
          Welcome to express module, in this module you learn how to setup you
          first express server using node.js and you will also learn how to
          create your first restfulAPI and use all the methods like GET POST PUT
          PATCH DELETE
        </p>
        <div className="flex flex-col justify-center items-center gap-5">
          <hr className="text-white w-60 md:w-72" />
          <p className="text-white">Get Started</p>
        </div>
      </div>
    </div>
  );
};
