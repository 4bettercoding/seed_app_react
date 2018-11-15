import {Link} from "react-router-dom";
import React from "react";

const Main = () => {
    return (
        <div>
            <Link to="/">
                <button>home</button>
            </Link>
            <Link to="/about">
                <button>About</button>
            </Link>
            <Link to="/code">
                <button>code</button>
            </Link>
            <Link to="/contact">
                <button>contact</button>
            </Link>
            <Link to="/info">
                <button>info</button>
            </Link>
            <Link to="/TodoList">
                <button>todo list</button>
            </Link>
        </div>
    );
};

export { Main }