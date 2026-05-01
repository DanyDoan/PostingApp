import NavSearch from "./NavSearch.jsx"
import NavButton from "./NavButton.jsx";

function Nav({searchValue, setSearchValue, setSearchResult, postList}) {

    return (
        <nav>
            <NavSearch 
            searchValue={searchValue} setSearchValue={setSearchValue} 
            setSearchResult={setSearchResult} postList={postList}/>
            <div>
                <NavButton tag="Home"/>
                <NavButton tag="Post"/>
                <NavButton tag="About"/>
            </div>
        </nav>
    )
}

export default Nav;