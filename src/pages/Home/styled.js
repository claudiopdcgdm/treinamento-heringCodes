import styled from 'styled-components'

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    
`
export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    width: 100vw;
    height: 100vh;
`
export const Input = styled.input`
    width: 40%;
    height: 1.7rem;
    border: 1px solid #ddd;
    border-radius: 0.4rem;
    border-color: green;
    padding: 0;

    &:focus,
    &:active{
        outline: none;
        box-shadow:#ddd;
    }
    /* &:hover{
        opacity: 0.9;
    } */
`

export const Button = styled.button`
    height: 1.85rem;
    border:none;
    border-bottom-right-radius:0.4rem;
    border-top-right-radius:0.4rem;
    margin: 0 0 0 -56px;
    background-color: green;
    color:#fff;
    font-size: 14px;

    &:hover{
        opacity: 0.9;
        cursor: pointer;
    }
`
export const H1 = styled.h1`
    font-size:24px;
    font-family: sans-serif;
    color: #fff;
    margin-right:10px;
`
export const MsgError = styled.span`
    display: block;
    color: red;
    font-size: 0.90rem;
    font-weight: 600;
    margin-top:5px;
`