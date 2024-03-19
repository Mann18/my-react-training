// import React, { useEffect, useState } from "react";
// import NewsCard from "./NewsCard";
// import Shimmer from "./Shimmer";
// import Navigation from "./Navigation";
// import Footer from "./Footer";

// const API_KEY = "f6dc7b36bf264ff88b88e8e36c5d9c9d";
// const API_KEY1 = "18bfacd0da8b4761a2e1e591d8954862";

// const BASE_URL = "https://newsapi.org/v2/everything";
// const DEFAULT_QUERY = "tesla";

// const NewsPage = () => {
//   const [news, setNews] = useState([]);
//   const [searchQuery, setSearchQuery] = useState(DEFAULT_QUERY);

//   useEffect(() => {
//     fetchNews();
//   }, [searchQuery]);

//   const fetchNews = async () => {
//     const url = `${BASE_URL}?q=${searchQuery}&apiKey=${API_KEY1}`;
//     const data = await fetch(url);
//     const json = await data.json();
//     setNews(json.articles);
//     console.log(url);
//   };

//   const handleSearchInputChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   return news.length === 0 ? (
//     <Shimmer count={10} />
//   ) : (
//     <>
//       <Navigation />
//       <input
//         type="text"
//         value={searchQuery}
//         onChange={handleSearchInputChange}
//         className="p-1 mx-2 md:mx-16 my-2 md:w-80 rounded-lg border-2 border-gray-400"
//         placeholder="Enter a search term..."
//       />
//       <div className="flex flex-wrap my-2 md:ml-12 justify-around">
//         {news.map((article, i) => (
//           <NewsCard {...article} key={i} />
//         ))}
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default NewsPage;
import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import Shimmer from "./Shimmer";
import Navigation from "./Navigation";
import Footer from "./Footer";

const API_KEYS = [
  "18bfacd0da8b4761a2e1e591d8954862",
  "7ff184b3b281425ea9820eeeba33fb19",
  "f6dc7b36bf264ff88b88e8e36c5d9c9d",
];

const BASE_URL = "https://newsapi.org/v2/everything";
const DEFAULT_QUERY = "tesla";

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [apiCallCount, setApiCallCount] = useState(0);
  const [apiKeyIndex, setApiKeyIndex] = useState(0);

  useEffect(() => {
    fetchNews();
  }, []);

  useEffect(() => {
    // Fetch news only if searchQuery is not empty
    if (searchQuery.trim() !== "") {
      fetchNews();
    }
  }, [searchQuery]);

  const fetchNews = async () => {
    try {
      const apiKey = API_KEYS[apiKeyIndex];
      const url = `${BASE_URL}?q=${
        searchQuery || DEFAULT_QUERY
      }&apiKey=${apiKey}`;
      const data = await fetch(url);
      const json = await data.json();

      if (json.articles) {
        setNews(json.articles);
        setApiCallCount(apiCallCount + 1);

        // Switch API key after 100 calls
        if (apiCallCount >= 99 && apiKeyIndex < API_KEYS.length - 1) {
          setApiKeyIndex(apiKeyIndex + 1);
          setApiCallCount(0);
        }
      } else {
        setNews([]);
      }
    } catch (error) {
      console.error("Error fetching news:", error);
      setNews([]);
    }
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <Navigation />
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchInputChange}
        className="p-1 mx-2 md:mx-16 my-2 md:w-80 rounded-lg border-2 border-gray-400"
        placeholder="Enter a search term..."
      />
      <div className="flex flex-wrap my-2 md:ml-12 justify-around">
        {news.length === 0 ? (
          <Shimmer count={10} />
        ) : (
          news.map((article, i) => <NewsCard {...article} key={i} />)
        )}
      </div>
      <Footer />
    </>
  );
};

export default NewsPage;
