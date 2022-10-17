import Head from 'next/head';
import Link from 'next/link';


import { getSortedPostsData } from '../lib/posts';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import style from '../styles/home.module.css';
import Img from "react-cool-img";




export default function Home({allPostsData}) {

  return (
    <div className={style.home}>
      <Head>
        <title>Nanven Blog</title>
        <meta name="description" content="Nanven 's Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2 style={{marginLeft:'10px',cursor:'default'}}>置顶</h2>
      {allPostsData.map(({id,title,description,image,date,top,rgb})=>{

        if(top){ 
          
          if(rgb!==undefined){
            var rgbcolor='rgb('+rgb[0]+','+rgb[1]+','+rgb[2]+')';
          }


          return(
            <div key={id} className={style.topBox}>
              <div className={style.topCard}>
                <Img src={image} className={style.topImg} />
                <div style={{backgroundColor:rgbcolor}} className={style.topTextBox}>
                  <a className={style.topTitle}>{title}</a>
                  <div style={{backgroundImage:'linear-gradient(rgba(0,0,0,0),'+rgbcolor+')'}} className={style.mask}>
                    <span className={style.topDate}>{date}</span>
                  </div>
                </div>
              </div>
            </div>

          )
          
          

        }else{
          
          return(

            <div key={id} className={style.card}>
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

          )

        }
      })}


      <div className={style.headstart}>起点</div>

    </div>
  )
}


export async function getStaticProps() {
  const allPostsData =await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}