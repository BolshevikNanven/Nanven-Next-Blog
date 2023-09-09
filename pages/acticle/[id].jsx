import Head from 'next/head'
import { getAllPostIds, getPostData } from '../../utils/posts'

import style from './acticle.module.css'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'
import javascript from 'highlight.js/lib/languages/javascript'
import { useEffect } from 'react'

import MarkdownNavbar from 'markdown-navbar'


const Acticle = ({ postData }) => {

  useEffect(() => {
    hljs.registerLanguage('jsx', javascript);
    hljs.highlightAll();
  })

  return (
    <>
      <Head>
        <title>Nanven Blog | {postData.title}</title>
        <meta name="description" content={postData.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={style.mainBox}>
        <div className={style.acticleMain}>
          <div className={style.acticleHead}>
            <h1 className={style.title}>{postData.title}</h1>
            <p className={style.date}>{postData.date}</p>
          </div>
          <div className={style.hr}></div>
          <div className='ActicleBody'>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </div>
        </div>
      </div>

      <MarkdownNavbar className={style.navBar} ordered={false} headingTopOffset={40} source={postData.defaultContent} />

    </>

  )

}

export default Acticle;

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