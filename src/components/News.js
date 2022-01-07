import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: "news24",
        name: "News24",
      },
      author: "Khanyiso Tshwaku",
      title:
        "'Dean's a tough cookie who loves Test cricket,' says SA batting coach as big day looms",
      description:
        "Dean Elgar now stands between South Africa losing their first Test series at home against India and taking the series all-square to Newlands next week.",
      url: "https://www.news24.com/sport/Cricket/Proteas/deans-a-tough-cookie-who-loves-test-cricket-says-sa-batting-coach-as-big-day-looms-20220105",
      urlToImage:
        "https://cdn.24.co.za/files/Cms/General/d/1774/62d251c90fe34f63845531b6b26919a5.jpg",
      publishedAt: "2022-01-05T20:04:49+00:00",
      content:
        "<ul><li>Proteas batting consultant Justin Sammonds said Dean Elgar's wicket holds to the key to how they manage their chase on day four of the second Test against India.</li><li>The Proteas closed da… [+2828 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      description:
        "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      publishedAt: "2020-04-27T11:41:47Z",
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      description:
        "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      publishedAt: "2020-03-30T15:26:05Z",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    },
  ];

  constructor() {
    super();
    /*console.log("Hello, I am constructor.");   just to show the working of constructor*/  

    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  async componentDidMount(){
    console.log("cdm");
    let url = "https://newsapi.org/v2/top-headlines?country=in&apikey=dbe57b028aeb41e285a226a94865f7a7";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData)
    this.setState({articles: parsedData.articles});
    }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey Top Headlines</h2>
        <div className="row my-4">
          {this.state.articles.map((element) => {
            return <div className="col-md-3" key={element.url}>
              <NewsItem                
                title={element.title?element.title.slice(0 ,45):""}
                description={element.description?element.description.slice(0 ,90):""}
                imgUrl={element.urlToImage}
                newsUrl={element.url}
              />
            </div>;
          })}
        </div>
      </div>
    );
  }
}

export default News;
