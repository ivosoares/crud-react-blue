import React from 'react'
import './MusicAdd.scss';
import { Api } from '../../api/api'

const MusicAdd = () => {
  const handleSubmit = async (evento) => {
    evento.preventDefault();
    console.log(evento.target.nome.value);
    const nome = evento.target.nome.value;
    const autor = evento.target.autor.value;
    const genero = evento.target.genero.value;
    const capa = evento.target.capa.value;
    const letra = evento.target.letra.value;
    const duracao = evento.target.duracao.value;

    const Musica = {
      nome: nome,
      autor: autor,
      genero: genero,
      capa: capa,
      letra: letra,
      duracao: parseInt(duracao),
    }

    const response = await Api.fetchPost(Musica);
    const data = await response;
    
    console.log(data);
  };

  return (
    <section className="add">
      <form className="add-form" onSubmit={handleSubmit}>
        <div className="add-form-group">
          <label htmlFor="nome" className="add-form-group-label">Nome</label>
          <input type="text" id="nome" name="nome" className="add-form-group-input"/>
        </div>
        <div className="add-form-group">
          <label htmlFor="autor" className="add-form-group-label">Autor</label>
          <input type="text" id="autor" name="autor" className="add-form-group-input"/>
        </div>
        <div className="add-form-group">
          <label htmlFor="genero" className="add-form-group-label">Genero</label>
          <input type="text" id="genero" name="genero" className="add-form-group-input"/>
        </div>
        <div className="add-form-group">
          <label htmlFor="capa" className="add-form-group-label">Capa</label>
          <input type="text" id="capa" name="capa" className="add-form-group-input"/>
        </div>
        <div className="add-form-group">
          <label htmlFor="letra" className="add-form-group-label">Letra</label>
          <input type="text" id="letra" name="letra" className="add-form-group-input"/>
        </div>
        <div className="add-form-group">
          <label htmlFor="duracao" className="add-form-group-label">Duracao</label>
          <input type="number"  id="duracao" name="duracao" className="add-form-group-input"/>
        </div>
        <div className="add-form-buttons">
          <button className="add-form-buttons-btn-cancelar">Cancelar</button>
          <button className="add-form-buttons-btn-salvar" type="submit">Enviar</button>
        </div>
      </form>
    </section>
  )
}

export default MusicAdd
