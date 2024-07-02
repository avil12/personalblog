import { Link } from "react-router-dom";
import "./Post.css";


export default function Post({ img, category, title, desc }) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to={`/posts?cat=${category}`}>
              {category}
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
            {title}
          </Link>
        </span>
      </div>
      <p className="postDesc">
        {desc}
      </p>
    </div>
  );
}

