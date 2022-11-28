import styles from './Product.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'



const cx = classNames.bind(styles)
function Product() {


    return (
        <div className={cx('product')}>
            <div className={cx('product__title')}>
                Products
            </div>
            <div className={cx('product__list')}>
                <div className={cx('product__item')}>
                    <div className={cx('product__img')}>
                        <img src="img/product_home/girl-using-sexy-shirt-3-1200x1324-650x650.jpg" />
                        <img className={cx('img__change')} src="img/product_home/girl-using-sexy-shirt-2-1200x1324-600x600.jpg" />

                    </div>
                    <div className={cx('product__content')}>
                        <div className={cx('product__innercontent')}>
                            <span>Title</span>
                            <span>$135.00</span>
                            <button>ADD TO CART</button>
                            <div className={cx('product__icon')}>
                                <FontAwesomeIcon icon={faHeart} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('product__item')}>
                    <div className={cx('product__img')}>
                        <img src="img/product_home/model-wearing-summer-dress-1200x1324-650x650.jpg" />
                        <img className={cx('img__change')} src="img/product_home/model-wearing-summer-dress-2-1200x1324-600x600.jpg" />

                    </div>
                    <div className={cx('product__content')}>
                        <div className={cx('product__innercontent')}>
                            <span>Title</span>
                            <span>$135.00</span>
                            <button>ADD TO CART</button>
                            <div className={cx('product__icon')}>
                                <FontAwesomeIcon icon={faHeart} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('product__item')}>
                    <div className={cx('product__img')}>
                        <img src="img/product_home/man-wear-black-trench-coat-1200x1324-650x650.jpg" />
                        <img className={cx('img__change')} src="img/product_home/man-wear-black-trench-coat-2-1200x1324-600x600.jpg" />
                    </div>
                    <div className={cx('product__content')}>
                        <div className={cx('product__innercontent')}>
                            <span>Title</span>
                            <span>$135.00</span>
                            <button>ADD TO CART</button>
                            <div className={cx('product__icon')}>
                                <FontAwesomeIcon icon={faHeart} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('product__item')}>
                    <div className={cx('product__img')}>
                        <img src="img/product_home/model-wearing-stylish-polka-shirt-1200x1324-650x650.jpg" />
                        <img className={cx('img__change')} src="img/product_home/model-wearing-stylish-polka-shirt-4-1200x1324-600x600.jpg" />
                    </div>
                    <div className={cx('product__content')}>
                        <div className={cx('product__innercontent')}>
                            <span>Title</span>
                            <span>$135.00</span>
                            <button>ADD TO CART</button>
                            <div className={cx('product__icon')}>
                                <FontAwesomeIcon icon={faHeart} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('product__item')}>
                    <div className={cx('product__img')}>
                        <img src="img/product_home/model-wearing-white-t-shirt-1200x1324-650x650.jpg" />
                        <img className={cx('img__change')} src="img/product_home/model-wearing-white-t-shirt-2-1200x1324-600x600.jpg" />
                    </div>
                    <div className={cx('product__content')}>
                        <div className={cx('product__innercontent')}>
                            <span>Title</span>
                            <span>$135.00</span>
                            <button>ADD TO CART</button>
                            <div className={cx('product__icon')}>
                                <FontAwesomeIcon icon={faHeart} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('product__item')}>
                    <div className={cx('product__img')}>
                        <img src="img/product_home/teen-wear-loose-fit-1200x1324-600x600.jpg" />
                        <img className={cx('img__change')} src="img/product_home/teen-wear-loose-fit-2-1200x1324-600x600.jpg" />
                    </div>
                    <div className={cx('product__content')}>
                        <div className={cx('product__innercontent')}>
                            <span>Title</span>
                            <span>$135.00</span>
                            <button>ADD TO CART</button>
                            <div className={cx('product__icon')}>
                                <FontAwesomeIcon icon={faHeart} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product