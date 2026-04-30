
function PostLine({title, content, postedTime}){
    return(
        <div className="postLine">
            <h2>{title.toUpperCase()}</h2>
            <p>Content: {content}</p>
            <p className="timestamp">Posted time: {postedTime}</p>
        </div>
    )
}

export default PostLine;