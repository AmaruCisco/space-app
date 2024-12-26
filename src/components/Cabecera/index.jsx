import React from 'react'
import styled from 'styled-components'
import CampoTexto from '../CampoTexto'

const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img{
        width: 212px;
    }

`



const Cabecera = ({setConsulta}) => {
  return (
    <div>
        <HeaderEstilizado>
            <img src="img/logo.png" alt="logo cabecera" />
            <CampoTexto setConsulta={setConsulta}/>
        </HeaderEstilizado>
      
    </div>
  )
}

export default Cabecera

