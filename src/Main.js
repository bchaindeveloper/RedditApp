import React from "react"
import Header from './Header'
import './Main.css';
import Posts from './Posts.js';

export default function Main() {
    return (
        <div className="main">
            <Header>
            </Header>
            <Posts></Posts>

        </div>
    )
}