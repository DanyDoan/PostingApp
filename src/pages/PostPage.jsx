import { useState, useEffect, useHi } from "react"

import { useParams, useNavigate } from "react-router-dom";

function PostPage({post, setPost}) {

    const navigate = useNavigate();
    const { id } = useParams();
    const API_URL = `http://localhost:3500/posts/${id}`

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const request = {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                }

                const response = await fetch(API_URL, request);
                if (!response.ok) throw Error("Error in fetching");

                const result = await response.json();
                setPost(result);

            } catch (e) {
                // alert(e);
            }
        }
        fetchPost();
    }, [])

    const deletePost = async () => {
        try {
            const request = {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            }

            const response = await fetch(API_URL, request);
            if (!response.ok) throw Error("Error in fetching");

            const result = await response.json();
            navigate("/");
        } catch (e) {
            alert(e);
        }
    }

    return (
        <main id="mainPostPage">
            <img src={post.imgUrl} className="postImage" />
            <p className="postTimestamp">Posted time: {post.postedTime}</p>
            <div className="postDetail">
                <h2>{post.title}</h2>
                <br/>
                <p>{post.content}</p>
                <button className="deleteButton" onClick={() => deletePost()}>
                    Delete
                </button>
            </div>

        </main>
    );
}

export default PostPage;