import {FaSearch} from "react-icons/fa"

function NavSearch({searchValue, setSearchValue, setSearchResult, postList}){

    const search = (e) => {
        e.preventDefault();

        const result = postList.filter((post) => post.title.toLowerCase().includes(searchValue.toLowerCase()))
        setSearchResult(result);
    }

    return(
        <form onSubmit={(e) => search(e)}>
            <input 
            type="text"
            value={searchValue}
            onChange={(e) => {setSearchValue(e.target.value); search(e)}}
            placeholder="Seach post"
            class="searchInput"/>
            <button type="submit" className="searchButton"><FaSearch/></button>
        </form>
    )
}

export default NavSearch;