import SiteCard from "../components/siteCard/SiteCard";
import ProjectsContext from "../context/Projects";
import { useContext } from "react";

const Main = () => {
  const ctx = useContext(ProjectsContext);
  return (
    <div className="bg-neutral-900 min-h-screen animate-smoothLoad">
      <div className="max-w-[75rem] bg-neutral-800 shadow-md mx-auto min-h-screen px-4 py-10">
        <h1 className="text-center text-white text-5xl font-bold upper sm:text-3xl">
          My Projects
        </h1>
        <div className="grid grid-cols-3 lg:grid-cols-2  sm:flex sm:flex-col items-center mt-10 justify-items-center gap-x-5 gap-y-10">
          {ctx.projects.map((project) => (
            <SiteCard
              key={project.id}
              id={project.id}
              name={project.name}
              imgsrc={project.imgsrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Main;
