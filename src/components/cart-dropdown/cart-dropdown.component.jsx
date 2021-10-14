import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.length > 0 ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className='empty-message'>Your Cart is empty</span>
      )}
    </div>
    {cartItems.length > 0 ? (
      <CustomButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        Check Out
      </CustomButton>
    ) : (
      ''
    )}
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
