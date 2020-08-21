import React from 'react';

import Header from './components/Header';

function App() {
    return (
        <>
            <Header title="Homepage">
                <ul>
                    <li>Homepage</li>
                    <li>projects</li>
                </ul>
            </Header>
            <Header title="Projects">
                <ul>
                    <li>Homepage</li>
                    <li>projects</li>
                    <li>Login</li>
                </ul>
            </Header>
        </>
    );
}

export default App;

//uma propriedade é alguma informação que podemos passar
//de um componente pai para um componente filho
//ao usar o nosso componente podemos passar para ele uma propriedade
//essa propriedade são como os atributos do html, porem podemos utiliza-los
//dentro dos nossos componentes
/**
 * dentro de todo componente react nós temos uma propriedade
 * chamda children, essa propriedade é responsavel por passar para o componente filho
 * todo o conteúdo que o componente pai colocou dentro dele
 */
