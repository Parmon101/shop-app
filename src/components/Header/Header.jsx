import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import cart from '../../assets/cart.svg';
import { Search } from '../ Search/Search';

export const Header = () => {
    const { totalPrice, items } = useSelector((state) => state.cart);

    const totalCout = items.reduce((sum, item) => sum + item.count, 0);

    return (
        <div className="header">
            <div className="container">
                <Link to="/">
                    <div className="header__logo">
                        <img width="60" src={logo} alt="logo" />
                        <div>
                            <h1>Shop</h1>
                            <p> так вкусно, что скулы сводит </p>
                        </div>
                    </div>
                </Link>
                <Search />
                <div className="header__cart">
                    <Link to="/cart" className="button button--cart">
                        <span>{totalPrice} ₽</span>
                        <div className="button__delimiter"></div>
                        <img className="button__img--cart" width="20" src={cart} alt="cart" />
                        <span>{totalCout}</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};
