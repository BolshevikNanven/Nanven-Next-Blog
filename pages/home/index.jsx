import Head from 'next/head';
import Link from 'next/link';

import { getSortedPostsData } from '../../utils/posts';
import { LoadingImg } from '../../components/LoadingImg/loading-img';

import style from './home.module.css';

export default function Home({ allPostsData }) {

    return (
        <>
            <Head>
                <title>Nanven Blog</title>
                <meta name="description" content="Nanven 's Blog" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={style.homeContainer}>
                {allPostsData.map(({ id, title, description, image, date }) => {

                    return (
                        <div key={id} className={style.acticleContainer}>
                            <Link href={`/article/${id}`}>
                                <a className={style.acticle}>
                                    <div className={style.acticleHeader}>
                                        <div className={style.titleContainer}>
                                            <h2 className={style.title}>{title}</h2>
                                        </div>
                                        <div className={style.descriptionContainer}>
                                            <div className={style.date}>{date}</div>
                                            <div className={style.description}>{description}</div>
                                        </div>
                                    </div>
                                    <LoadingImg rectangle className={`${style.acticleImage} useDarkFilter`} src={image} />
                                </a>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </>

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