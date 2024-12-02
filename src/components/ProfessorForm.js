import React, { useState } from 'react';
import axios from 'axios';

const ProfessorForm = () => {
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
        axios.post('http://localhost:5000/api/professores', formData)
            .then(() => alert('Professor cadastrado!'))
            .catch((error) => console.error(error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="nome" placeholder="Nome" onChange={handleChange} />
            <input name="disciplina" placeholder="Disciplina" onChange={handleChange} />
            <input name="email" placeholder="Email" onChange={handleChange} />
            <input name="telefone" placeholder="Telefone" onChange={handleChange} />
            <button type="submit">Cadastrar</button>
        </form>
    );
};

export default ProfessorForm;
