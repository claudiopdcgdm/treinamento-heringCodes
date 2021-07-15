import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
width: 991px;
margin: 0 auto;
`

export const TitileH1 = styled.h1`
font-size: 32px;
color: #fff;
` 

export const simpleH4 = styled.h4`
font-size: 32px;
color: #ff3;
` 

export const Lista = styled.ul`
list-style: none;
padding: 0;
font-family: sans-serif;
width: 100%;
`

export const ListaItem = styled.li`
color: #000;
background-color: #fff;
padding: 0.5rem;
margin: 5px;
font-size: 21px;
`

export const Voltar = styled(Link)`
text-decoration: none;
font-size: 18px;
color: #fff;
`


