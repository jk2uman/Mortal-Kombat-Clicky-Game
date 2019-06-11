import React from 'react';
import "./KombatCard.css";


const KombatCard = props => (
  <div className="card">
    <div className="img-container">
      <img className="img thumbnail img-responsive" alt={props.name} src={props.image}
        onClick={() => props.handleClick(props.id)} />
    </div>
  </div>

);


export default KombatCard;