import { useState } from "react";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import epicImg from "./assets/images/epic_main.jpg";
import covidQuestionareImg from "./assets/images/covid_questionare.jpg";
import coronatimeImg from "./assets/images/coronatime.jpg";
import movieQuotesImg from "./assets/images/moviequotes.jpg";
import redberryLaptopImg from "./assets/images/redberry_laptop.jpg";
import sweeftAccImg from "./assets/images/sweeft.jpg";
import ishopImg from "./assets/images/ishop.jpg";
import tipcalculatorImg from "./assets/images/tipcalculator.jpg";
import quizImg from "./assets/images/quiz.jpg";
import casinoImg from "./assets/images/casino.jpg";
import foordOrderImg from "./assets/images/foodorder.jpg";
import farmverstImg from "./assets/images/farmvest.jpg";
import bankAccImg from "./assets/images/bankacc.jpg";
import forkifyImg from "./assets/images/forkify.jpg";
import omnifoodImg from "./assets/images/omnifood.jpg";
import Details from "./pages/Details";
import { ProjectsProvider } from "./context/Projects";

function App() {
  // const projects = [
  //   {
  //     id: 1,
  //     name: "Epic Movie Quotes",
  //     imgsrc: epicImg,
  //     description:
  //       "Epic movie quotes - is a platform where users can first register, then log in and view quotes from movies. Also add quotes, movies. update data, change their user data, etc. NOT FINISHED, STILL IN PROGRESS!!!",
  //     stack: ["Laravel", "next.js", "typescript", "tailwind"],
  //     github: "https:\\github.com",
  //     liveURL: "https:\\netlify.com",
  //   },
  //   {
  //     id: 2,
  //     name: "Covid Quiestionare",
  //     imgsrc: covidQuestionareImg,
  //     description:
  //       "The Covid Questionnaire is an application that new employees of RedBerry have to fill out to find out how they feel about the Covid situation and how RedBerry can improve and support the company's internal Covid policy.",
  //     stack: ["React.js", "tailwind", "React hook form"],
  //     github:
  //       "https://github.com/datomaluta/covid-questionare-redberry-project",
  //     liveURL: "https:\\netlify.com",
  //   },
  //   {
  //     id: 3,
  //     name: "Coronatime",
  //     imgsrc: coronatimeImg,
  //     description:
  //       "Coronatime - is a platform where we can register, go through authorization (as well as restore the password if we have forgotten it) and see what the situation is today in the countries of the world.",
  //     stack: ["Laravel", "tailwind", "Spatie"],
  //     github: "https://github.com/datomaluta/coronatime-redberry-project",
  //     liveURL: "https:\\netlify.com",
  //   },
  //   {
  //     id: 4,
  //     name: "Movie Quotes",
  //     imgsrc: movieQuotesImg,
  //     description:
  //       "Movie Quotes is platform where you can see random movie’s quotes. This platform has admin panel, where you can add/edit movies and quotes.",
  //     stack: ["Laravel", "tailwind"],
  //     github: "https://github.com/datomaluta/movie-quotes-redberry",
  //     liveURL: "https:\\netlify.com",
  //   },
  //   {
  //     id: 5,
  //     name: "Redberry Laptop",
  //     imgsrc: redberryLaptopImg,
  //     description:
  //       "Redberry Laptop App is a platform where employee can fill out a big form where is two segment of form. First is about employee and second about his/her laptop. Finally, data which got by form, stored and we can see it in records list. unfortunetely, API is dismissed and site can't work in the correct way.",
  //     stack: ["Laravel", "tailwind"],
  //     github: "https://github.com/datomaluta/redberry-laptop",
  //     liveURL: "https://redberry-laptop-datomaluta.netlify.app/home",
  //   },
  //   {
  //     id: 6,
  //     name: "Sweeft Project",
  //     imgsrc: sweeftAccImg,
  //     description:
  //       "In this application you can see data which is fetched from api with infinite scrolling and also detail info about certain user. where you can see friendslist.",
  //     stack: ["Laravel", "tailwind"],
  //     github: "https://github.com/datomaluta/sweeft-acceleration-project",
  //     liveURL:
  //       "API URL IS cancelled and SITE IS NOT WORKING IN THE CORRECT WAY",
  //   },
  // ];
  return (
    <ProjectsProvider>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<Details />} />
        </Routes>
      </div>
    </ProjectsProvider>
  );
}

export default App;
