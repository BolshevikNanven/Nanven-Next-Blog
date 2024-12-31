import { cache, Suspense } from 'react'

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import "@fortawesome/fontawesome-svg-core/styles.css";
import '@/styles/global.css';
import '@/styles/sspai.css'

import BaseLayout from '@/app/client-layout';
import { ThemeProvider } from '@/components/theme/theme-provider';

import { getSortedPostsData, getAllClassification } from '@/utils/posts';


export const metadata = {
  title: 'Nanven Blog',
  description: '分享一切 , share anything',
}

export default async function RootLayout({ children }) {

  const allClassification = await getStaticAllClassification();
  const allPostsData = await getStaticSortedPostsData();

  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <div className='base'>
            <Suspense>
              <BaseLayout allClassification={allClassification} allPostsData={allPostsData} />
            </Suspense>
            <div className='main'>
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
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


