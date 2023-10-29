import { Suspense, cache } from 'react'

import { getSortedPostsData, getAllClassification } from '../../utils/posts';
import HomeLayout from './client-layout';

import style from '@/styles/home.module.css'

import { LoadingImg } from '../../components/image/loading-img';

import Link from 'next/link';


export const metadata = {
  title: 'Nanven Blog',
  description: '分享一切 , share anything',
}

export default async function Home() {

  const allPostsData = await getStaticSortedPostsData();
  const allClassification = await getStaticAllClassification();

  return (
    <Suspense fallback={<HomeLayoutFallback allPostsData={allPostsData} />}>
      <HomeLayout allPostsData={allPostsData} allClassification={allClassification} />
    </Suspense>
  )

}
export const getStaticAllClassification = cache(async () => {
  const allClassification = getAllClassification()

  return allClassification;

})

export const getStaticSortedPostsData = cache(async () => {
  const allPostsData = await getSortedPostsData();
  return allPostsData;

})

function HomeLayoutFallback({ allPostsData }) {
  return (
    <div className={style.homeBase}>
      <h2 className={style.homeTitle}>全部文章</h2>
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