import React from 'react'

export default function Button(props) {
  return (
    <button type="button" className={`btn ${props.color} mx-2 btn-lg px-5 ${props.customClass}`} onClick={props.func}>{props.title}</button>
  )
}
