import React from 'react'
import '../css/OutputBox.css'
import Posts from './Posts'
export default function OutputBox(props) {


    return (
        <div className="postContainer">
            <div className="comments">Comments</div>
            <div id="posts">
                <Posts temp={props}/>
            </div>
        </div>
    )
}
