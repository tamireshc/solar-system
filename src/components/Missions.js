import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './Missioncard';
import '../App.css';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <section className="missionsContainer">
          { missions.map((item) => (
            <MissionCard
              key={ item.name }
              name={ item.name }
              year={ item.year }
              country={ item.country }
              destination={ item.destination }
            />
          )) }
        </section>
      </div>
    );
  }
}

export default Missions;
