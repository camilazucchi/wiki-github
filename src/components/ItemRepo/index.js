import React from 'react'
import { ItemContainer } from './styles'

export default function ItemRepo() {
  return (
    <ItemContainer>
        <h3>Teste</h3>
        <p>teste teste</p>
        <a href="*">outra opção</a>
        <a href="*" className='remove'>remover</a>
    </ItemContainer>
  )
}
