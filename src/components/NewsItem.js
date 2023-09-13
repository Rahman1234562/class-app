import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description } = this.props;
    return (
      <div>
        <div class="card" style={{width: "18rem"}}>
          <img src="https://media.cnn.com/api/v1/images/stellar/prod/230911204339-se-cupp.jpg?c=16x9&q=w_800,c_fill" class="card-img-top" alt="politic" />
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{description}</p>
            <a href="/" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
