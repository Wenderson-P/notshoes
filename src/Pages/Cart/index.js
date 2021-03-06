import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
  MdRemoveShoppingCart,
} from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Container, ProductTable, Total, EmptyScreen } from './styles';
import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';
import history from '../../services/history';

export default function Cart() {
  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    )
  );

  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subTotal: formatPrice(product.price * product.amount),
    }))
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Container>
      {cart.length > 0 ? (
        <>
          <ProductTable>
            <thead>
              <tr>
                <th />
                <th>PRODUTO</th>
                <th>QTD</th>
                <th>SUBTOTAL</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {cart.map(product => (
                <tr>
                  <td>
                    <img src={product.image} alt={product.title} />
                  </td>
                  <td>
                    <strong>{product.title}</strong>
                    <span>{product.priceFormatted}</span>
                  </td>
                  <td>
                    <div>
                      <button type="button" onClick={() => decrement(product)}>
                        <MdRemoveCircleOutline size={20} color="#7159c1" />
                      </button>
                      <input type="number" value={product.amount} />
                      <button type="button">
                        <MdAddCircleOutline
                          size={20}
                          color="#7159c1"
                          onClick={() => increment(product)}
                        />
                      </button>
                    </div>
                  </td>
                  <td>
                    <strong>{product.subTotal}</strong>
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() =>
                        dispatch(CartActions.removeFromCart(product.id))
                      }
                    >
                      <MdDelete size={20} color="7159c1" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </ProductTable>
          <footer>
            <button type="button">Finalizar pedido</button>
            <Total>
              <span>Total</span>
              <strong>{total}</strong>
            </Total>
          </footer>
        </>
      ) : (
        <EmptyScreen>
          <MdRemoveShoppingCart size={50} color="#5a2d82" />
          <span>Seu carrinho está vazio :(</span>
          <span>
            Que tal navegar pela nossa loja e conhecer nossos produtos ?
          </span>
          <button type="button" onClick={() => history.push('/')}>
            Voltar para a página inicial
          </button>
        </EmptyScreen>
      )}
    </Container>
  );
}
