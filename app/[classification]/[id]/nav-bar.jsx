'use client'
import MarkdownNavbar from 'markdown-navbar'

import style from '@/styles/article.module.css'

export default function ({content}) {
    return (
        <MarkdownNavbar className={style.navBar} ordered={false} headingTopOffset={40} source={content} />
    )
}