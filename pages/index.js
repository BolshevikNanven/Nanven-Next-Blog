import Head from 'next/head';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import style from '../styles/home.module.css';



export default function Home({allPostsData}) {
  return (
    <div >
      <Head>
        <title>Nanven Blog</title>
        <meta name="description" content="Nanven 's Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {allPostsData.map(({id,title,description,date})=>(
        <div className={style.card}>
          <div className={style.headDate}>
            <span className={style.pot}></span>
            <p className={style.date}>{date}</p>
          </div>
          <div className={style.cardBodyBox}>
            <div className={style.cardBody}>
              <Link href={`/acticle/${id}`}><a className={style.title}>{title}</a></Link>
              <p className={style.description}>{description}</p>
            </div>
            <div className={style.botbar}>
              <span className={style.spot}><FontAwesomeIcon icon={['fas','chevron-circle-right']} size='xs' fixedWidth /></span>
              <Link href={`/acticle/${id}`}><a>阅读全文</a></Link>
            </div>
          </div>
        </div>
      ))}
      <div className={style.headstart}>起点</div>

    </div>
  )
}


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}