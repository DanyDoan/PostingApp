import { useState, useEffect } from "react"

import PostList from "../PostList.jsx"
import LoadingMeme from "../LoadingMeme.jsx"

import "../assets/Home.css"
function Home({postList, isLoading, isFail}) {

    return (
        <main id="mainHome">
            {isLoading && <LoadingMeme/>}
            {!isLoading && isFail && <p>Connection failed</p>}
            {!isLoading && <PostList postList={postList} />}
        </main>
    )
}

export default Home;