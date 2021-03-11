import React, { useEffect, useState } from 'react';
import NavShow from '../NavShow/NavShow';
import SingleTeam from '../SingleTeam/SingleTeam';
import './AllTeam.css';

const AllTeams = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeams(data.teams.slice(0, 19)))
    }, [])

    return (

            <div className="container all-teams-style">
                <div className="row">
                    {
                        teams.map(team => <SingleTeam key={team.idTeam} team={team} />)
                    }
                </div>
            </div>
    );
};

export default AllTeams;