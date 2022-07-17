import { Navbar } from "../Navbar/Navbar";

export const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className=" container mx-auto mt-56 2xl:mt-60 text-white flex flex-col justify-center items-center gap-10 break-words">
        <p className="font-Herculanum text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
          Welcome
        </p>
        <p className="text-center px-5 md:px-9 ">
          Here you are going to learn how the world of web works, from back-end
          technologies to front-end technologies, from best practices to
          organizing your folder structures, from new css frameworks to managing
          your data with non-relational-databases and finally creating your own
          full stack applications.
        </p>
        <div className="absolute bottom-4 flex flex-col justify-center items-center gap-5">
          <hr className="text-white w-60 md:w-72" />
          <p className="text-white">Use Navigation Links</p>
        </div>
      </div>
    </>
  );
};
