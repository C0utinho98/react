import styled, {css} from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #325288;
  color: #132c33;
`;

export const Content = styled.div`
  width: 30%;
  height: 90%;
  border-radius: 8px;
  background-color: #f4eee8;
`;

export const WrapperInput = styled.div`
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
    height: 20px;
    border: 2px solid #d8e3e7;
    border-radius: 5px;
    width: 200px;
`;

export const Button = styled.button`
  height: 28px;
  margin-left: 20px;
  background-color: #325288; 
  color: #fff;
  border: 0;
  border-radius: 5px;
`;

export const MiddleContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const Item = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ${props =>
    props.selected &&
    css`
      border-bottom: 2px solid #325288;
    `}
  height: 30px;
  margin:0 10px;
`;