import React from 'react';
import './MusicCard.scss';

const MusicCard = (props) => {
  const musica = props.musica;

  return (
    <div className="card">
      <div className="card-img">
        <img src={musica.capa} alt="" />
      </div>
      <p className="card-text">{musica.nome}</p>
      <span className="card-info">{musica.genero}</span>
    </div>
  )
}

export default MusicCard
