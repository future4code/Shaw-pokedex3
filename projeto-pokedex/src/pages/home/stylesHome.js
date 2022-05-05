import styled from "styled-components";

export const Container = styled.div`
  width: 99vw;
  height: 99vh;

  @media (min-width: 375px) and (max-width: 667px) {
    width: 100%;
    height: 100%;
  }
`;
export const Cont = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
  height: 15%;
  background-color: #e10000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #2a003f;
  letter-spacing: 4px;
  font-size: 1.7rem;
  padding: 1%;

  h1 {
  }

  img{
      width: 250px;
  }
  @media (min-width: 375px) and (max-width: 667px) {
    height: 10vh;
    font-size: 17px;
    display: flex;
    justify-content: center;
    h1 {
      font-size: small;
    }
  }
`;

export const Button = styled.button`
  color: #fae62d;
  font-weight: bold;
  font-size: 1.2rem;
  border-radius: 5%;
  padding: 1%;
  transition: all 0.1s ease-in-out;
  background: #00389a;
  border: 4px solid #00225e;
  margin-right: 5%;
  margin-left: 5%;
  box-shadow: rgb(0 0 0 / 50%) 0px 4px 8px 0px;
  cursor: pointer;

  :hover {
    background: #00389a;
    border-color: #96cee1;
    color: #fae62d;
    box-shadow: rgb(0 0 0 / 100%) 0px 4px 8px 0px;
  }

  @media (min-width: 375px) and (max-width: 667px) {
    font-size: small;
  }
`;
export const ContainerCardTrip = styled.div`
  border: 2px solid #fcc000;
  margin-bottom: 3%;
  width: 100%;
  height: 68%;
  display: flex;
  overflow: auto;
  flex: none;
  flex-flow: row nowrap;
  gap: 1%;
  padding: 2%;
  overflow: hidden;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    height: 10px;
    border-radius: 400px;
    padding: 400px;
    box-decoration-break: clone;
    position: relative;
    margin: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #fae62d;
  }
  ::-webkit-scrollbar-track {
    background: #2a003f;
  }
  h3 {
    color: #2a003f;
  }
  @media (min-width: 375px) and (max-width: 667px) {
    width: 99%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    align-items: flex-start;
    background-color: #2a003f;
  }
`;

export const Card = styled.div`
  background-color: white;
  border: 4px solid #2a003f;
  padding: 5px;
  border-radius: 5%;
  min-width: 20%;
  max-width: 20%;
  height: 95%;
  word-wrap: word-wrap;
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 100%) 0px 4px 8px 0px;

  margin: 1%;

  @media (min-width: 375px) and (max-width: 667px) {
    min-width: 90%;
    max-width: 20%;
    height: 50%;
  }
`;

export const CardTrip = styled.div`
  border: 5px solid white;
  min-width: 95%;
  max-width: 95%;
  height: 80%;
  word-wrap: word-wrap;
  overflow: hidden;
  overflow-y: scroll;
  padding: 1%;
  margin: 1%;
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.1rem;
  gap: 2px;

  h2 {
    display: none;
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 20px;
    border-radius: 400px;
    padding: 400px;
    box-decoration-break: clone;
    position: relative;
    margin: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #fae62d;
  }
  ::-webkit-scrollbar-track {
    background: #2a003f;
  }

  :hover {
    border-color: #2a003f;
    color: #fae62d;
    transition: 1s;
    font-size: 1.1rem;
    background-color: #5c197e;
    h2 {
      display: block;
    }
  }

  @media (min-width: 375px) and (max-width: 667px) {
    width: 90%;
    height: 100%;
    font-size: 1.3rem;
    h2 {
      display: block;
      color: #5c197e;
      font-size: 110%;
    }
    h3{
      color: #2a003f;
      font-size:150%
    }
  }
`;
