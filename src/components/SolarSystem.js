import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import '../App.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="solar-system">
        <Title headline="Planetas" />
        <div className="divPlanets">
          { planets.map((item) => (
            <PlanetCard
              key={ item.name }
              planetName={ item.name }
              planetImage={ item.image }
            />
          )) }
        </div>
      </div>
    );
  }
}

export default SolarSystem;
