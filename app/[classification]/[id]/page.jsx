
import { cache } from 'react'

import { getAllPostIds, getPostData } from '@/utils/posts'
import ArticleLayout from './client-layout';


export async function generateMetadata({ params, searchParams }, parent) {

  const postData = await getStaticPostData(params);

  return {
    title: postData.title + '| Nanven Blog',
    description: postData.date + postData.description,
  }
}

export default async function Article({ params }) {

  const postData = await getStaticPostData(params);

  return (
    <ArticleLayout postData={postData} />
  )

}

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths;
}

export const getStaticPostData = cache(async (params) => {

  const postData = await getPostData(params.classification, params.id);

  return postData
})
