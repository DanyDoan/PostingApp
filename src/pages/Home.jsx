import { useState, useEffect } from "react"

import PostList from "../PostList.jsx"
import LoadingMeme from "../LoadingMeme.jsx"

import "../assets/Home.css"
function Home({ postList, isLoading, isFail }) {

    return (
        <main id="mainHome">
            {isLoading && <LoadingMeme />}
            {!isLoading && isFail && <>
                <p style={{ color: "red" }}>Connection failed </p>
                <p>Please open another terminal, change working directory to this project and try <bold style={{color: "red"}}>"npx json-server -p 3500 data/post.json"</bold></p>
            </>}
            {!isLoading && <PostList postList={postList} />}
        </main>
    )
}

export default Home;