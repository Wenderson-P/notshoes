import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

export default function Home() {
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
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-shox-nz-eu-masculino/14/D12-9970-014/D12-9970-014_detalhe2.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tênis hike mountain</strong>
        <span>R$429,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/36/HZM-1731-036/HZM-1731-036_zoom2.jpg"
          alt="Tênis"
        />
        <strong>Tênis hike blue</strong>
        <span>R$329,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
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
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-shox-nz-eu-masculino/14/D12-9970-014/D12-9970-014_detalhe2.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tênis hike mountain</strong>
        <span>R$429,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/36/HZM-1731-036/HZM-1731-036_zoom2.jpg"
          alt="Tênis"
        />
        <strong>Tênis hike blue</strong>
        <span>R$329,90</span>
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
