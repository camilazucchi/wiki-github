import React from 'react'
import { ButtonContainer } from './styles'

export default function Button({onClick}) {
  return (
    <ButtonContainer onClick={onClick}>
        <button>Buscar repositório</button>
    </ButtonContainer>
  )
}
