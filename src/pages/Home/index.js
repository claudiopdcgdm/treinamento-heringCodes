import React, {useState} from 'react'
import axios from 'axios'
import * as S from './styled'
import {useHistory} from 'react-router-dom'

export default function Home() {
    const [user, setuser] = useState('')
    const history = useHistory()
    const [erro, setErro] = useState(false)


    function handlePesquisa(){
      const urlBase= 'https://api.github.com/users/'//nomeusuario/repos'
      axios.get(`${urlBase}${user}/repos`)
      .then((reponse)=> {
          const repositories  = reponse.data
          const repoName = []
                    
          // repositories.map((repo)=>{
          //   repoName.push(repo.name)
          // })
          //ou
          for (let repo of repositories){
            repoName.push(repo.name)
          }
          localStorage.setItem('repositoriesName', JSON.stringify(repoName))
          setErro(false)
          history.push('/repositores')

      })
      .catch(error => {
        setErro(true)
      })
    }


    
    return (
      <S.Container>
        <S.H1>Search Repository in GitHub</S.H1>
        <S.Content>
          <S.Input 
            type="text" 
            placeholder='user from github' 
            className='inputUsuario'
            value={user} onChange={(e) => setuser(e.target.value)}
            />
            <S.Button className='btnsubmit' onClick={handlePesquisa }>Search</S.Button>
          </S.Content>
           {
            erro&&
            <>
              <S.MsgError>Ocorreu um erro!! Tente novamente</S.MsgError>
            </>
            }
      </S.Container>
    );
}

