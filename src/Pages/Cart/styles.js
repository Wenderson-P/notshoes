import styled from 'styled-components';

const purpleColor = '#5a2d82';

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  button {
    background: ${purpleColor};
    color: #fff;
    border: 0;
    border-radius: 4px;
    padding: 12px 20px;
    font-weight: bold;
    text-transform: uppercase;
  }
`;

export const ProductTable = styled.table`
  width: 100%;
  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }
  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }
  img {
    height: 100px;
  }
  strong {
    color: #333;
    display: block;
  }
  span {
    display: block;
    margin-top: 5px;
    font-weight: bold;
    font-size: 18px;
  }

  div {
    display: flex;
    align-items: center;
    input {
      width: 50px;
      border-radius: 4px;
      border: 1px solid #ddd;
      color: #666;
      padding: 6px;
      text-align: end;
    }
  }

  button {
    border: 0;
    background: none;
    padding: 6px;
  }
`;

export const Total = styled.div`
  display: flex;
  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;

export const EmptyScreen = styled.div`
  height: 100%;
  margin: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  span {
    margin: 5px;
    font-size: 16px;
    font-weight: 500;
    color: #666;
  }
  button {
    margin-top: 20px;
    background: none;
    color: ${purpleColor};
    border: 1px solid ${purpleColor};
    transition: background 0.5s;
    -webkit-transition: background 0.5s;

    &:hover {
      background: ${purpleColor};
      color: white;
    }
  }
`;
