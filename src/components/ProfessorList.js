import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProfessorList = () => {
    const [professores, setProfessores] = useState([]);

    useEffect(() => {
        axios.get('https://back-end-1-kr7f.onrender.com/api/professores')
            .then((response) => setProfessores(response.data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div>
            <h1>Lista de Professores</h1>
            <ul>
                {professores.map((professor) => (
                    <li key={professor._id}>
                        {professor.nome} - {professor.disciplina}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProfessorList;
