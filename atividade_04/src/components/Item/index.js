import React from 'react'

export function Item ({ name, description, htmlUrl }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{description ?? 'Sem descrição :('}</p>
      <a href={htmlUrl} target="_blank" rel="noreferrer">Acessar repositório</a>
    </div>
  )
}
