import s from './News.module.scss';
import NewsItem from "./News-item/news-item";
import React from "react";

const News = () => {
    return(
        <div className={s.news}>
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
        </div>
    )
}

export default News;