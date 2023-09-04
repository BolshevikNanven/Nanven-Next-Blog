import Header from '../components/Header'
import Menu from '../components/Menu'
import ThemeProvider from '../components/ThemeProvider';

import { useEffect, useState } from 'react';

import '../components/Fontawesome';

import '../styles/global.css';
import '../styles/fontawesome.css';
import '../styles/sspai.css';


function Myapp({ Component, pageProps }) {

    const [isMenuOpen, switchMenuOpen] = useState(false);
    const [isDarkmode, switchDarkmode] = useState(false);

    useEffect(() => {
        //设置移动端
        if (window.innerWidth > 620) switchMenuOpen(true);

        //设置黑暗模式
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) switchDarkmode(true);

    }, [])

    return (
        <ThemeProvider theme={isDarkmode ? Theme.dark : Theme.light}>
            <Header
                isMenuOpen={isMenuOpen} switchMenuOpen={() => { switchMenuOpen(!isMenuOpen) }}
                isDarkmode={isDarkmode} switchDarkmode={() => { switchDarkmode(!isDarkmode) }}
            />
            <div className='base'>
                <Menu isMenuOpen={isMenuOpen} switchMenuOpen={() => { switchMenuOpen(!isMenuOpen) }} />
                <div className='main'>
                    <Component {...pageProps} />
                </div>
            </div>
        </ThemeProvider>
    );
}

const Theme = {
    light: {
        backgroundColor: '#ffffff',
        fontColorMain: '#000000',
        fontColorSub: '#585a5a',
        fontColorbot: '#959695',
        headerColor: '#f5f5f5',
        headerDivider: '#e2e2e2',
        btnHoverColor: 'rgba(0,0,0,.1)',
    },
    dark: {
        backgroundColor: '#212121',
        fontColorMain: '#eaeaea',
        fontColorSub: '#aaaaaa',
        headerColor: '#313131',
        headerDivider: '#5a5a5a',
        btnHoverColor: 'rgba(255,255,255,.1)',
    }
}

export default Myapp;