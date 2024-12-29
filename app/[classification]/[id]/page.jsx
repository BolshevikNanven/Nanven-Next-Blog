import { cache } from 'react'

import style from '@/styles/article.module.css'

import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'
import 'highlight.js/lib/languages/javascript'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare, faHeart } from '@fortawesome/free-solid-svg-icons'

import { Marked } from 'marked'
import { markedHighlight } from 'marked-highlight'


import { getAllPostIds, getPostData } from '@/utils/posts'
import NavBar from './nav-bar'


export async function generateMetadata({ params, searchParams }, parent) {
  const { classification, id } = await params;
  const postData = getStaticPostData({ classification, id });

  return {
    title: postData.title + '| Nanven Blog',
    description: postData.date + postData.description,
  }
}

export default async function Article({ params }) {
  const marked = new Marked(
    markedHighlight({
      langPrefix: 'hljs language-',
      highlight(code, lang) {
        console.log(lang);
        const language = hljs.getLanguage(lang) ? lang : 'plaintext'
        return hljs.highlight(code, { language }).value
      },
    }),
  )

  const postData = getStaticPostData(await params);

  return <>
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
            <img alt={postData.title} className='useDarkFilter' src={postData.image} />
          </div>
        </div>
        <div className='articleBody'>
          <div className='markdown-body' dangerouslySetInnerHTML={{ __html: marked.parse(postData.content) }} />
        </div>
      </div>
    </div>
    <NavBar content={postData.content} />
  </>
}

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths;
}

export const getStaticPostData = cache((params) => {

  const postData = getPostData(params.classification, params.id);

  return postData
})

