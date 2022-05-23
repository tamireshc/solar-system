import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="mission-card">
        <p data-testid="mission-name" className="title-mission">
          { name }
        </p>

        <p data-testid="mission-year" className="card-text">
          { year }
        </p>
        <p data-testid="mission-country" className="card-text">
          { country }
        </p>
        <p data-testid="mission-destination" className="card-text">
          { destination }
        </p>
      </div>
    );
  }
}
MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
