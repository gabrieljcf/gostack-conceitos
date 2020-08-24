import React, { useState } from 'react';

import './App.css';
import backgroundImage from './assets/images/background.jpg';

import Header from './components/Header';

function App() {
    const [projects, setProjects] = useState(['Criar Homepage', 'Front-end Web']);

    function handleAddProject() {
        setProjects([...projects, `Novo projeto ${Date.now()}`]);
    }

    return (
        <>
            <Header title="Homepage" />
            <img width={300} src={backgroundImage} alt="background"/>
            <ul>
                {projects.map(project => <li key={project}>{project}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar</button>

        </>
    );
}

export default App;