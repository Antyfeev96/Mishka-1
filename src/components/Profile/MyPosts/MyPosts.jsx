import p from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={p.posts}>
        <Post message='Hello There!' likes='15' />
        <Post message='JavaScript React' likes='30' />
        <Post message='Pisbku dash ebatb' likes='228' />
      </div>
    </div>
  );
};

export default MyPosts;
