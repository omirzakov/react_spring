import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import news from "../../data/news";
import NewsItem from "./NewsItem";

const NewsList = () => {
    const { name } = useParams();
    const [data, setData] = useState([]);

    const newsItem = news.find((item) => {
        if (name === item.uri_name) {
            return true;
        }

        return false;
    });


    return (
        <>
            <div className="row">
                {
                    newsItem.sub_news.map((item, i) => (
                        <NewsItem item={item} key={i} />
                    ))
                }
            </div>
        </>
    );
}
export default NewsList;