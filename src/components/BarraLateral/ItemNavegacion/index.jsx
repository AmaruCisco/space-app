import React from 'react'
import styled from 'styled-components'

const ItemListaEstilizado =styled.li`
    margin-bottom: 30px;
    font-size: 24px;
    line-height: 28px;
    align-items: center;
    gap: 16px;
    display: flex;
    color: ${props => props.$activo ? "#7B78E5" : "#D9D9D9"};
    font-family: ${props => props.$activo ? "GandhiSansBold" : "GandhiSansRegular"};

`

const ItemNavegacion = ({children, iconoActivo, iconoInactivo, activo=false}) => {
  return (
    <ItemListaEstilizado $activo={activo}>
      <img src={activo ? iconoActivo: iconoInactivo}  />
      {children}
    </ItemListaEstilizado>
  )
}

export default ItemNavegacion
