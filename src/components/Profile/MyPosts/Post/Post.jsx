import p from "../Post/Post.module.css";
import React from "react";

const Post = (props) => {
    return (
        <div className={p.item}>
            <img
                src="https://chslovo.com/wp-content/uploads/2019/09/3-1.jpg"
                alt="avatar"
            />
            <div className={p.content}>
                <div className={p.text}>
                    {props.message}
                </div>
                <div className={p.likes}>
                    Likes: {props.likes}
                </div>
            </div>
        </div>
    );
};

export default Post;
