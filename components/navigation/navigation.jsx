"use client"
import style from './index.module.css';

import NavigationItem from './navigation-item';

import { faParagraph, faPaperclip, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Navigation = ({ isMenuOpen, switchMenuOpen, allClassification }) => {


    const menublankstate = isMenuOpen ? style.menuBoxBlank : `${style.menuBoxBlank} ${style.menuBoxBlankClose}`;
    const menustate = isMenuOpen ? style.menuBox : `${style.menuBox} ${style.menuBoxClose}`;

    const handleClickMenu = () => {
        if (window.innerWidth < 620) switchMenuOpen(false);
    }

    const getClassificationLink = () => {
        return Object.keys(allClassification).map(className => {
            return { param: className, route: `/home?class=${className}`, label: allClassification[className] }
        })
    }

    return (
        <>
            <div className={menublankstate}></div>
            <div className={menustate}>
                <div className={style.menu}>
                    <div className={style.menuBody}>
                        <NavigationItem
                            onClick={handleClickMenu}
                            route='/home'
                            extraMatch={Object.keys(allClassification).map(className => ('/' + className))}
                            icon={faParagraph}
                            label='文章'
                            foldLink={getClassificationLink()}
                        />
                        <NavigationItem
                            onClick={handleClickMenu}
                            route='/friend'
                            icon={faPaperclip}
                            label='友情链接'
                        />
                        <span className={style.subheader}>与我联系</span>
                        <NavigationItem
                            outlink
                            route='mailto:icedeerwanna@outlook.com'
                            icon={faEnvelope}
                            label='邮箱'
                        />
                        <NavigationItem
                            outlink
                            route='https://github.com/BolshevikNanven/'
                            icon={faGithub}
                            label='Github'
                        />
                    </div>
                </div>
            </div>
        </>
    )


}


export default Navigation;