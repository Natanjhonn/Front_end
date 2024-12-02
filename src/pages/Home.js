import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Home.css';

const Home = () => {
  const [professores, setProfessores] = useState([]);

  useEffect(() => {
    fetchProfessores();
  }, []);

  const fetchProfessores = () => {
    axios
      .get('https://back-end-1-kr7f.onrender.com/api/professores')
      .then((response) => setProfessores(response.data))
      .catch((error) => console.error(error));
  };

  const handleDelete = (id) => {
    const confirm = window.confirm('Tem certeza que deseja excluir este professor?');
    if (confirm) {
      axios
        .delete(`https://back-end-1-kr7f.onrender.com/api/professores/${id}`)
        .then(() => {
          alert('Professor excluído com sucesso!');
          fetchProfessores(); 
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <div>
      <header>Professores da UNEX</header>
      <div className="table-container">
        <h2>Lista de Professores</h2>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Disciplina</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {professores.map((professor) => (
              <tr key={professor._id}>
                <td>{professor.nome}</td>
                <td>{professor.disciplina}</td>
                <td>{professor.email}</td>
                <td>{professor.telefone}</td>
                <td>
                  <button
                    style={{ marginRight: '10px' }}
                    onClick={() => handleDelete(professor._id)}
                  >
                    Excluir
                  </button>
                  <Link to={`/edit-professor/${professor._id}`}>
                    <button>Editar</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/add-professor">
          <button>Adicionar Professor</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
