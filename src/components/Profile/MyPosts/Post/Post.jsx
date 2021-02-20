import p from "../Post/Post.module.css";

const Post = () => {
  return (
    <div className={p.item}>
      <img
        src="https://chslovo.com/wp-content/uploads/2019/09/3-1.jpg"
        alt="avatar"
      />
      Post
      <div>
        <span>Like</span>
      </div>
    </div>
  );
};

export default Post;
