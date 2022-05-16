import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component'


const News = (props) => {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalArticles, setTotalArticles] = useState(0);
  

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsdata.io/api/1/news?apiKey=${props.apiKey}&country=${props.country}&category=${props.category}&Page=${page}`
    
    // const url =
    // `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    // setArticles(parsedData.articles);
    setArticles(parsedData.results);
    setTotalArticles(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  }

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - News App`;
    updateNews();
  }, []);


  // const handlePrevClick = async () => {
  //   setPage(page-1);
  //   this.updateNews();
  // };

  // const handleNextClick = async () => {
  //   setPage(page+1);
  //   updateNews();
  // };

  const fetchMoreData = async () => {
    const url = `https://newsdata.io/api/1/news?apiKey=${props.apiKey}&country=${props.country}&category=${props.category}&Page=${page+1}`
    // const url =
    // `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1);
    let data = await fetch(url);
    let parsedData = await data.json();
    // setArticles(articles.concat(parsedData.articles));
    setArticles(articles.concat(parsedData.results));
    setTotalArticles(parsedData.totalResults);
  };

  return (
    <>
      <h1 className="fw-bold text-center my-4">News App - Top {capitalizeFirstLetter(props.category)} Headlines</h1>

      {loading && <Spinner/>}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalArticles}
        loader={<Spinner/>}
      >
          <div className="container">
              <div className="row">
                  {articles.map((element) => {
                      return (
                      <div className="col-lg-4 col-md-6 my-2" key={element.link}>
                          <NewsItem
                          title={element.title ? element.title.slice(0, 45) : ""}
                          description={element.description ? element.description.slice(0, 88) : ""}

                          // imageurl={element.urlToImage? element.urlToImage: "https://static01.nyt.com/newsgraphics/images/icons/defaultPromoCrop.png"}
                          // newsurl={element.url}
                          // author={element.author ? element.author : "Unknown"}
                          // date={element.publishedAt ? element.publishedAt : "Unknown"}
                          // source={element.source.name ? element.source.name : "Unknown"}

                          imageurl={element.image_url ? element.image_url: "https://images.edexlive.com/uploads/user/imagelibrary/2021/3/8/w600X390/College_Textbooks.jpg"}
                          newsurl={element.link}
                          author={element.creator ? element.creator : "Unknown"}
                          date={element.pubDate ? element.pubDate : "Unknown"}
                          source={element.source_id ? element.source_id : "Unknown"}
                          />
                      </div>
                      );
                  })}
              </div>
          </div>
      </InfiniteScroll>

    </>
  );
}

News.defaultProps ={
  country: "in",
  pageSize: 9,
  category: "general"
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}

export default News;

