import React from "react";
import covidQuestionareImg from "../assets/images/covid_questionare.jpg";
import coronatimeImg from "../assets/images/coronatime.jpg";
import tipcalculatorImg from "../assets/images/tipcalculator.jpg";
import farmverstImg from "../assets/images/farmvest.jpg";
import omnifoodImg from "../assets/images/omnifood.jpg";
import maliaNewsImg from "../assets/images/news.jpg";
import natoursImg from "../assets/images/natours.jpg";
import istoreImg from "../assets/images/istore.png";
import metablogImg from "../assets/images/metablog.jpg";
import studypayImg from "../assets/images/studypay.jpg";
import billingImg from "../assets/images/billing.jpg";
const ProjectsContext = React.createContext();

export const ProjectsProvider = (props) => {
  const projects = [
    {
      id: 20,
      name: "Customer management and Billing system",
      imgsrc: billingImg,
      description: (
        <ul className="flex flex-col gap-4">
          <li>
            A complex platform that combines customer management, billing system
            and document management capabilities in one space.
          </li>
          <li>
            Registering users, creating roles, assigning roles, displaying
            transactions, executing transactions, viewing statistics and data
            with charts, documents, document templates, signing, editing and
            printing functions.
          </li>
        </ul>
      ),
      stack: ["React.js", "Javascript", "tailwind", "React hook form"],
      github: "",
      liveURL: "",
    },
    {
      id: 19,
      name: "studypay.ge",
      imgsrc: studypayImg,
      description: (
        <ul className="flex flex-col gap-4">
          <li>
            Studypay is a digital accounting and payment platform for
            educational organizations that simplifies daily operations and
            financial transactions.
          </li>
          <li>
            The project consists of several parts. The platform has a panel with
            different actions for legal entities and physical entities.
          </li>

          <li>
            In addition, the platform has an admin panel from where everything
            is controlled and managed.
          </li>
        </ul>
      ),
      stack: [
        "React.js",
        "Javascript",
        "Typescript",
        "tailwind",
        "React hook form",
      ],
      github: "",
      liveURL: "https://studypay.ge",
    },
    {
      id: 18,
      name: "MERN stack blog",
      imgsrc: metablogImg,
      description:
        "The project is a blogging platform with two roles: Admin and User. Users can register, log in, post content, and manage their posts on a personal dashboard. They can also comment, like, edit, and delete their own comments. Admins have full access to all content and user information, allowing them to manage and edit or delete any post or comment. Unauthorized users will be redirected to the login page. The site will support dark/light modes and Google authentication.",
      stack: [
        "Node.js/Express.js",
        "React.js",
        "Javascript",
        "Typescript",
        "tailwind",
        "React hook form",
        "MongoDB",
      ],
      github: "https://github.com/datomaluta/mern-blog",
      liveURL: "https://mern-blog-gg9u.onrender.com/",
    },
    {
      id: 17,
      name: "istore e-commerce",
      imgsrc: istoreImg,
      description:
        "e-commerce website for computers. The app language is Georgian and english. It has a search functionality, dark/light theme mode, and also an admin functionality. If you register and authenticated with laravel sanctum, you will have permission to access the admin panel and create, edit, or delete product.",
      stack: [
        "Laravel",
        "React.js",
        "Javascript",
        "Typescript",
        "tailwind",
        "React hook form",
        "Sanctum",
      ],
      type: "fullstack",
      github_back: "https://github.com/datomaluta/istore-back.git",
      github_front: "https://github.com/datomaluta/istore-front.git",
      liveURL: "https://istore-maluta.netlify.app/",
    },
    {
      id: 16,
      name: "News Site",
      imgsrc: maliaNewsImg,
      description:
        "A news site is a platform where you can read news about politics, society, and sports. The app language is Georgian. It features a search functionality, dark/light theme mode, and also an admin functionality. If you register and authenticated with laravel sanctum, you will have permission to access the admin panel and create, edit, or delete news.",
      stack: [
        "Laravel",
        "React.js",
        "Javascript",
        "tailwind",
        "React hook form",
        "Sanctum",
      ],
      type: "fullstack",
      videoEmbed: "https://www.youtube.com/embed/n_Fbo5jJ4DE",
      github_back: "https://github.com/datomaluta/inews-back.git",
      github_front: "https://github.com/datomaluta/inews-front.git",
      liveURL: "",
    },
    // {
    //   id: 15,
    //   name: "Epic Movie Quotes",
    //   imgsrc: epicImg,
    //   description:
    //     "Epic movie quotes - is a platform where users can first register, then log in and view quotes from movies. Also add quotes, movies. update data, change their user data, etc. NOT FINISHED, STILL IN PROGRESS!!!",
    //   stack: ["Laravel", "next.js", "typescript", "tailwind"],
    //   type: "fullstack",
    //   github_back: "https://github.com/datomaluta/epic-movie-quotes-back",
    //   github_front: "https://github.com/datomaluta/epic-movie-quotes-front",
    //   liveURL: "Not available yet!",
    // },
    {
      id: 14,
      name: "Covid Quiestionare",
      imgsrc: covidQuestionareImg,
      description:
        "The Covid Questionnaire is an application that new employees of RedBerry have to fill out to find out how they feel about the Covid situation and how RedBerry can improve and support the company's internal Covid policy.",
      stack: ["React.js", "tailwind", "React hook form"],
      github:
        "https://github.com/datomaluta/covid-questionare-redberry-project",
      liveURL: "API is dismissed and site can't work in the correct way",
    },
    {
      id: 13,
      name: "Coronatime",
      imgsrc: coronatimeImg,
      description:
        "Coronatime - is a platform where we can register, go through authorization (as well as restore the password if we have forgotten it) and see what the situation is today in the countries of the world.",
      stack: ["Laravel", "tailwind", "Spatie"],
      videoEmbed: "https://www.youtube.com/embed/vEtbZ80SjEA",
      github: "https://github.com/datomaluta/coronatime-redberry-project",
      liveURL: "",
    },
    // {
    //   id: 12,
    //   name: "Movie Quotes",
    //   imgsrc: movieQuotesImg,
    //   description:
    //     "Movie Quotes is platform where you can see random movie’s quotes. This platform has admin panel, where you can add/edit movies and quotes.",
    //   stack: ["Laravel", "tailwind"],
    //   videoEmbed: "https://www.youtube.com/embed/T7km5TJmuUw",
    //   github: "https://github.com/datomaluta/movie-quotes-redberry",
    //   liveURL: "Not Avaliable yet!",
    // },
    // {
    //   id: 11,
    //   name: "Redberry Laptop",
    //   imgsrc: redberryLaptopImg,
    //   description:
    //     "Redberry Laptop App is a platform where employee can fill out a big form where is two segment of form. First is about employee and second about his/her laptop. Finally, data which got by form, stored and we can see it in records list. unfortunetely, API is dismissed and site can't work in the correct way.",
    //   stack: ["Laravel", "tailwind"],
    //   github: "https://github.com/datomaluta/redberry-laptop",
    //   liveURL: "https://redberry-laptop-datomaluta.netlify.app/home",
    // },
    // {
    //   id: 10,
    //   name: "Sweeft Project",
    //   imgsrc: sweeftAccImg,
    //   description:
    //     "In this application you can see data which is fetched from api with infinite scrolling and also detail info about certain user. where you can see friendslist.",
    //   stack: ["React.js", "tailwind"],
    //   github: "https://github.com/datomaluta/sweeft-acceleration-project",
    //   liveURL:
    //     "API URL IS cancelled and SITE IS NOT WORKING IN THE CORRECT WAY",
    // },
    // {
    //   id: 9,
    //   name: "E-commerce istore",
    //   imgsrc: ishopImg,
    //   description:
    //     "This is an e-commerce web application with my vision of design. Data is fetched from a free API. You can view the main page and also the shop page, where you can see certain products if you click an item. by clicking on add button, item will add to cart and also you can see your cart where are chosen products. Job is not finished, site is under working!!!",
    //   stack: ["React", "javascript", "SCSS"],
    //   github: "https://github.com/datomaluta/Istore-shop",
    //   liveURL: "https://unique-pithivier-519631.netlify.app/",
    // },
    {
      id: 8,
      name: "Tip Calculator",
      imgsrc: tipcalculatorImg,
      description:
        "This is an application where you can calculate tip and total amount based on bill, people count and tip percent.",
      stack: ["React", "javascript", "CSS"],
      github: "https://github.com/datomaluta/TipCalculator",
      liveURL: "https://tipcalculate-datomaluta.netlify.app/",
    },
    // {
    //   id: 7,
    //   name: "Quiz",
    //   imgsrc: quizImg,
    //   description:
    //     "This is simple quiz where are three types of question. there is progress bar and also user can see attempts history.",
    //   stack: ["React", "javascript", "CSS"],
    //   github: "https://github.com/datomaluta/myQuiz",
    //   liveURL: "https://maliaquiz.netlify.app/",
    // },
    // {
    //   id: 6,
    //   name: "Casino Main Page",
    //   imgsrc: casinoImg,
    //   description:
    //     "This is the casino site's main page, where data is fetched from the API. There is search functionality and a load more feature.",
    //   stack: ["React", "javascript", "CSS"],
    //   github: "https://github.com/datomaluta/Casino",
    //   liveURL: "https://casinomalia.netlify.app/",
    // },
    // {
    //   id: 5,
    //   name: "Foord order",
    //   imgsrc: foordOrderImg,
    //   description:
    //     "Food order simple application where you can choose some of the food from list. This project is from Maximilian Schwarzmüller react.js course.",
    //   stack: ["React", "javascript", "CSS"],
    //   github: "https://github.com/datomaluta/Food-Order",
    //   liveURL: "https://maliafoodorder.netlify.app/",
    // },
    {
      id: 4,
      name: "Farmvest",
      imgsrc: farmverstImg,
      description:
        "Farmwest site - responsive landing page, where are some sections and interesting layouts.",
      stack: ["HTML", "CSS"],
      github: "https://github.com/datomaluta/Farmvest",
      liveURL: "https://farmvest-malia.netlify.app/",
    },
    {
      id: 100,
      name: "Natours",
      imgsrc: natoursImg,
      description:
        "Landing page with various interesting features. It has no functionality, only design is made.",
      stack: ["HTML", "SCSS"],
      github: "https://github.com/datomaluta/natours.git",
      liveURL: "https://idyllic-sundae-85639b.netlify.app/",
    },
    // {
    //   id: 3,
    //   name: "Bank Account",
    //   imgsrc: bankAccImg,
    //   description:
    //     "Simple application where the user can see his/her transactions, transfer money, and borrow money from the bank.",
    //   stack: ["Javascript", "React", "HTML", "CSS"],
    //   github: "https://github.com/datomaluta/bank-acc",
    //   liveURL: "https://malia-bank-acc.netlify.app/",
    // },
    {
      id: 2,
      name: "Omnifood",
      imgsrc: omnifoodImg,
      description:
        "Responsive landing page is from Jonas Schmedtmann Udemy course.",
      stack: ["Javascript", "HTML", "CSS"],
      github: "https://github.com/datomaluta/omnifood",
      liveURL: "https://maliafood.netlify.app/",
    },
    // {
    //   id: 1,
    //   name: "Forkify",
    //   imgsrc: forkifyImg,
    //   description:
    //     "Application where user can see food recipes or create his/her own.",
    //   stack: ["Javascript", "HTML", "CSS"],
    //   github: "https://github.com/datomaluta/forkifyProject",
    //   liveURL: "https://forkify-malia.netlify.app/",
    // },
  ];
  return (
    <ProjectsContext.Provider value={{ projects: projects }}>
      {props.children}
    </ProjectsContext.Provider>
  );
};

export default ProjectsContext;
