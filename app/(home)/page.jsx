import { Suspense, cache } from 'react'

import { getSortedPostsData, getAllClassification } from '../../utils/posts';
import HomeLayout from './client-layout';


import Link from 'next/link';


export const metadata = {
  title: 'Nanven Blog',
  description: '分享一切 , share anything',
}

export default async function Home() {

  const allPostsData = getStaticSortedPostsData();
  const allClassification = getStaticAllClassification();

  return (
    <Suspense fallback={<HomeLayoutFallback allPostsData={allPostsData} />}>
      <HomeLayout allPostsData={allPostsData} allClassification={allClassification} />
    </Suspense>
  )

}
function HomeLayoutFallback({ allPostsData }) {
  return (
    <div>
      <h2>全部文章</h2>
      <div>
        {allPostsData.map(({ id, classRoute, classification, title, description, image, date }) => (
          <div key={id} >
            <Link href={`/${classRoute}/${id}`}>
              <div>
                <div>
                  <h2>{title}</h2>
                  <span>{classification}</span>
                </div>
                <div>
                  <div>{date}</div>
                  <div>{description}</div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
export const getStaticAllClassification = cache(() => {
  const allClassification = getAllClassification()

  return allClassification;
})

export const getStaticSortedPostsData = cache(() => {
  const allPostsData = getSortedPostsData();

  return allPostsData;
})

