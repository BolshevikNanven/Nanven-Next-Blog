"use client"

import style from '@/styles/home.module.css'

import { LoadingImg } from '../../components/image/loading-img'

import Link from 'next/link'
import { useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';

var sTop = 0
var ticking = false

export default function HomeLayout({ allPostsData, allClassification }) {
    const searchParams = useSearchParams()
    const headRef = useRef()

    const selectedClass = searchParams.get('class')

    if (selectedClass) {
        allPostsData = allPostsData.filter(post => post.classRoute === selectedClass);
    }


    useEffect(() => {
        sTop = 0
        ticking = false
        const scroll = () => {
            if (!ticking && headRef.current) {
                window.requestAnimationFrame(() => {
                    if (window.scrollY > sTop && window.scrollY > 180) {
                        if (headRef.current.style.opacity !== '0') {
                            headRef.current.style.opacity = '0'
                        }
                    } else {
                        if (headRef.current.style.opacity !== '1') {
                            headRef.current.style.opacity = '1'
                        }
                    }
                    sTop = window.scrollY

                    ticking = false
                })
                ticking = true
            }
        }

        document.addEventListener('scroll', scroll)

        return () => removeEventListener('scroll', scroll)

    }, [headRef])

    return (
        <div className={style.homeBase}>
            <div ref={headRef} className={style.homeTitleContainer}>
                <h2 className={style.homeTitle}>{allClassification[selectedClass] || '全部文章'}</h2>
            </div>
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