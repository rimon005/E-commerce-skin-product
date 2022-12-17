import React from 'react';
import css from './Header.module.css';
import Logo from '../../assets/logo.png'
import { CgShoppingBag } from 'react-icons/cg'
const Header = () => {
    return (
        <div className={css.container}>
            {/* Left side */}

            <div className={css.logo}>
                <img src={Logo} alt="" />
                <span>Amazon</span>
            </div>

            {/* Right side */}

            <div className={css.right}>
                <div className={css.menu}>
                    <ul className={css.menu}>
                        <li>Collections</li>
                        <li>Brands</li>
                        <li>New</li>
                        <li>Sales</li>
                        <li>ENG</li>
                    </ul>
                </div>

                <input placeholder='Search' type="text" className={css.search} />

                <CgShoppingBag className={css.cart} />
            </div>
        </div>
    );
};

export default Header;