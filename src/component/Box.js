import React from 'react'

const Box = (props) => {
    return (
        <div className={props.className}>
            <h1>{props.title}</h1>
            <img className="item-img" src={props.item && props.item.img} alt="itemImage" />
            <h2>{props.result}</h2>
        </div>
    )
}

export default Box