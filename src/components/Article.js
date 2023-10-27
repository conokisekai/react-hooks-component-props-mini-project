import React from "react";

function Article({ title, date = "January 1, 1970", preview }) {
  const minutesToRead = Math.ceil(preview.length / 100); // Assuming 100 characters per minute

  const renderMinutesToRead = () => {
    if (minutesToRead < 6) {
      return "☕️ ".repeat(minutesToRead) + ` ${minutesToRead} min read`;
    } else {
      const bentoCount = Math.ceil(minutesToRead / 10);
      return "🍱 ".repeat(bentoCount) + ` ${minutesToRead} min read`;
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p>{renderMinutesToRead()}</p>
    </article>
  );
}

export default Article;
