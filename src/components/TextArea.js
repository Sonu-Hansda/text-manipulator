import React from 'react'
import '../App.css'

export default function TextArea(props) {
    return (
        <div>
            <div className="mb-3 my-5">
                <textarea className={`form-control myform ${props.mode === 'dark'? 'blueColor':'whiteBgColor'} p-4`} id="textBox" rows="20" placeholder='Enter your text here...' value={props.val} onChange={props.onchange}></textarea>
                <p>Words : {props.val.length===0?0:props.val.split(" ").length} | Characters : {props.val.length}</p>
            </div>
        </div>
    )
}
