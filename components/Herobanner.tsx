import Link from "next/link";

const Herobanner = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="text-[#9C9C9C]  max-w-xl pt-20 md:pt-32 pb-12 md:pb-0  px-4 md:px-0 ">
        <h1 className="font-bold text-5xl md:text-6xl text-white">Software Engineer & Shopify Partner</h1>
        
        <p className="my-8 text-base">
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at{" "}
          <a
            href="https://www.linkedin.com/company/c0devant"
            className="underline text-white/80 font-semibold hover:text-white bg-[#1B1B1B] py-0.5 px-2 rounded-sm"
            target="_blank"
          >
            Codevant
          </a>
          .
        </p>
        <button className="mt-6 flex items-center px-8 py-3  bg-white text-gray-700 rounded-sm font-bold">
          <Link href="/projects" className={`hover:text-black`}>
            See My Work Here &rarr;{" "}
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Herobanner;
