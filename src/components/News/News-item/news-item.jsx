import './news-item.scss'
import React from "react";

const NewsItem = () => {
    return (
        <div className="news-item">
            <img src="https://assets.entrepreneur.com/content/3x2/2000/20180703190744-rollsafe-meme.jpeg"
                 alt="news-item__img" className="news-item__img"/>
            <div className="news-item__info">
                <div className="news-item__date">
                    <span>22 February 2021,</span>
                    <span> 15:05</span>
                </div>
                <div className="news-item__content">
                    You can't fail a junior React developer interview if you don't show up for it.
                </div>
            </div>
        </div>
    )
}

export default NewsItem;