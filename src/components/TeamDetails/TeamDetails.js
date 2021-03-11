import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetails.css';
import Male from '../../images/Male-Female/male.png';
import Female from '../../images/Male-Female/female.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faFutbol, faMars, faPodcast } from '@fortawesome/free-solid-svg-icons';
import facebookImage from '../../images/Icon/Facebook.png';
import youTubeImage from '../../images/Icon/YouTube.png';
import twitterImage from '../../images/Icon/Twitter.png';
import { Link } from 'react-router-dom';


const TeamDetails = () => {
    const { teamId } = useParams();

    const [details, setDetails] = useState({});

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data.teams[0]))
    }, [teamId]);

    const { strTeamBanner, strTeam, intFormedYear, strCountry, strGender, strTeamBadge, strDescriptionEN } = details;



    const textStyle = {
        marginLeft: '15px'
    }


    return (


        <div style={{ overflow: 'hidden' }} className='container'>


            <div className='banner-img' style={{ backgroundImage: `url(${strTeamBanner})` }}>
                <div className='logo-style'>
                    <img className='img-fluid' src={strTeamBadge} alt="" />
                </div>
            </div>



            <div className='detail-box py-1'>
                <div className='row m-5 py-5 details-style'>
                    <div className='col-md-5 my-4'>
                        <h1>{strTeam}</h1><br />
                        <h6 style={textStyle}><FontAwesomeIcon icon={faPodcast} /> Founded: {intFormedYear}</h6>
                        <h6 style={textStyle}><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</h6>
                        <p style={textStyle}><FontAwesomeIcon icon={faFutbol} /> Sport Type: Football</p>
                        <h6 style={textStyle}><FontAwesomeIcon icon={faMars} /> Gender: {strGender}</h6>
                    </div>
                    <div className='col-md-7'>
                        <div className='gender-box'>
                            {
                                strGender === "Female Male" ? <img className="gender-image" src={Female} alt="" /> : <img className="gender-image" src={Male} alt="" />
                            }
                        </div>
                    </div>
                </div>

                <div className='p-5 m-5'>
                    <p>{strDescriptionEN}</p>
                </div>


                <div className='icons'>
                    <div>
                        <Link to="/facebook">
                            <img src={facebookImage} alt="" />
                        </Link>

                    </div>
                    <div>
                        <Link to="/twitter">
                            <img src={twitterImage} alt="" />
                        </Link>

                    </div>
                    <div>
                        <Link to="/youTube">
                            <img src={youTubeImage} alt="" />
                        </Link>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default TeamDetails;