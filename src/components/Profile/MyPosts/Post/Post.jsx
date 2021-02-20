import p from "../Post/Post.module.css";

const Post = (props) => {
  return (
    <div className={p.item}>
      <img
        src="https://chslovo.com/wp-content/uploads/2019/09/3-1.jpg"
        alt="avatar"
      />
      {props.message}
      <div>
        <span>Likes: {props.likes}</span>
      </div>
    </div>
  );
};

export default Post;
