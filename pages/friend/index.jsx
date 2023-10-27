import Head from 'next/head';


import friends from '../../data/friendsdata'
import style from './index.module.css'

import { LoadingImg } from '../../components/LoadingImg/loading-img';


export default function Friend() {
    return (
        <div className={style.friendBox}>
            <Head>
                <title>Nanven Blog | Friend</title>
                <meta name="description" content="Nanven 's friend" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h2 className={style.title}>友情链接</h2>
            <div className={style.friendContainer}>
                {friends.map((link) => {
                    return (
                        <a key={link.name} className={style.cardBox} href={link.href} target='_blank' rel="noreferrer">
                            <div className={style.iconContainer}>
                                <LoadingImg className={style.icon} src={link.icon == '' ? `${link.href}/favicon.ico` : link.icon} />
                            </div>
                            <span className={style.detail}>
                                <p className={style.name}>{link.name}</p>
                                <p className={style.description}>{link.description}</p>
                            </span>
                        </a>
                    )
                })}
            </div>
        </div>
    );
}
