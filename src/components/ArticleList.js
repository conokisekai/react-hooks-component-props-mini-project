import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  return (
    <main>
      {posts && posts.length > 0 ? (
        posts.map((post) => (
          <Article
            key={post.id}
            title={post.title}
            date={post.date} 
            preview={post.preview}
          />
        ))
      ) : (
        <p>No posts available.</p>
      )}
    </main>
  );
}

export default ArticleList;
