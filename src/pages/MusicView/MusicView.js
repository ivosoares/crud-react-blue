import React, { useEffect, useState } from 'react'
import './MusicView.scss';
import { Api } from '../../api/api'

const MusicView = (props) => {
  const [musica, setMusica] = useState({});
  
  useEffect(() => {
    getMusicById();
  }, [])

  // pegar o id e  chamar a api na url http://localhost:3002/musicas/FindById/
  // passando o id que eu recebi
  const id = props.match.params.id;
  
  const getMusicById = async () => {
    const response = await Api.fetchGetById(id);
    const data = await response.json();
    setMusica(data);
    console.log(musica);
  }

  return (
    <section className="view">
      <div className="view-img">
        <img src={musica.capa} alt={musica.nome}/>
      </div>
      <div className="view-info">
        <p className="view-info-text"><b>Nome:</b> { musica.nome }</p>
        <p className="view-info-text"><b>Autor:</b> { musica.autor }</p>
        <p className="view-info-text"><b>Letra:</b> { musica.letra }</p>
        <p className="view-info-text"><b>Duracao:</b> { musica.duracao }</p>
        <p className="view-info-text"><b>Data Criacao:</b> { musica.dataCriacao }</p>
        <button className="btn btn-success">Editar</button>
        <button className="btn btn-danger">Excluir</button>
      </div>
    </section>
  )
}

export default MusicView
