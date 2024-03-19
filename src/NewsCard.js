import React, { useContext } from "react";

const NewsCard = ({
  title,
  author,
  urlToImage,
  source,
  content,
  description,
  publishedAt,
  url,
}) => {
  return (
    <>
      <div className=" w-96 m-3 p-3 border-2 border-gray-400 shadow-xl bg-[#fffbeb] transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-100  duration-100 rounded-lg">
        <img className="rounded-lg" src={urlToImage} alt="image" />
        <h2 className="p-3 text-center font-bold text-2xl">{title}</h2>
        <h3 className="p-2 font-semibold ">Author: {author}</h3>
        <h3 className="p-2 font-semibold ">Published At: {publishedAt}</h3>

        <h1 className="p-2 font-bold center">{source.name} </h1>

        <h3 className="p-2 font-semibold ">{description}</h3>
        <h4 className="p-2 font-semibold ">{content}</h4>
        <a target="_blank" href={url}>
          continue reading...
        </a>
      </div>
    </>
  );
};

export default NewsCard;
