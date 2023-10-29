
import { Suspense, cache } from 'react'

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
    <Suspense fallback={<ArticleLayoutFallback postData={postData} />}>
      <ArticleLayout postData={postData} />
    </Suspense>

  )

}

function ArticleLayoutFallback({ postData }) {
  return (
    <div>
      <div>
        <p>{postData.date}</p>
        <h1>{postData.title}</h1>
        <div>
          <p>{postData.description}</p>
        </div>
        <div >
          <img alt={postData.title} src={postData.image} />
        </div>
      </div>
      <div >
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>
    </div>
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

