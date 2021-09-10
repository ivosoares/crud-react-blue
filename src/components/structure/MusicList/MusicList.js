import React, { useEffect, useState } from 'react';
import MusicCard from '../MusicCard/MusicCard';
import './MusicList.scss';
import { Api } from '../../../api/api';

const MusicList = () => {
  const [musicas, setMusicas] = useState([]);

  useEffect(()=> {
    getMusic();
  }, [])

  const getMusic = async () => {
    //GET - estou enviando uma requisao get para o backend.
    // response = a resposta que o servidor traz da chamada (carta fechada).
    const response = await Api.fetchGet();
    // data = é o dado que eu recebo apos o ok da promessa do response (conteudo da carta).
    const data = await response.json();
    setMusicas(data);
  }

  return (
    <div className="list">
      {musicas.map((musica, index) => (
        <MusicCard musica={musica} key={musica._id}/>
      ))}
    </div>
  )
}

export default MusicList
