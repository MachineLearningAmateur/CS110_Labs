import React, { Component } from 'react'
import '../css/InputBox.css'

export class InputBox extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="container">
                <div className="post">
                    New Post
                </div>
                <div className="content">
                    <input className="name">
                    </input>
                    <textarea className="text">
                    </textarea>
                </div>
            </div>
        )
    }
}

export default InputBox