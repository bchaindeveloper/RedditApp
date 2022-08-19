import React from "react";
import './SideNav.css';
export default function SideNav() {
    const menus = [
        { to: '/r/popular', text: "Popular"},
        { to: '/r/all', text: "All"},
        { to: '/r/random', text: "Random"}
    ]
    const subreddits = [
        "askreddit",
        "worldnews",
        "videos",
        "funny",
        "todayilearned",
        "pics",
        "gaming",
        "movies",
        "news",
        "gits",
        "aww",
        "mildlyinteresting",
        "showerthoughts",
        "television",
        "joes",
        "science",
        "soccer",
        "internetisbeautiful",
        "dataisbeautiful"
    ]
    return (
        <div className="sidenav">
            <div className="sidenav_logo">
                <img className="img1" src="/images/reddit.png" alt="" />
                <i className="fas fa-search"></i>
            </div>
            <div className="sidenav_search">
                <input type="text" name="search" placeholder="Search" />
            </div>
            <div className="sidenav_link">
                <ul className="sidenav_menu">
                    {menus.map(menu => (
                        <li><a href="{menu.to}">{menu.text}</a></li>
                    ))}
                </ul>
                <br />
                <ul className="sidenav_subreddit">
                    {subreddits.map(subreddit => (
                        <li><a href={'/r/${subreddit}'}>{subreddit}</a></li>
                    ))}
                </ul>
            </div>
            <br>
            </br>
        </div>

    )
}