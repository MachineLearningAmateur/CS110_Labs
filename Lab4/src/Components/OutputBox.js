import React from 'react'
import '../css/OutputBox.css'
import Post from './Post'

export default function OutputBox() {
    return (
        <div className="postContainer">
            <div className="comments">Comments</div>
            <div id="posts">
                <Post/>
            </div>
        </div>
    )
}
