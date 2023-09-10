import Head from 'next/head'
import Image from 'next/image'

import { getAllPostIds, getPostData } from '../../utils/posts'

import style from './article.module.css'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'
import javascript from 'highlight.js/lib/languages/javascript'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useEffect } from 'react'

import MarkdownNavbar from 'markdown-navbar'


const Article = ({ postData }) => {

  useEffect(() => {
    hljs.registerLanguage('jsx', javascript);
    hljs.highlightAll();
  },[])

  return (
    <>
      <Head>
        <title>Nanven Blog | {postData.title}</title>
        <meta name="description" content={postData.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={style.mainBox}>
        <div className={style.articleMain}>
          <div className={style.articleHead}>
            <p className={style.date}>{postData.date}</p>
            <h1 className={style.title}>{postData.title}</h1>
            <div className={style.descriptionContainer}>
              <p className={style.description}>{postData.description}</p>
              <div className={style.actionContainer}>
                <button className={style.actionBtn}><FontAwesomeIcon icon={['fas', 'share']} fixedWidth />转发</button>
                <button className={style.actionBtn}><FontAwesomeIcon icon={['fas', 'heart']} fixedWidth />喜欢</button>
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

export default Article;

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}


export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}