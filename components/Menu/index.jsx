import style from './/index.module.css';
import Link from "next/link";
import { useRouter } from "next/router";
import React,{Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Menu =(props)=>{

    const {isMenuOpen,switchMenuOpen} = props;
    const Router=useRouter();


    const menublankstate= isMenuOpen ? style.menuBoxBlank : `${style.menuBoxBlank} ${style.menuBoxBlankClose}`;
    const menustate= isMenuOpen ? style.menuBox : `${style.menuBox} ${style.menuBoxClose}`;

    return(
        <>
        <div className={menublankstate}></div>
        <div className={menustate}>
            <div className={style.menu}>
                <div className={style.menuBody}>
                    <Link href='/'><div className={`${style.menuList} ${Router.pathname=='/'? `${style.active}`: ''}`}>
                        <span className={style.menuListIcon}>
                            <FontAwesomeIcon icon={['fas','paragraph']} size='xs' fixedWidth />
                        </span>
                        <a className={style.menuListContent}>文章</a>
                    </div></Link>
                    <Link href='/friend'><div className={`${style.menuList} ${Router.pathname=='/friend'? `${style.active}`: ''}`}>
                        <span className={style.menuListIcon}>
                            <FontAwesomeIcon icon={['fas','paperclip']} size='xs' fixedWidth />
                        </span>
                        <a className={style.menuListContent}>友情链接</a>
                    </div></Link>
                    <a href='https://nanvendrive.icedeer.net/' target='_blank' className={style.menuList}>
                        <span className={style.menuListIcon}>
                            <FontAwesomeIcon icon={['fas','folder-open']} size='xs' fixedWidth />
                        </span>
                        <span className={style.menuListContent}>文件站</span>
                    </a>
                    <div className={style.subheader}>与我联系</div>
                    <a href='mailto:icedeerwanna@outlook.com' target='_blank' className={style.menuList}>
                        <span className={style.menuListIcon}>
                            <FontAwesomeIcon icon={['fas','envelope']} size='xs' fixedWidth />
                        </span>
                        <span className={style.menuListContent}>邮箱</span>
                    </a>
                    <a href='https://github.com/BolshevikNanven/' target='_blank' className={style.menuList}>
                        <span className={style.menuListIcon}>
                            <FontAwesomeIcon icon={['fab','github']} size='xs' fixedWidth />
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