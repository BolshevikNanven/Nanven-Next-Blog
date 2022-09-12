import Layout from "../components/layout";
import React,{useState} from 'react'
import '../components/fontawesome';

import '../styles/global.css';
import '../public/all.css';
import '../styles/sspai.css';



function Myapp({ Component, pageProps}){


    return(
        <div>
            <Layout>
            <Component {...pageProps}/>
            </Layout>
        </div>
    );

}

export default Myapp;