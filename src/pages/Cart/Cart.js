import styles from './Cart.module.scss'
import classNames from 'classnames/bind'
import { useDispatch, useSelector } from 'react-redux';
import { deleteToCart, updateTocart } from '../../reducers/cart/cartSlice';
import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function Cart() {
    const dispatch = useDispatch()
    const handleUpdateCart = (product, action) => {
        sessionStorage.setItem('action', action)
        dispatch(updateTocart(product))
    }

    const cart = useSelector(state => state.cart)

    return (<div className={cx('cart')}>
        <div className={cx('cart__title')}>CART</div>
        <div className={cx('cart__container')}>
            <div className={cx('cart__content')}>

                <ul className={cx('cart__label')}>
                    <li></li>
                    <li>PRODUCT</li>
                    <li>PRICE</li>
                    <li>QUANTITY</li>
                    <li>SUBTOTAL</li>
                </ul>

                {
                    cart.cartItem.length == 0 ?
                        <div className={cx('cart__empty')}>
                            <span>Your cart is empty go</span>
                            <Link to='/shop'>SHOP NOW</Link>
                        </div>
                        : cart.cartItem.map(item => {
                            if (cart.cartItem.length != 0)
                                return (
                                    <ul key={item._id} className={cx('cart__item')}>
                                        <li className={cx('cart__img')}>
                                            <img src={require(`../../../public/img/product/${item.img}`)} />
                                        </li>
                                        <li className={cx('cart__name')}>{item.name}</li>
                                        <li className={cx('cart__price')}>{item.price}</li>
                                        <li className={cx('cart__quanlity')}>
                                            <button onClick={() => handleUpdateCart(item, false)}>-</button>
                                            {item.cartQuanlity}
                                            <button onClick={() => handleUpdateCart(item, true)}>+</button>
                                        </li>
                                        <li className={cx('cart__subtotal')}>${parseInt(item.price) * parseInt(item.cartQuanlity)}.00</li>
                                        <li className={cx('cart__clear')}>
                                            <span onClick={() => {
                                                dispatch(deleteToCart(item))
                                            }}>X</span>
                                        </li>
                                    </ul>)

                        })
                }


            </div>
            <div className={cx('cart__service')}>
                <div>
                    <input type="text" placeholder="Coupon code.." />
                    <button>APPLY</button>
                </div>

                <div>
                    <span>${
                        cart.cartItem.reduce((sum, item) => {
                            return sum + (parseInt(item.price) * parseInt(item.cartQuanlity))
                        }, 0)
                    }.00</span>
                    <button>CHECK OUT</button>
                </div>

            </div>
        </div>
    </div>)
}
export default Cart