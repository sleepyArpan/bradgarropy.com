import React from "react"
import {Link} from "gatsby"
import Logo from "./Logo"
import "../scss/Navigation.scss"

const Navigation = () => {
    return (
        <div className="navigation">
            <Link to="/" aria-label="bg">
                <Logo/>
            </Link>
        </div>
    )
}

export default Navigation
