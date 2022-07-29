import React from "react";
import "./card.styles.css";
export const Card = props => {
    // console.log(props);
    return(
        <div className="card-container">
            <img alt="monster" src={`https://robohash.org/${props.monster.id}1?set=set2&size=100x100`} />
            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </div>
    )
}