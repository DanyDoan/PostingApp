import { Link } from "react-router-dom"

function PostLine({ id, title, content, postedTime }) {


    return (
        <Link to={`/post/${id}`} className="postLine" key={id}>
            <h2>{title.length <= 30 ? title.toUpperCase(): `${title.slice(0, title.indexOf(" ", 30))}...`}</h2>
            <p>{content.length <= 180 ? content: `${content.slice(0, content.indexOf(" ", 180))}...`}</p>
            <p className="timestamp">Posted time: {postedTime}</p>
        </Link>
    )
}

export default PostLine;