import React from 'react';
import css from './Virtual.module.css'
import Sahde from '../../assets/shade.png'
import ReactCompareImage from 'react-compare-image';
import Before from '../../assets/before.png'
import After from '../../assets/after.png'
const Virtual = () => {
    return (
        <div className={css.virtual}>
            {/* left side */}

            <div className={css.left}>
                <span>Virtual Try-On</span>
                <span>Never Buy the wrong Shade Again</span>
                <span>Try Now!</span>
                <img src={Sahde} alt="" />
            </div>

            {/* right side */}

            <div className={css.right}>
              <div className={css.wrapper}>
              <ReactCompareImage leftImage={Before} rightImage={After} />
              </div>
            </div>
        </div>
    );
};

export default Virtual;