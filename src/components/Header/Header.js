import React from 'react';
import css from './Header.module.css';
import Logo from '../../assets/logo.png'
import { CgShoppingBag } from 'react-icons/cg'
import { GoThreeBars } from 'react-icons/go'
import { useState } from 'react';
const Header = () => {
    const [showMenu, setShowMenu] = useState(true);

    const toggleMenu = () => {
        setShowMenu((showMenu) => !showMenu)
    }
    return (
        <div className={css.container}>
            {/* Left side */}

            <div className={css.logo}>
                <img src={Logo} alt="" />
                <span>Amazon</span>
            </div>

            {/* Right side */}

            <div className={css.right}>

                <div className={css.bars} onClick={toggleMenu}>
                    <GoThreeBars />
                </div>

                <ul className={css.menu} style={{ display: showMenu ? 'inherit' : 'none' }}>
                    <li>Collections</li>
                    <li>Brands</li>
                    <li>New</li>
                    <li>Sales</li>
                    <li>ENG</li>
                </ul>

                <input placeholder='Search' type="text" className={css.search} />

                <CgShoppingBag className={css.cart} />
            </div>
        </div>
    );
};

export default Header;