import React, {useState} from 'react';
import { Container, Content, WrapperInput, Input, Button, MiddleContent, Item }from './styles';
import List from './Components/List/index';
import axios from './Axios/axios';

function App() {
  const [toggle, setToggle] = useState(0);
  const [repos, setRepos] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [user, setUser] = useState('');


  const addRepos = async() => {
    await axios.get(`/${user}/repos`).then((response) => setRepos(response.data)).catch(err => console.log(err));
  }
  
  return (
    <Container>
      <Content>
        <WrapperInput>
          <Input placeholder="Digite o nome do usuário" onChange={(event) => setUser(event.target.value)}/>
          <Button onClick={addRepos}>Pesquisar</Button>
        </WrapperInput>
        <MiddleContent>
          <Item selected={toggle === 0} onClick={() => setToggle(0)}>List</Item>
          <Item selected={toggle === 1} onClick={() => setToggle(1)}>Favoritos</Item>
        </MiddleContent>
        {toggle === 0 ? 
          <List 
            repos={repos} 
            favorite={(elemento) => setFavorites([...favorites, elemento]) } 
            canFavorite={true}
            /> 
          : 
          <List 
            repos={favorites} 
            canFavorite={false}
          /> 
          }
      </Content>
    </Container>
  );
}

export default App;
