import React from 'react'

const TipoIngresso = (props) => {
    const { tipo, preco } = props

    return (
        <div>
            <h1>Ingressos</h1>
            <ul>
                <li>{tipo}: {preco}</li>
            </ul>
        </div>
    )

}

export default TipoIngresso
