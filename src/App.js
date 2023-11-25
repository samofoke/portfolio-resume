import { Routes, Route } from "react-router-dom";
import NavBar from "./routes/navigation/navigation";
import HomePage from "./routes/homepage/homepage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
