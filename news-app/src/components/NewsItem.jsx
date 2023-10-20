import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <span className="badge bg-danger my-2">{source}</span>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              Last updated by{" "}
              {author === " " || author === null ? "Anonyomous" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>

          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-primary"
          >
            Read More....
          </a>
        </div>
      </div>
    </div>
  );
};

NewsItem.defaultProps = {
  title: "TITLE",
  description: "DESC",
  imageUrl:
    "https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_1280.jpg",
};

export default NewsItem;
