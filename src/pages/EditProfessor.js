import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AddProfessor.css';

const EditProfessor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: '',
    disciplina: '',
    email: '',
    telefone: '',
  });

  useEffect(() => {
    axios
      .get(`https://back-end-1-kr7f.onrender.com/api/professores/${id}`)
      .then((response) => setFormData(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`https://back-end-1-kr7f.onrender.com/api/professores/${id}`, formData)
      .then(() => {
        alert('Professor atualizado com sucesso!');
        navigate('/');
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="form-container">
      <h2>Editar Professor</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="nome"
          placeholder="Nome"
          value={formData.nome}
          onChange={handleChange}
        />
        <input
          name="disciplina"
          placeholder="Disciplina"
          value={formData.disciplina}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          name="telefone"
          placeholder="Telefone"
          value={formData.telefone}
          onChange={handleChange}
        />
        <button type="submit">Atualizar</button>
      </form>
    </div>
  );
};

export default EditProfessor;
