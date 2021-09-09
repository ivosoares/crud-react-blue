import React from 'react';
import MusicList from '../../components/structure/MusicList/MusicList';
import './Home.scss';

const Home = () => {
  return (
    <section className="content">
      <h1 className="content-title">Listagem de Musicas</h1>
      <div className="content-list">
        <h1>Projeto de Musicas</h1>
        <MusicList />
      </div>
    </section>
  )
}

export default Home
