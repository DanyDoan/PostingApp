import PostLine from "./PostLine.jsx"

import "./assets/Post.css"
function PostList({postList}){

    return(
        <div id="postList">
            {postList.map((post) => (
                <PostLine id={post.id} title={post.title} content={post.content} postedTime={post.postedTime}/>
            ))}
        </div>
    )
}

export default PostList;