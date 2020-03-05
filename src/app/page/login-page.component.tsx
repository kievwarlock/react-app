import * as React from "react";
import {NavLink} from "react-router-dom";

export const LoginPage: React.FC = () => {

    return (
        <div className="home-page">
            <h1>Login page</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab corporis doloremque dolores earum eos et
                expedita hic ipsum iure perspiciatis, quia quis quisquam repudiandae sed sint tempora temporibus
                voluptas voluptatem.
            </p>
            <NavLink to="/">To Home page</NavLink>
            <br/>
            <NavLink to="/login">To Login page</NavLink>
        </div>
    );
};