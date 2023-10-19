import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./spinner/Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const newsTitle = (s) => {
    if (s === null) {
      s = "...";
    } else if (s.length <= 45) {
      return s;
    } else {
      s = s.slice(0, 45) + "...";
      return s;
    }
  };
  const newsDesc = (s) => {
    if (s === null) {
      s = "...";
    } else if (s.length <= 88) {
      return s;
    } else {
      s = s.slice(0, 88) + "...";
      return s;
    }
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const [article, setArticle] = useState([]);
  const [page, setPage] = useState(1);
  const [totalNews, setTotalNews] = useState(0);

  const updateNews = async (pageNo) => {
    let url1 = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${pageNo}&pageSize=20`;
    props.setProgress(10);
    let data = await fetch(url1);
    props.setProgress(40);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticle(parsedData.articles);
    setTotalNews(parsedData.totalResults);
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(
      props.category
      )} - E-News - News for free!`;
      updateNews(page);
      // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    let url1 = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=20`;
    let data = await fetch(url1);
    let parsedData = await data.json();
    setArticle(article.concat(parsedData.articles));
    setTotalNews(parsedData.totalResults);
    setPage(page + 1);
  };

  return (
    <>
      <strong>
        <h2 className="text-center" style={{ marginTop: "9rem" }}>
          E-News - Top {capitalizeFirstLetter(props.category)} Headlines
        </h2>
      </strong>
      <div className="container">
        <InfiniteScroll
          dataLength={article.length}
          next={fetchMoreData}
          hasMore={article.length !== totalNews}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {article.map((element, ind) => {
                return (
                  <div className="col-md-4 my-3" key={element.url + `${ind}--`}>
                    <NewsItem
                      title={newsTitle(element.title)}
                      description={newsDesc(element.description)}
                      imageUrl={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_1280.jpg"
                      }
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};

News.defaultProps = {
  country: "in",
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
};

export default News;
