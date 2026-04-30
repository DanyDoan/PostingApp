import { useState, useEffect } from "react"

function Post() {

    const API_URL = "http://localhost:3500/posts"

    const toDay = new Date();

    const [post, setPost] = useState({
        id: 0,
        title: "",
        content: "",
        imgUrl: "./img/news.png",
        postedTime: toDay.getDate() + "/" + toDay.getMonth() + "/" + toDay.getFullYear(),
    })

    const uploadPost = async (e) => {
        e.preventDefault();

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
        } catch (e) {
            alert(e);
        }

        setPost({
            id: 0,
            title: "",
            content: "",
            imgUrl: "./img/news.png",
            postedTime: toDay.getDate() + "/" + toDay.getMonth() + "/" + toDay.getFullYear(),
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
                <br></br>
                <textarea
                    value={post.content}
                    required
                    onChange={(e) => setPost({ ...post, content: e.target.value })}
                />

                <button type="submit">Submit</button>
            </form>
        </main>
    )
}

export default Post;