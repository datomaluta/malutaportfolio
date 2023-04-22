import { Routes, Route } from "react-router-dom";
import Details from "./pages/Details";
import { ProjectsProvider } from "./context/Projects";
import Main from "./pages/Main";

function App() {
  return (
    <ProjectsProvider>
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/project/:id" element={<Details />} />
        </Routes>
      </div>
    </ProjectsProvider>
  );
}

export default App;
