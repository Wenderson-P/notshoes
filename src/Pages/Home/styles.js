import styled from 'styled-components';
import { lighten } from 'polished';

const discountColor = '#bc1537';
const purpleColor = '#5a2d82';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    div {
      display: flex;
      img {
        align-self: center;
        max-width: 250px;
      }
      h5 {
        height: 20px;
        width: 35px;
        text-align: center;
        font-size: 16px;
        color: ${discountColor};
        border: 1px solid ${discountColor};
      }
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      margin-top: 5px;
      color: #333;
    }
    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }
    button {
      background: ${purpleColor};
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      display: flex;
      align-items: center;
      transition: background 0.2s;

      &:hover {
        background: ${lighten(0.05, purpleColor)};
      }
      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);
      }
      svg {
        margin-right: 5px;
      }
      > span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;
