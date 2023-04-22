import SiteCard from "../components/siteCard/SiteCard";
import epicImg from "../assets/images/epic_main.jpg";
import covidQuestionareImg from "../assets/images/covid_questionare.jpg";
import coronatimeImg from "../assets/images/coronatime.jpg";
import movieQuotesImg from "../assets/images/moviequotes.jpg";
import redberryLaptopImg from "../assets/images/redberry_laptop.jpg";
import sweeftAccImg from "../assets/images/sweeft.jpg";
import ishopImg from "../assets/images/ishop.jpg";
import tipcalculatorImg from "../assets/images/tipcalculator.jpg";
import quizImg from "../assets/images/quiz.jpg";
import casinoImg from "../assets/images/casino.jpg";
import foordOrderImg from "../assets/images/foodorder.jpg";
import farmverstImg from "../assets/images/farmvest.jpg";
import bankAccImg from "../assets/images/bankacc.jpg";
import forkifyImg from "../assets/images/forkify.jpg";
import omnifoodImg from "../assets/images/omnifood.jpg";
import ProjectsContext from "../context/Projects";
import { useContext } from "react";

const Home = (props) => {
  const ctx = useContext(ProjectsContext);
  console.log(ctx);
  return (
    <div className="bg-neutral-900 min-h-screen">
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
          {/* <SiteCard name="Epic Movie Quotes" imgsrc={epicImg} />
          <SiteCard name="Covid Quiestionare" imgsrc={covidQuestionareImg} />
          <SiteCard name="Coronatime" imgsrc={coronatimeImg} />
          <SiteCard name="Movie Quotes" imgsrc={movieQuotesImg} />
          <SiteCard name="Redberry Laptop" imgsrc={redberryLaptopImg} />
          <SiteCard name="Sweeft Acceleration" imgsrc={sweeftAccImg} />
          <SiteCard name="Ecommerce" imgsrc={ishopImg} />
          <SiteCard name="Tip Calculator" imgsrc={tipcalculatorImg} />
          <SiteCard name="Quiz" imgsrc={quizImg} />
          <SiteCard name="Casino" imgsrc={casinoImg} />
          <SiteCard name="Food Order" imgsrc={foordOrderImg} />
          <SiteCard name="Farmvest" imgsrc={farmverstImg} />
          <SiteCard name="Bank Account" imgsrc={bankAccImg} />
          <SiteCard name="Forkify" imgsrc={forkifyImg} />
          <SiteCard name="Omnifood" imgsrc={omnifoodImg} /> */}
        </div>
      </div>
    </div>
  );
};
export default Home;
