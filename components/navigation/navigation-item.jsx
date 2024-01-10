import { useState } from 'react';
import style from './index.module.css';

import NavLink from './navlink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const NavigationItem = ({ route, exact, extraMatch, foldLink, label, icon, onClick = () => { }, outlink = false }) => {

    const [foldState, setFoldState] = useState(true);

    const handleClickFold = (e) => {
        e.preventDefault()
        e.stopPropagation()
        e.nativeEvent.stopImmediatePropagation();
        setFoldState(!foldState);
    }

    if (!outlink) {
        return (
            <>
                <NavLink href={route} exact={exact} extraMatch={extraMatch || null}>
                    <div className={style.menuList} onClick={onClick}>
                        <span className={style.menuListIcon}>
                            <FontAwesomeIcon icon={icon} fixedWidth />
                        </span>
                        <span className={style.menuListContent}>{label}</span>
                        {foldLink &&
                            <button onClick={handleClickFold} className={`${style.menuFoldBtn} ${foldState && 'active'}`}>
                                <FontAwesomeIcon icon={faAngleDown} size='xs' fixedWidth />
                            </button>
                        }
                    </div>
                </NavLink>
                {foldLink &&
                    <div className={`${style.foldLinkContainer} ${foldState && 'active'}`}>
                        {foldLink.map(link => (
                            <NavLink key={link.route} param={link.param} href={link.route} extraMatch={link.extraMatch || null}>
                                <div className={style.menuFoldList} onClick={onClick}>
                                    <span className={style.foldBefore}></span>
                                    <span className={style.menuListContent}>{link.label}</span>
                                </div>
                            </NavLink>
                        ))}
                    </div>
                }
            </>
        )
    } else return (
        <a href={route} rel="noreferrer" target='_blank' className={style.menuList}>
            <span className={style.menuListIcon}>
                <FontAwesomeIcon icon={icon} fixedWidth />
            </span>
            <span className={style.menuListContent}>{label}</span>
        </a>
    )
}

export default NavigationItem;