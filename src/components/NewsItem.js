import React from "react";

const NewsItem = (props) => {

    let {title,description,imageurl,newsurl, author, date, source} = props;
    return (
      <div className="my-3 d-flex justify-content-center">
        <div className="card">
          <span className="position-relative translate-middle badge bg-danger p-2 fs-6" style={{width: '45%', left: '75%',top: '21%', zIndex: '1', rotate: '40deg'}}>{source}</span>
          <img src={imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsurl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
