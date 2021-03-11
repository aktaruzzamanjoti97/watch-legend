import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetails.css';
import Male from '../../images/Male-Female/male.png';
import Female from '../../images/Male-Female/female.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faFutbol, faMars, faPodcast } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import facebookImage from '../../images/Icon/Facebook.png';
import youTubeImage from '../../images/Icon/YouTube.png';
import twitterImage from '../../images/Icon/Twitter.png';


const TeamDetails = () => {
    const { teamId } = useParams();

    const [details, setDetails] = useState({});

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data.teams[0]))
    }, []);

    const { strTeamBanner, strTeam, intFormedYear, strCountry, strGender, strTeamBadge, strDescriptionEN } = details;


   
    const textStyle ={
       marginLeft: '15px'     
    }


    return (
        

        <div style={{overflow: 'hidden'}} className='container'>
            

            <div className='banner-img' style={{ backgroundImage: `url(${strTeamBanner})` }}>
                <div className='logo-style'>
                    <img className='img-fluid' src={strTeamBadge} alt="" />
                </div>
            </div>



            <div className='detail-box py-1'>
                <div className='row m-5 py-5 details-style'>
                    <div className='col-md-5 my-4'>
                        <h1>{strTeam}</h1><br/>
                        <h6 style={textStyle}><FontAwesomeIcon icon={faPodcast} /> Founded: {intFormedYear}</h6>
                        <h6 style={textStyle}><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</h6>
                        <p style={textStyle}><FontAwesomeIcon icon={faFutbol} /> Sport Type: Football</p>
                        <h6 style={textStyle}><FontAwesomeIcon icon={faMars} /> Gender: {strGender}</h6>
                    </div>
                    <div className='col-md-7'>
                        <div className='gender-box'>
                            {
                                strGender === "Male" ? <img className="gender-image" src={Male} alt="" /> : <img className="gender-image" src={Female} alt="" />
                            }
                        </div>
                    </div>
                </div>

                <div className='p-5 m-5'>
                    <p>{strDescriptionEN}</p>
                </div>


                <div className='icons'>
                    <div>
                        <img src={facebookImage} alt="" />
                    </div>
                    <div>
                        <img src={twitterImage} alt="" />
                    </div>
                    <div>
                        <img src={youTubeImage} alt="" />
                    </div>

                </div>

            </div>
        </div>
    );
};

export default TeamDetails;