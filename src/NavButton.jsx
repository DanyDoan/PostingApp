import {Link} from "react-router-dom"

function NavButton({tag}){


    return(
        <button className="navButton">
            <Link to={tag.toLowerCase()} style={{textDecoration: "none", color: "black"}}>{tag}</Link>
        </button>
    )
}

export default NavButton;