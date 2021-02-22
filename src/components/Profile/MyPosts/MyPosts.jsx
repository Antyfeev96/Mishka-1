import p from "./MyPosts.module.scss";
import Post from "./Post/Post";
import React from "react";

const MyPosts = () => {
    return (
        <div className={p.posts}>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                <Post message='Hello There!' likes='15'/>
                <Post message='JavaScript React' likes='30'/>
                <Post message='Pisbku dash ebatb' likes='228'/>
            </div>
        </div>
    );
};

export default MyPosts;
