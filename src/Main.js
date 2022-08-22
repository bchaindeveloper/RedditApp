import './Main.css';
import Feed from './Feed';
import React, {useState, useEffect, Children} from 'react';
import Article from './components/Article';


export default function Main() {
    return (
        <div className="main">
            <Feed />
        </div>
    )
}