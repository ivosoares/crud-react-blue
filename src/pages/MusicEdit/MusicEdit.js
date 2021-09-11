import React, { useEffect, useState } from "react";
import { Api } from '../../api/api';

const MusicEdit = (props) => {
  const id = props.match.params.id;
  const [fields, setFields] = useState({});

  useEffect(() => {
    getMusicById();
  },[])

  const getMusicById = async () => {
    const response = await Api.fetchGetById(id);
    const data = await response.json();
    setFields(data);
  }

  const handleFieldsChange = (evento) => {
    // clono o meu objeto do estado
    const auxFields = { ...fields };
    auxFields[evento.target.name] = evento.target.value;
    setFields(auxFields);
  }

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    const dados = { ...fields };
    dados.duracao = parseFloat(dados.duracao);
    const result = await Api.fetchPut(dados, id);
    const response = await result.json();
    console.log(response);
  }

  return (
    <section className="add">
      <h1>Editar - Nome da Musica</h1>
      <form className="add-form" onSubmit={handleSubmit}>
        <div className="add-form-group">
          <label htmlFor="nome" className="add-form-group-label">
            Nome
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={fields.nome}
            onChange={handleFieldsChange}
            className="add-form-group-input"
          />
        </div>
        <div className="add-form-group">
          <label htmlFor="autor" className="add-form-group-label">
            Autor
          </label>
          <input
            type="text"
            id="autor"
            name="autor"
            value={fields.autor}
            onChange={handleFieldsChange}
            className="add-form-group-input"
          />
        </div>
        <div className="add-form-group">
          <label htmlFor="genero" className="add-form-group-label">
            Genero
          </label>
          <input
            type="text"
            id="genero"
            name="genero"
            value={fields.genero}
            onChange={handleFieldsChange}
            className="add-form-group-input"
          />
        </div>
        <div className="add-form-group">
          <label htmlFor="capa" className="add-form-group-label">
            Capa
          </label>
          <input
            type="text"
            id="capa"
            name="capa"
            value={fields.capa}
            onChange={handleFieldsChange}
            className="add-form-group-input"
          />
        </div>
        <div className="add-form-group">
          <label htmlFor="letra" className="add-form-group-label">
            Letra
          </label>
          <input
            type="text"
            id="letra"
            name="letra"
            value={fields.letra}
            onChange={handleFieldsChange}
            className="add-form-group-input"
          />
        </div>
        <div className="add-form-group">
          <label htmlFor="duracao" className="add-form-group-label">
            Duracao
          </label>
          <input
            type="text"
            id="duracao"
            name="duracao"
            value={fields.duracao}
            onChange={handleFieldsChange}
            className="add-form-group-input"
          />
        </div>
        <div className="add-form-buttons">
          <button className="add-form-buttons-btn-cancelar">Cancelar</button>
          <button className="add-form-buttons-btn-salvar" type="submit">
            Enviar
          </button>
        </div>
      </form>
    </section>
  );
};

export default MusicEdit;
