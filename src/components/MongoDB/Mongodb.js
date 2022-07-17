import { Navbar } from "../Navbar/Navbar";
import MongodbLogo from "../../assets/Images/Mongodb.png";

export const Mongodb = () => {
  return (
    <div className="w-screen h-screen overflow-auto  bg-gradient-to-br from-[#5FAB50] via-[#0C120A] to-black">
      <Navbar />
      <div className="relative z-20 container mx-auto mt-28 md:mt-56 2xl:mt-60 text-white flex flex-col justify-center items-center gap-10 break-words">
        <p className="font-Herculanum text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
          Mongodb
        </p>
        <img
          className="absolute -z-10 right-0 opacity-20 w-96"
          src={MongodbLogo}
          alt="MongodbLogo"
        />
        <p className=" text-center px-5 md:px-9 ">
          In this section you will learn all the concepts that wrap around
          “mongoDB”, you will also learn how to connect to mongodb using node as
          javascript runtime and best folder practices when it comes to
          organizing your models and schemas. By the end you will understand the
          flow of how to use mongodb and why you should use mongodb over other
          relational databases that are out in the market.
        </p>
        <div className=" flex flex-col justify-center items-center gap-5">
          <hr className="text-white w-60 md:w-72" />
          <p className="text-white">Get Started</p>
        </div>
      </div>
    </div>
  );
};
