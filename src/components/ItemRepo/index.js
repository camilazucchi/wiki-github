import React from 'react'
import { ItemContainer } from './styles'

export default function ItemRepo({repos, handleRemoveRepos}) {

  const handleRemove = () => {
      handleRemoveRepos(repos.id)
  }

  return (
    <ItemContainer onClick={handleRemove}>
        <h3>{repos.name}</h3>
        <p>{repos.full_name}</p>
        <p>{repos.description}</p>
        <a href={repos.html_url} target="_blank" rel="noreferrer">Ver repositório</a>
        <a href="*" className='remove'>Remover</a>
    </ItemContainer>
  )
}
