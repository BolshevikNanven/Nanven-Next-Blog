import style from './index.module.css';

import { NavLink } from '../NavLink';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Menu = (props) => {

    const { isMenuOpen, switchMenuOpen } = props;


    const menublankstate = isMenuOpen ? style.menuBoxBlank : `${style.menuBoxBlank} ${style.menuBoxBlankClose}`;
    const menustate = isMenuOpen ? style.menuBox : `${style.menuBox} ${style.menuBoxClose}`;

    const handleClickMenu = () => {
        if (window.innerWidth < 620) switchMenuOpen(false);
    }

    return (
        <>
            <div className={menublankstate}></div>
            <div className={menustate}>
                <div className={style.menu}>
                    <div className={style.menuBody}>

                        <NavLink href='/home' extraMatch={'/article'}>
                            <div className={style.menuList} onClick={handleClickMenu}>
                                <span className={style.menuListIcon}>
                                    <FontAwesomeIcon icon={['fas', 'paragraph']} size='xs' fixedWidth />
                                </span>
                                <a className={style.menuListContent}>文章</a>
                            </div>
                        </NavLink>

                        <NavLink href='/friend' >
                            <div className={style.menuList} onClick={handleClickMenu}>
                                <span className={style.menuListIcon}>
                                    <FontAwesomeIcon icon={['fas', 'paperclip']} size='xs' fixedWidth />
                                </span>
                                <a className={style.menuListContent}>友情链接</a>
                            </div>
                        </NavLink>
                        <div className={style.subheader}>与我联系</div>
                        <a href='mailto:icedeerwanna@outlook.com' rel="noreferrer" target='_blank' className={style.menuList}>
                            <span className={style.menuListIcon}>
                                <FontAwesomeIcon icon={['fas', 'envelope']} size='xs' fixedWidth />
                            </span>
                            <span className={style.menuListContent}>邮箱</span>
                        </a>
                        <a href='https://github.com/BolshevikNanven/' rel="noreferrer" target='_blank' className={style.menuList}>
                            <span className={style.menuListIcon}>
                                <FontAwesomeIcon icon={['fab', 'github']} size='xs' fixedWidth />
                            </span>
                            <span className={style.menuListContent}>Github</span>
                        </a>

                    </div>
                </div>
            </div>
        </>
    )


}


export default Menu;