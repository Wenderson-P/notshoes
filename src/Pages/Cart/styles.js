import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;
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

export const Total = styled.div``;
