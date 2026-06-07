import Article from "./Article";

function ArticleList({ articles }) {
  return (
    <div>
      {articles.map((article) => (
        <Article
          key={article.id}
          title={article.title}
          date={article.date}
          preview={article.preview}
        />
      ))}
    </div>
  );
}

export default ArticleList;