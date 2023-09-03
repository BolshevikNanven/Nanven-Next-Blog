import Header from '../components/Header'
import Menu from '../components/Menu'

import { useState } from 'react';

import '../components/Fontawesome';

import '../styles/global.css';
import '../styles/fontawesome.css';
import '../styles/sspai.css';



function Myapp({ Component, pageProps }) {

    const [is_MenuOpen,switch_MenuOpen]=useState(true);
    const [is_Darkmode,switch_Darkmode]=useState(false);

    return (
        <>
            <Header isMenuOpen={is_MenuOpen} switchMenuOpen={()=>{switch_MenuOpen(!is_MenuOpen)}}
            isDarkmode={is_Darkmode} switchDarkmode={()=>{switch_Darkmode(!is_Darkmode)}}/>
            <div className='base'>
                <Menu isMenuOpen={is_MenuOpen} switchMenuOpen={()=>{switch_MenuOpen(!is_MenuOpen)}}/>
                <div className='main'>
                    <Component {...pageProps}/>
                </div>
            </div>
        </>
    );

}

export default Myapp;