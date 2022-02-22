import NewsPage from "./components/NewsPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const { useState, useCallback } = require("react");

const App = () => {
  const [category, setCategory] = useState("all");
  const onSelect = useCallback((category) => setCategory(category), []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NewsPage></NewsPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
