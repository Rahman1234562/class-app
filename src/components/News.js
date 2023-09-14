import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  article = [
    {
      source: { id: "cnn", name: "CNN" },
      author: "",
      title:
        "Video: SE Cupp on Donald Trump suggesting he'd direct indictment of political opponent if reelected | CNN Politics",
      description:
        "CNN political commentator SE Cupp reacts to a speech given by former President Donald Trump in South Dakota.",
      url: "https://www.cnn.com/videos/politics/2023/09/11/donald-trump-speech-cupp-lead-vpx.cnn",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230911204339-se-cupp.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-09-12T00:55:53Z",
      content: null,
    },

    {
      source: { id: "newsweek", name: "Newsweek" },
      author: "Mark Davis",
      title: "Newsweek",
      description:
        "Newsweek provides in-depth analysis, news and opinion about international issues, technology, business, culture and politics.",
      url: "https://www.newsweek.com/",
      urlToImage:
        "https://d.newsweek.com/en/full/2202468/special-presidential-envoy-climate-john-kerry.jpg",
      publishedAt: "2023-03-01T12:07:28.8517009Z",
      content: null,
    },


    {
      source: { id: "usa-today", name: "USA Today" },
      author: null,
      title: "Daily Briefing",
      description:
        "The day's top stories, from sports to movies to politics to world events.",
      url: "https://profile.usatoday.com/newsletters/daily-briefing/",
      urlToImage:
        "https://profile.usatoday.com/newsletters/resources/usat/property/usatoday/newsletter-thumbs/8872UT-E-NLETTER02@2x.jpg",
      publishedAt: "2021-08-15T15:35:07+00:00",
      content:
        "The day's top stories, from sports to movies to politics to world events.",
    },
    
    {
      source: { id: "newsweek", name: "Newsweek" },
      author: "Mark Davis",
      title: "Newsweek",
      description:
        "Newsweek provides in-depth analysis, news and opinion about international issues, technology, business, culture and politics.",
      url: "https://www.newsweek.com/",
      urlToImage:
        "https://d.newsweek.com/en/full/2202468/special-presidential-envoy-climate-john-kerry.jpg",
      publishedAt: "2023-03-01T12:07:28.8517009Z",
      content: null,
    },

  ];
  constructor() {
    super();
    console.log("i am a news compnents");
    this.state = {
      article: this.article,
      loading: false,
    };
  }

  async componentDidMount(){
    console.log("i am mount component")
    // let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=97833aa3b9d444c889ebdf43d3018b15";
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({article: parsedData.article})
  }
  render() {
  
    return (
    
      <div className="container my-3">
        <h2>Daily-News Top-Headlines</h2>
        <div className="row">
          {this.state.article.map((element) => {
            console.log(element.url)
            return (
              <div className="col md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={element.description ? element.description.slice(0, 88) : ""}
                  imageurl={element.urlToImage} newsUrl= {element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
