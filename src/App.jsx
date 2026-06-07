import Header from "./components/Header";
import About from "./components/About";
import ArticleList from "./components/ArticleList";
import "./App.css"

function App() {
  const siteName = "Daily Blog";

  const aboutText =
    "Read daily. Think deeply. Stay inspired.";

  const articles = [
    {
      id: 1,
      title: "Why Consistency Beats Motivation",
      date: "June 2026",
      preview: "Motivation fades, but systems keep you going..."
    },
    {
      id: 2,
      title: "React Basics Every Beginner Should Know",
      date: "June 2026",
      preview: "Components, props, and state are key..."
    }
  ];

  return (
    <div>
      <Header name={siteName} />
      <About about={aboutText} />
      <ArticleList articles={articles} />
    </div>
  );
}

export default App;