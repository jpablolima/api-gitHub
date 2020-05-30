import React, { useEffect, useState } from    'react';
import * as S from './styled';

export default function Repositories(){
  useEffect(() => {
    const [repositories, setRepositories] = useState([]);
    let repositoriesName = localStorage.getItem('repositoriesName');
    repositoriesName = JSON.parse(repositoriesName);
    setRepositories(repositoriesName);

  }, []);

  return (
    <S.Container>
    <S.Title> Lista de Repositório  GitHub </S.Title>
      <S.List>
          {repositories.map(repository => {
            return(
            <S.ListItem>{ repository } </S.ListItem>
            )
          })}
      </S.List>
    </S.Container>
  );
}

//export default repositories;