import React from 'react';
import { Link } from 'react-router-dom';
import './MusicCard.scss';

const MusicCard = (props) => {
  const musica = props.musica;

  return (
    <Link to={`/view/${musica._id}`} className="card">
      <div>
        <div className="card-img">
          <img src={musica.capa} alt="" />
        </div>
        <p className="card-text">{musica.nome}</p>
        <span className="card-info">{musica.genero}</span>
      </div>
    </Link>
  )
}

export default MusicCard
