import { Navbar } from "../Navbar/Navbar";
import ReactLogo from "../../assets/Images/React.png";

export const ReactJs = () => {
  return (
    <div className="w-screen h-screen overflow-auto  bg-gradient-to-br from-[#00CCFE] via-[#1F1D1D] to-black">
      <Navbar />
      <div className="relative z-20 container mx-auto mt-28 md:mt-56 2xl:mt-60 text-white flex flex-col justify-center items-center gap-10 break-words">
        <p className="font-Herculanum text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
          REACT
        </p>
        <img
          className="absolute -z-10 right-0 opacity-20 w-96"
          src={ReactLogo}
          alt="MongodbLogo"
        />
        <p className="text-center px-5 md:px-9 ">
          Welcome to react module, in this module you will learn how to setup
          your first react app using npx-create-react-app and what jsx is and
          you will also learn what props are and how you can pass them around
          from component to another, you will also learn prop drilling and why
          it is a bad practice. You will learn react hooks such as useState,
          useEffect and useContext and understand how to manage your
          applications state using these hooks, you will also learn libraries
          such Axios to send data from your front-end to a back-end API.
        </p>
        <div className=" flex flex-col justify-center items-center gap-5">
          <hr className="text-white w-60 md:w-72" />
          <p className="text-white">Get Started</p>
        </div>
      </div>
    </div>
  );
};
