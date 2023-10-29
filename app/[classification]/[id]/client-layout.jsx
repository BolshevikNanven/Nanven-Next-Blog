"use client"

import style from '@/styles/article.module.css'


import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'
import 'highlight.js/lib/languages/javascript'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare, faHeart } from '@fortawesome/free-solid-svg-icons'

import { useEffect } from 'react'

import MarkdownNavbar from 'markdown-navbar'


export default function ArticleLayout({ postData }) {

    useEffect(() => {
        hljs.highlightAll();
    }, [])

    return (
        <>
            <div className={style.mainBox}>
                <div className={style.articleMain}>
                    <div className={style.articleHead}>
                        <p className={style.date}>{postData.date}</p>
                        <h1 className={style.title}>{postData.title}</h1>
                        <div className={style.descriptionContainer}>
                            <p className={style.description}>{postData.description}</p>
                            <div className={style.actionContainer}>
                                <button className={style.actionBtn}><FontAwesomeIcon icon={faShare} fixedWidth />转发</button>
                                <button className={style.actionBtn}><FontAwesomeIcon icon={faHeart} fixedWidth />喜欢</button>
                            </div>
                        </div>
                        <div className={style.image}>
                            <img className='useDarkFilter' src={postData.image} />
                        </div>
                    </div>
                    <div className='articleBody'>
                        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                    </div>
                </div>
            </div>
            <MarkdownNavbar className={style.navBar} ordered={false} headingTopOffset={40} source={postData.defaultContent} />
        </>
    )
}