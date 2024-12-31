"use client"

import style from './/index.module.css'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

import { usePathname } from 'next/navigation';

import React from 'react'
import Search from '../search/search';
import { useDarkMode } from '../theme/theme-provider';


const Header = ({ isMenuOpen, switchMenuOpen, allPostsData }) => {
    const [darkMode, setDarkMode] = useDarkMode()
    const pathname = usePathname();

    const menuClassName = isMenuOpen ? `${style.menubtn} ${style.menuOpen}` : style.menubtn;
    const logoClassName = darkMode ? `${style.logo} ${style.logoWhite}` : style.logo;

    const switchDarkmode = () => {
        setDarkMode(!darkMode)
    }

    return (
        <div className={style.HeaderBox}>
            <div className={style.Header}>
                <button className={menuClassName} onClick={switchMenuOpen}>
                    <div className={style.burgerTop}></div>
                    <div className={style.burgerMid}></div>
                    <div className={style.burgerBot}></div>
                </button>
                <div className={logoClassName}></div>
                <div className={style.headerSpace}></div>
                <Search allPostsData={allPostsData} />
                <Link href='/'>
                    <div className={`${style.headerBtn} ${pathname === '/' && style.none}`}>
                        <FontAwesomeIcon icon={faReply} fixedWidth />
                    </div>
                </Link>
                <div className={style.cutbar}></div>
                <div>
                    <div className={style.headerBtn} onClick={switchDarkmode}>
                        <FontAwesomeIcon icon={darkMode ? faMoon : faSun} fixedWidth />
                    </div>
                </div>
            </div>
        </div>
    )

}


export default Header;