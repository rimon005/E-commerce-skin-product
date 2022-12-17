import React from 'react';
import css from './Footer.module.css'
import Logo from '../../assets/logo.png';
import {
    InboxIcon,
    PhoneIcon,
    LocationMarkerIcon,
    LoginIcon,
    UsersIcon,
    LinkIcon

} from '@heroicons/react/outline'

const Footer = () => {
    return (
        <div className={css.cFooterWrapper}>
            <hr />
            <div className={css.cFooter}>
                <div className={css.logo}>
                    <img src={Logo} alt="" />
                    <span>Amazon</span>
                </div>

                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Contact Us</span>
                        <span className={css.pngLine}>
                            <LocationMarkerIcon className={css.icon} />
                            <span>111 north avenue Orlando , FL 32801</span>
                        </span>

                        <span className={css.pngLine}>
                            <PhoneIcon className={css.icon} />
                            <a href="tel:+8801734942081">+88 017 3494-2081</a>
                        </span>
                        <span className={css.pngLine}>
                            <InboxIcon className={css.icon} />
                            <a href="mailto:support@amazon">support@amazon.com</a>
                        </span>
                    </div>
                </div>


                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Account</span>
                        <span className={css.pngLine}>
                            <LoginIcon className={css.icon} />
                            <span>Sign In</span>
                        </span>
                    </div>
                </div>


                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Company</span>
                        <span className={css.pngLine}>
                            <UsersIcon className={css.icon} />
                            <span>About us</span>
                        </span>
                    </div>
                </div>


                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Resources</span>
                        <span className={css.pngLine}>
                            <LinkIcon className={css.icon} />
                            <span>Safety Privacy and terms</span>
                        </span>
                    </div>
                </div>
            </div>
            <div className={css.copyRight}>
                <span>CopyRight @2023 by Amazon , Inc</span>
                <span>All rights reserved</span>
            </div>
        </div>
    );
};

export default Footer;