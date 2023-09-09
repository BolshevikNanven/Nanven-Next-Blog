import Head from 'next/head';
import Link from 'next/link';


import { getSortedPostsData } from '../../utils/posts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import style from './index.module.css';
import Img from "react-cool-img";


export default function Home({ allPostsData }) {

  const checkColorDark = (rgb) => {
    const g = rgb[0] * 0.299 + rgb[1] * 0.587 + rgb[2] * 0.114;
    return g > 192;
  }



  return (
    <div className={style.home}>
      <Head>
        <title>Nanven Blog</title>
        <meta name="description" content="Nanven 's Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CategorySelector value='全部' />
      {allPostsData.map(({ id, title, description, image, date, top, rgb }) => {
        if (top) {
          if (rgb !== undefined) {
            var rgbcolor = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
          }

          return (
            <div key={id} className={style.topBox}>
              <Link href={`/acticle/${id}`} >
                <a className={style.topCard + ' useDarkFilter'}>
                  <Img src={image} className={style.topImg} />
                  <div style={{ backgroundColor: rgbcolor }} className={style.topTextBox}>
                    <a style={{ color: checkColorDark(rgb) ? '#111111' : '#fafafa' }} className={style.topTitle}>{title}</a>
                    <div style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0),' + rgbcolor + ')' }} className={style.mask}>
                      <span style={{ color: checkColorDark(rgb) ? '#111111' : '#fafafa' }} className={style.topDate}>{date}</span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          )

        } else {

          return (
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
                  <span className={style.spot}><FontAwesomeIcon icon={['fas', 'chevron-circle-right']} size='xs' fixedWidth /></span>
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

function CategorySelector({ open = false, onOpen, value, onSelectOption, selectedOptions, ...props }) {


  return (
    <div className={style.CategorySelectorBox}>
      <div className={style.CategorySelector}>
        <div className={style.selectedHeader}>
          <h2 className={style.selectedValue}>{value}</h2>
          <FontAwesomeIcon className={style.icon} icon={['fas', 'chevron-down']} size='1x' fixedWidth />
        </div>
        {open ?
          <div className={style.selectListBox}>
            {selectedOptions?.filter(option => option.value !== value).map(option => (
              <div key={option.value} className={style.selectList}>
                {option.label}
              </div>
            ))}
          </div>
          : null}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}