import { useParams } from "react-router-dom";
import Categories from "./Categories";
import NewsList from "./NewsList";

const NewsPage = () => {
  const param = useParams();
  const category = param["*"] || "all";

  return (
    <>
      <Categories category={category}></Categories>
      <NewsList category={category}></NewsList>
    </>
  );
};

export default NewsPage;
