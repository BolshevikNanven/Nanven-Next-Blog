import { Suspense, cache } from 'react'

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import '@/styles/global.css';
import '@/styles/sspai.css';

import { Inter } from 'next/font/google'

import BaseLayout from '@/app/client-layout';

import { getAllClassification } from '@/utils/posts';


const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Nanven Blog',
  description: '分享一切 , share anything',
}

function RootLayoutFallback() {
  return (
    <>
      <div className='headerLayout'></div>
      <div className='navigationLayout'></div>
    </>
  )
}

export default async function RootLayout({ children }) {

  const allClassification = await getStaticAllClassification();

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='base'>
          <Suspense fallback={<RootLayoutFallback />}>
            <BaseLayout allClassification={allClassification} />
          </Suspense>
          <div className='main'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}

export const getStaticAllClassification = cache(async () => {

  const allClassification = getAllClassification()

  return allClassification;
})


