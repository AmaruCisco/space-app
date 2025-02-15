import React from "react";
import Titulo from "../../Titulo";
import fotos from "./fotos-populares.json";
import styled from "styled-components";

const ColumnaFotos = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const Imagen = styled.img`
  max-width: 212px;
  border-radius: 20px;
`;

const Boton = styled.button`

  background-color: transparent;
  color: #fff;
  border: 2px solid;
  border-color: #c98cf1;
  padding: 12px 20px;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
  margin-top: 16px;

`

const Populares = () => {
  return (
    <section>
      <Titulo $align="center">Populares</Titulo>
      <ColumnaFotos>
        {fotos.map((foto) => (<Imagen key={foto.id} src={foto.path} alt={foto.alt} />))}
      </ColumnaFotos>
      <Boton>Ver más</Boton>
    </section>
  );
};

export default Populares;
