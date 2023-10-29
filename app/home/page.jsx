import { cache } from 'react'

import { getSortedPostsData, getAllClassification } from '../../utils/posts';
import HomeLayout from './client-layout';

export const metadata = {
  title: 'Nanven Blog',
  description: '分享一切 , share anything',
}

export default async function Home() {

  const allPostsData = await getStaticSortedPostsData();
  const allClassification = await getStaticAllClassification();

  return (
    <HomeLayout allPostsData={allPostsData} allClassification={allClassification} />
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
