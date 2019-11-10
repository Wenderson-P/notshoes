import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import api from '../../services/api';
import { ProductList } from './styles';

export default class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');
    this.setState({ products: response.data });
  }

  render() {
    return (
      <ProductList>
        <li>
          <img
            src="https://static.netshoes.com.br/produtos/tenis-nike-downshifter-9-masculino/26/HZM-1276-026/HZM-1276-026_zoom1.jpg"
            alt="Tênis"
          />
          <strong>Tênis hike</strong>
          <span>R$129,90</span>
          <button type="button">
            <div>
              <MdAddShoppingCart size={16} color="#FFF" />
            </div>
            <span>Adicionar ao carrinho</span>
          </button>
        </li>
      </ProductList>
    );
  }
}
