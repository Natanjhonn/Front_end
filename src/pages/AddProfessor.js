import React, { useState } from 'react';
import axios from 'axios';
import './AddProfessor.css';

const AddProfessor = () => {
  const [formData, setFormData] = useState({
    nome: '',
    disciplina: '',
    email: '',
    telefone: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://back-end-1-kr7f.onrender.com/api/professores', formData)
      .then(() => alert('Professor cadastrado!'))
      .catch((error) => console.error(error));
  };

  return (
    <div className="form-container">
      <h2>Adicionar Professor</h2>
      <form onSubmit={handleSubmit}>
        <input name="nome" placeholder="Nome" onChange={handleChange} />
        <input name="disciplina" placeholder="Disciplina" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="telefone" placeholder="Telefone" onChange={handleChange} />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default AddProfessor;
