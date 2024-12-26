import React from 'react'
import styled from 'styled-components'

const Titulo = styled.h2`
    font-size: 32px;
    color: #7b78E5;
    text-align: ${props => props.$align ? props.$align : "left"};
`

export default Titulo
