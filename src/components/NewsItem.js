import React from "react";

const NewsItem = (props) => {
  let { title, description, imgUrl, newsUrl, author, date, source } = props;
  return (
    <div>
      <div className="card my-2">
        <img
          src={
            !imgUrl
              ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjCAfVgATBaPFFWX2WWJF6x-gVW4P1mdvfKA&usqp=CAU"
              : imgUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            {title}
            <span className="badge bg-secondary">{source}</span>
          </h5>
          <p className="card-text">{description}</p>
          <a
            href={newsUrl}
            rel="noreferrer"
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read more...
          </a>
          <p>
            Last updated by {!author ? "Unknown Author" : author} on{" "}
            {new Date(date).toGMTString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
