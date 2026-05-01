import {Link} from "react-router-dom"

function NavButton({tag}){


    return(
        <button >
            <Link to={tag.toLowerCase()} className="navLink">{tag}</Link>
        </button>
    )
}

export default NavButton;