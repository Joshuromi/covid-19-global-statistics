import React from 'react';
import Moment from 'react-moment';

const Date = (props) => {
    return (
        <h6 className="date">
          <small>Last updated: 
            <Moment format="DD/MM/YYYY; HH:mm A">{props.date}</Moment>
          </small>
        </h6>
    )
}

export default Date;