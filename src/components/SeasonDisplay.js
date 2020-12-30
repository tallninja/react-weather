import React from 'react';
import './SeasonDisplay.css'

const seasonConfig = {
    summer: {
        text: "Whooo! it's summer time let's hit the beach...",
        iconName: "sun"
    },
    winter: {
        text: "Arrrgh! it's winter let,s just stay indoors...",
        iconName: "snowflake"
    }
}

const getSeason = (latitude, month) => {
    if(month > 2 && month < 9) {
        return latitude > 0 ? 'summer' : 'winter';
    } else {
        return latitude > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = props => {

    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season]

    return (
        <div className={`season-display ${season}`}>
            <i className={`${iconName} icon massive icon-right`}></i>
            <h1>{text}</h1>
            <i className={`${iconName} icon massive icon-left`}></i>
        </div>
            
    );
}

export default SeasonDisplay;