import { useState, useEffect } from "react"

import PostList from "../PostList.jsx"
function Home() {

    const API_URL = "http://localhost:3500/posts"

    const [postList, setPostList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isFail, setIsFail] = useState(false);

    useEffect(() => {
        getPostList();
    }, [])
    const getPostList = async () => {
        try {
            const request = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            }

            const response = await fetch(API_URL, request);
            if (!response.ok) throw Error("Fetch failed");
            const result = await response.json();
            setPostList(result);
            setIsFail(false);
        } catch (e) {
            setIsFail(true);
            alert(e.message)
        } finally {
            setIsLoading(false);

        }
    }

    return (
        <main>
            {isLoading && <p>Connecting to server...</p>}
            {!isLoading && isFail && <p>Connection failed</p>}
            {!isLoading && <PostList postList={postList} />}
        </main>
    )
}

export default Home;