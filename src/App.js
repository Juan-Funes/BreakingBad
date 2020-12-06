import React,{useState,useEffect} from "react";
import styled from "@emotion/styled";
import Frase from './components/Frase'
//import axios from 'axios'
const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3 rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
`;
function App() {

  const [frase,guardarFrase] = useState({});
  const consultarApi = () => {
    //utilizando fetch 
    const api = fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    const frase = api.then(respuesta => respuesta.json());
    frase.then(resultado=>guardarFrase(resultado[0]))
    //axios
    // const api = axios.get('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    // console.log(api)
  };
  useEffect(()=>{
    consultarApi();


  },[])
  return (
    <Contenedor>
      <Frase
      frase={frase }
      />
      <Boton onClick={consultarApi}>Nueva Frase</Boton>

    </Contenedor>
  );
}

export default App;
