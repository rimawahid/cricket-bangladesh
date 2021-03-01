import React from 'react';
import './Details.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Details = (props) => {
   // console.log(props)
    const {img,name,age,role,salary} = props.player;
    return (
        <div className="detail">
            <div className="player">
                <img src={img} alt=""/>
            </div>
            <div className="detail-info">
            <h2 className="name">{name}</h2>
            <p>Age: {age}</p>
            <p>Playing role : { role}</p>
            <p>Salary : ${salary}</p>
            <button className="btn btn-outline-primary add-btn" onClick={()=>props.handleAddPlayers(props.player)}> <FontAwesomeIcon icon={faPlus} /><span className="icon">Add Player</span></button>
            </div>
            
        </div>
    );
};

export default Details;