import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {
    Container,
    TitileH1,
    Lista,
    ListaItem,
    Voltar
} from './styled'

export default function Repositores() {
    const [repoName, setrepoName] = useState([])
    const history = useHistory()

    useEffect(() => {
       function loadDatas(){
           const repositories = localStorage.getItem('repositoriesName')
           if(repositories !== null){
            setrepoName(JSON.parse(repositories))
            localStorage.clear()
           }else{
            history.push('/')
           }
           
       } 
       loadDatas()
       
    }, [])


    return (
        <Container>
            <TitileH1>Page Repositories</TitileH1>
            <Lista>
                {
                    (repoName !== null)
                    ?
                        repoName.map(repo => {
                            return(
                                <ListaItem>Repositorio: {repo} </ListaItem>
                            )
                        })
                    :
                    <h2 style={{fontSize: 24, color:"#fff", textAlign:'center'}}>Nenhum repositorio encontrado</h2>
                }
            </Lista>
            <Voltar to='/'>Voltar</Voltar>
        </Container>
    )
}
