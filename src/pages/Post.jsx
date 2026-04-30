import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom";
import { BiLogoTripAdvisor } from "react-icons/bi";

function Post({ post, setPost, toDay }) {

    const API_URL = "http://localhost:3500/posts"

    const [status, setStatus] = useState("idle");

    const navigate = useNavigate();

    const uploadPost = async (e) => {
        e.preventDefault();

        setStatus("uploading");
        try {
            const request = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(post)
            }

            const response = await fetch(API_URL, request);
            const result = await response.json();
                    const timer = setTimeout(() => { setStatus("success") }, 2000);

        } catch (e) {
            setStatus("Connection failed.");
        }

        setPost({
            id: 0,
            title: "",
            content: "",
            imgUrl: "/src/img/news.png",
            postedTime: toDay,
        })

    }

    return (
        <main id="mainPost">
            <h1>Something new happens?</h1>
            <form onSubmit={(e) => uploadPost(e)}>
                <input
                    type="text"
                    value={post.title}
                    required
                    onChange={(e) => setPost({ ...post, title: e.target.value })}
                />
                <label>
                    Title
                </label>
                <textarea
                    value={post.content}
                    required
                    onChange={(e) => setPost({ ...post, content: e.target.value })}
                    placeholder="content"
                />
                <button type="submit" className="postButton">Submit</button>
            </form>
            {status === "idle" && <h3>{toDay}</h3>}
            {status === "uploading" && <h3>Uploading post...</h3>}
            {status === "success" && <h3 style={{ color: "green" }}>Upload success</h3>}
            {status === "Connection failed." && <h3 style={{ color: "red" }}>{status}</h3>}
        </main>
    )
}

export default Post;