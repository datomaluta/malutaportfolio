import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProjectsContext from "../context/Projects";

const Details = () => {
  const navigate = useNavigate();
  const ctx = useContext(ProjectsContext);
  const params = useParams();
  const project = ctx.projects.find((project) => project.id === +params.id);

  const backToHomeHandler = () => {
    navigate("/");
  };

  return (
    <div className="bg-neutral-900 min-h-screen animate-smoothLoad">
      <div className="max-w-[75rem] bg-neutral-800 shadow-md mx-auto min-h-screen px-4 py-10 flex flex-col items-center">
        <h1 className="text-center text-white text-5xl font-bold upper sm:text-3xl">
          {project.name}
        </h1>
        <button
          onClick={backToHomeHandler}
          className="text-orange-500 font-bold"
        >
          Back to home
        </button>

        {project.videoEmbed ? (
          <div className="max-w-[60rem] h-[25rem] sm:h-[14rem] w-full  mt-8 rounded overflow-hidden flex justify-center">
            <iframe
              src={project.videoEmbed}
              frameBorder="0"
              allowFullScreen
              style={{
                maxWidth: "700px",
                width: "100%",
                maxHeight: "400px",
                height: "100%",
              }}
            ></iframe>
          </div>
        ) : (
          <div className="max-w-[60rem] h-auto bg-red-500 w-full mt-8 rounded overflow-hidden flex justify-center">
            <img className="w-full h-full object-cover" src={project.imgsrc} />
          </div>
        )}

        {/* <img className="w-full h-full object-cover" src={project.imgsrc} /> */}
        <div className="max-w-[60rem] bg-red-5004 w-full mt-8 flex flex-col gap-6">
          <div className="flex text-white text-xl sm:text-base">
            <p className="font-bold text-orange-500 w-28 sm:w-24 flex-shrink-0 ">
              Description:
            </p>
            <p>{project.description}</p>
          </div>

          <div className="flex text-white text-xl sm:text-base">
            <p className="font-bold text-orange-500  w-28 sm:w-24 shrink-0">
              Stack:
            </p>
            <div className="flex gap-2 flex-wrap">
              {project.stack.map((item) => (
                <p key={item}>{item};</p>
              ))}
            </div>
          </div>

          {project.type === "fullstack" ? (
            <>
              <div className="flex text-white text-xl sm:text-base">
                <p className="font-bold text-orange-500 w-28 sm:w-24 flex-shrink-0 ">
                  Git Repo (back):
                </p>
                <a
                  target="_blank"
                  href={project.github_back}
                  className="break-all"
                >
                  {project.github_back}
                </a>
              </div>
              <div className="flex text-white text-xl sm:text-base">
                <p className="font-bold text-orange-500 w-28 sm:w-24 flex-shrink-0 ">
                  Git Repo (front):
                </p>
                <a
                  target="_blank"
                  href={project.github_front}
                  className="break-all"
                >
                  {project.github_front}
                </a>
              </div>
            </>
          ) : project.github ? (
            <div className="flex text-white text-xl sm:text-base">
              <p className="font-bold text-orange-500 w-28 sm:w-24 flex-shrink-0 ">
                Git Repo:
              </p>
              <a target="_blank" href={project.github} className="break-all">
                {project.github}
              </a>
            </div>
          ) : (
            ""
          )}

          {project.liveURL ? (
            <div className="flex  text-white text-xl sm:text-base">
              <p className="font-bold text-orange-500 w-28 sm:w-24 flex-shrink-0 ">
                Live URL:
              </p>
              <a target="_blank" href={project.liveURL}>
                {project.liveURL}
              </a>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Details;
