import React from 'react'
import '../css/OutputBox.css'
export default function OutputBox() {

    const createPost = () => {
        let posts = React.createElement('div', {}, 'Testing')
        document.getElementById('posts')
    }
    return (
        <div className="postContainer">
            <div className="comments">Comments</div>
            <div id="posts"></div>
        </div>
    )
}
