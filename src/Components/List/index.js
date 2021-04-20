import React from 'react';
import {Container, Item, Name, Button} from './styles';

const List = ({repos, favorite, canFavorite}) => {
    return (
        <Container>
            {
                repos && repos.map((el) => (
                    <Item>
                        <Name>{el.name}</Name>
                        {canFavorite && <Button onClick={() => favorite(el)}>Favoritar</Button>}
                    </Item>
                    
                ) )
            }
        </Container>
    )
}

export default List;