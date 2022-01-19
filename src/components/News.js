import React, { useEffect, useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

const News = (props) => {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  
  
useEffect(() =>{
  updateNews();
},[])

  /*async componentDidMount() {
    console.log("cdm");

    let data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${this.apiKey}&page=1&pageSize=${props.pageSize}`
    );
    this.setState({ loading: true });
    let parsedData = await data.json();
    /*console.log(parsedData)
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.updateNews();
  };*/

  const updateNews = async () =>{
        props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    props.setProgress(70);
    /*console.log(parsedData)*/
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)

    props.setProgress(100);
  };
  

  const handleNextClick = async () => {
    props.setProgress(10);
    console.log("Next");   
    setPage(page + 1) 
    let url = `https://newsapi.org/v2/top-headlines?country=${
    props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page
    }&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles)
    
    setLoading(false)
    
    props.setProgress(100);
    {/*this.setState({
      page: this.state.page + 1
    });
  this.updateNews();*/}
  };

  const handlePrevClick = async () => {
        props.setProgress(10);
    console.log("Prevous");
    setPage(page - 1)
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page
    }&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    /*console.log(parsedData)*/
    
    setArticles(parsedData.articles)
    
    setLoading(false)

    
    props.setProgress(100);
    {/*this.setState({  
      page: this.state.page - 1, 
    });
  this.updateNews();*/}
  };

 
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ margin: "35px 0" }}>
          NewsMonkey Top Headlines
        </h1>
        {loading && <Spinner />}
        <div className="row my-4">
          {!loading &&
            articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    source={element.source.name}
                    author={element.author}
                    date={element.publishedAt}
                    title={element.title}
                    description={element.description}
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={page <= 1}
            type="button"
            className="btn btn-lg btn-dark d-flex justify-content-between"
            onClick={handlePrevClick}
          >
            {"<<- "}Previous
          </button>
          <button
            /*back up plan to diable the button */
            disabled={
              Math.ceil(totalResults/props.pageSize) < page + 1
            }
            type="button"
            className="btn btn-lg btn-dark d-flex justify-content-between"
            onClick={handleNextClick}
          >
            Next{" ->>"}
          </button>
        </div>
      </div>
    );
  
}

News.defaultPops = {
  country: "in",
  pageSize: 9,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;