import NavSearch from "./NavSearch.jsx"
import NavButton from "./NavButton.jsx";

function Nav() {

    return (
        <nav>
            <NavSearch />
            <div>
                <NavButton tag="Home" />
                <NavButton tag="Post" />
                <NavButton tag="About" />
            </div>
        </nav>
    )
}

export default Nav;