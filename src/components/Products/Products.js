import React from 'react';
import css from './Products.module.css';
import Plane from '../../assets/plane.png';
import { ProductsData } from '../../data/products';
import { useState } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react'
const Products = () => {
    const [productsMenu, setProductsMenu] = useState(ProductsData);
    const [parent] = useAutoAnimate()
    const filter = (type) => {
        setProductsMenu(ProductsData.filter((product) => product.type === type))
    }
    return (
        <div className={css.container}>
            <img src={Plane} alt="" />
            <h1>Our Featured Products</h1>
            <div className={css.products}>
                <ul className={css.menu}>
                    <li onClick={() => setProductsMenu(ProductsData)}>ALL</li>
                    <li onClick={() => filter('skin care')}>Skin Care</li>
                    <li onClick={() => filter('conditioner')}>Conditioners</li>
                    <li onClick={() => filter('foundation')}>Foundations</li>
                </ul>


                <div className={css.list} ref={parent}>
                    {
                        productsMenu.map((product, i) => (
                            <div key={i} className={css.product}>
                                <div className='left-s'>
                                    <div className='name'>
                                        <span>{product.name}</span>
                                        <span>{product.detail}</span>
                                    </div>
                                    <span>${product.price}</span>
                                    <div>Shop now</div>
                                </div>
                                <img src={product.img} alt="" className='img-p' />
                            </div>

                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;