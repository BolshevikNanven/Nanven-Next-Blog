import style from './/index.module.css'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from "next/router";

import React from 'react'


const Header=(props)=>{

    const {isMenuOpen,switchMenuOpen}=props;
    const {isDarkmode,switchDarkmode}=props;

    const Router=useRouter();

    const menustate=isMenuOpen ? `${style.menubtn} ${style.menuOpen}`: style.menubtn;
    const logodarkstate=isDarkmode ? `${style.logo} ${style.logoWhite}`: style.logo;


    return (
        <div className={style.HeaderBox}>
            <div className={style.Header}>
                <button className={menustate} onClick={switchMenuOpen}>
                    <div className={style.burgerTop}></div>
                    <div className={style.burgerMid}></div>
                    <div className={style.burgerBot}></div>
                </button>
                <div className={logodarkstate}></div>
                <div className={style.headerSpace}></div>
                <div className={`${style.headerBtn} ${Router.pathname=='/' ? `${style.none}`: ''}`}>
                    <Link href='/'>
                        <FontAwesomeIcon icon={['fas','reply']} size='xs' fixedWidth />
                    </Link>
                </div>
                <div className={style.cutbar}></div>
                <div>
                    <div className={style.headerBtn} onClick={switchDarkmode}>
                        <FontAwesomeIcon icon={['fas',`${isDarkmode ? 'moon' :'sun'}`]} size='sm' fixedWidth />
                    </div>
                </div>
            </div>
        </div>
    )

}


export default Header;