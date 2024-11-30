"use client";
import ProjectCard from "../../../components/ProjectCard";
import shopifytheme from "../../../public/prismatheme.png";
import chatgptclonehomepage from "../../../public/chatgptclonehomepage.png";
import googleclonehomepage from "../../../public/googleclonehomepage.png";
import defilandingpage from "../../../public/defilandingpage.png";
import graft3r from "../../../public/graft3r.png";
import shaklibrands from "../../../public/shaklibrands.png";
import kwikish from "../../../public/kwikish-homepage.png";
import secureitcontrols from "../../../public/secure-it-controls.png";
import JsAesthetics from "../../../public/JsAesthetics.png";
import NuStore from "../../../public/NuStore.png";
import { motion, AnimatePresence } from "framer-motion";

const page = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.25,
        }}
      >
        <div className="scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-slate-700 mx-auto">
          <div className="max-w-6xl mx-auto py-20 px-4 md:px-0 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <ProjectCard
              projectName="Kwikish"
              projectSummary="Custom Shopify theme for a food brand"
              techCard1="Liquid"
              techCard2="Javascript"
              techCard3="Tailwind"
              projectLink="https://kwikish.com"
              backgroundImage={`${kwikish.src}`}
              githubLink="https://github.com/daniel-akinyemi/Prisma-Theme"
            />
            <ProjectCard
              projectName="Secure It Controls"
              projectSummary="Shopify Theme for a home security brand"
              techCard1="Liquid"
              techCard2="Javascript"
              techCard3=""
              projectLink="https://whebbio-dev-store.myshopify.com/"
              backgroundImage={`${secureitcontrols.src}`}
              githubLink="https://github.com/daniel-akinyemi/Prisma-Theme"
            />
            <ProjectCard
              projectName="Bonto Theme"
              projectSummary="Custom Shopify theme for online marketplace"
              techCard1="Liquid"
              techCard2="Javascript"
              techCard3="Tailwind"
              projectLink="https://whebbio-dev-store.myshopify.com/"
              backgroundImage={`${shopifytheme.src}`}
              githubLink="https://github.com/daniel-akinyemi/Prisma-Theme"
            />
            <ProjectCard
              projectName="Graft3r"
              projectSummary="Streetwear fashion ecommerce website"
              techCard1="Liquid"
              techCard2="Javascript"
              techCard3=""
              projectLink="https://graft3r.co.uk"
              backgroundImage={`${graft3r.src}`}
              githubLink=""
            />

            <ProjectCard
              projectName="JS Aesthetics"
              projectSummary="Luxury aesthetic treatments spa"
              techCard1="Liquid"
              techCard2="Javascript"
              techCard3="CSS/SCSS"
              projectLink="https://js-aesthetics.co.uk/"
              backgroundImage={`${JsAesthetics.src}`}
              githubLink=""
            />
            <ProjectCard
              projectName="Nu Store"
              projectSummary="Skin-care ecommerce brand"
              techCard1="Liquid"
              techCard2="Javascript"
              techCard3="CSS/SCSS"
              projectLink="https://nu-store.de/"
              backgroundImage={`${NuStore.src}`}
              githubLink=""
            />
            <ProjectCard
              projectName="Shaklibrands"
              projectSummary="Modest fashion ecommerce website"
              techCard1="Liquid"
              techCard2="Javascript"
              techCard3="CSS/SCSS"
              projectLink="https://shaklibrands.com"
              backgroundImage={`${shaklibrands.src}`}
              githubLink=""
            />

            <ProjectCard
              projectName="Chat GPT Clone 1.1"
              projectSummary="I created a clone of the popular AI chatbot"
              techCard1="NextJS"
              techCard2="Tailwind CSS"
              techCard3="Vercel"
              projectLink="https://chat-gpt-clone-1-1-git-main-daniel-akinyemi.vercel.app/"
              backgroundImage={`${chatgptclonehomepage.src}`}
              githubLink="https://github.com/daniel-akinyemi/chat-gpt-clone-1.1"
            />

            <ProjectCard
              projectName="De-Fi Trading WebApp"
              projectSummary="Landing Page for a De-Fi trading firm"
              techCard1="React"
              techCard2="Tailwind CSS"
              techCard3="Vercel"
              projectLink="https://defi-mnymfgytz-daniel-akinyemi.vercel.app/"
              backgroundImage={`${defilandingpage.src}`}
              githubLink=""
            />
            <ProjectCard
              projectName="Google Clone 2.0"
              projectSummary="modern clone of Google search with React Js"
              techCard1="Next.JS"
              techCard2="Tailwind"
              techCard3="Vercel"
              projectLink="https://google-clone-version-2-git-main-daniel-akinyemi.vercel.app/"
              backgroundImage={`${googleclonehomepage.src}`}
              githubLink="https://github.com/daniel-akinyemi/Google-Clone-2.0---Next-JS-TailwindCSS"
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default page;
