function Blog() {
  const posts = [
    {
      id: 1,
      title: "Why Consistency Beats Motivation",
      excerpt: "Motivation fades, but systems keep you going...",
    },
    {
      id: 2,
      title: "React Basics Every Beginner Should Know",
      excerpt: "Components, props, and state are key...",
    },
  ];

  return (
    <main className="blogPage">
      <h1>Latest Posts</h1>

      <div className="postGrid">
        {posts.map((post) => (
          <div key={post.id} className="postCard">
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Blog;