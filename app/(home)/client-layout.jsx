"use client"

import style from '@/styles/home.module.css'

import { LoadingImg } from '../../components/image/loading-img';

import Link from 'next/link';



export default function HomeLayout({ allPostsData, allClassification, searchParams }) {

    const selectedClass = searchParams.class || null;

    if (selectedClass) {
        allPostsData = allPostsData.filter(post => post.classRoute === selectedClass);
    }

    return (
        <div className={style.homeBase}>
            <h2 className={style.homeTitle}>{allClassification[selectedClass] || '全部文章'}</h2>
            <div className={style.homeContainer}>
                {allPostsData.map(({ id, classRoute, classification, title, description, image, date }) => (
                    <div key={id} className={style.acticleContainer}>
                        <Link className={style.acticle} href={`/${classRoute}/${id}`}>
                            <div className={style.acticleHeader}>
                                <div className={style.titleContainer}>
                                    <h2 className={style.title}>{title}</h2>
                                    <span className={style.classification}>{classification}</span>
                                </div>
                                <div className={style.descriptionContainer}>
                                    <div className={style.date}>{date}</div>
                                    <div className={style.description}>{description}</div>
                                </div>
                            </div>
                            <LoadingImg rectangle className={`${style.acticleImage} useDarkFilter`} src={image} />

                        </Link>
                    </div>
                ))}
            </div>
        </div>

    )
}