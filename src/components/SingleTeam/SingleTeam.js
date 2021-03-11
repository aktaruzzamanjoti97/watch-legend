import React from 'react';
import { Button } from 'react-bootstrap';
import './SingleTeam.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

const SingleTeam = (props) => {
    const { strTeamBadge, strTeam, idTeam } = props.team;

    const badgeStyle = {
        width: '200px',
        height: '200px'
    }

    return (
        <div className=' col-md-4 mt-2 p-1 text-center'>
            <div className='card-box m-4'>
                <img style={badgeStyle} src={strTeamBadge} alt="" />
                <h1>{strTeam}</h1>
                <p>Sports Type: Football</p>
                <Button as={Link} to={`/team/${idTeam}`} variant="success">Explore <FontAwesomeIcon icon={faSignInAlt} /></Button>
            </div>
        </div>
    );
};

export default SingleTeam;