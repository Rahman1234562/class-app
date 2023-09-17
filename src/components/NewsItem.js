import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageurl, newsUrl, author, date, source } = this.props;
    return (
      <div>
        <div className="card text-center" style={{width: "18rem"}}>
          <img src={!imageurl ? "https://image.cnbcfm.com/api/v1/image/107236598-1683311016814-gettyimages-1485421645-032a0240_mkuyfyfc.jpeg?v=1694645653&w=1920&h=1080"
          : imageurl} className="card-img-top" alt="politic" />
          <div className="card-body">
            <h5 className="card-title">{title}
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style= {{left: '10px'}}>
    {source}
  </span>
</h5>
            <p className="card-text">{description}this is description</p>
            <p className="card-text"><small className="text-muted">By {!author ? "unknown" : author} On {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
             see more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
