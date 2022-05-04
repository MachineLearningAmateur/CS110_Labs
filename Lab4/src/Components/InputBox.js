
import '../css/InputBox.css'
import React, {useState} from 'react'

export default function InputBox() {
    const [name, updateName] = useState("");
    const [text, updateText] = useState("");
    //useState is used to define functions that can be used to set the state | const [variable, function] = useState("default value")
    const submit = (event) => {
        event.preventDefault();
        updateName("")
        updateText("")
        console.log(name)
        console.log(text)
    }

    return (
        <form className="container" onSubmit={submit}>
            <div className="post">
                New Post
            </div>
            <div className="content">
                <input className="name" value={name} onChange={(evt)=> {updateName(evt.target.value)}}>
                </input>
                <textarea className="text" value={text} onChange={(evt)=> {updateText(evt.target.value)}}>
                </textarea>
                <button className="submit">Submit</button>
            </div>
        </form>
    )
}


