import React from 'react';



const Cards = (props) => {
    return (
        <div className='card--container'>
            <img src={props.imageUrl} className="card--image" />
            <div className='card--details'>
                <div className='card--location'>
                    <img src="../images/cursor.png" className="card--cursor" />                    
                    <h4>{props.location}</h4>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <h5>{props.startDate} - {props.endDate}</h5>
                <p>{props.description}</p>
            </div>
        </div>
    );
};

export default Cards;

