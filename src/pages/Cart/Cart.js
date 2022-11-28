import styles from './Cart.module.scss'
import classNames from 'classnames/bind'
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);
function Cart() {
    const cart = useSelector(state => state.cart)
    return (<h1 className={cx('cart')}>Cart page</h1>)
}
export default Cart