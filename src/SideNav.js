import React from "react";
import './SideNav.css';
export default function SideNav() {
    const menus = [
    ]
    const subreddits = [
        <a href="https://www.reddit.com/search/?q=blockchain" alt=''>Blockchain</a>,
        <a href="https://www.reddit.com/search/?q=crypto" alt=''>Crypto</a>,
        <a href="https://www.reddit.com/search/?q=web%203" alt=''>Web3</a>,
        <a href="https://www.reddit.com/search/?q=bitcoin" alt=''>Bitcoin</a>,
        <a href="https://www.reddit.com/search/?q=ethereum" alt=''>Ethereum</a>,
        <a href="https://www.reddit.com/search/?q=trading" alt=''>Trading</a>,

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