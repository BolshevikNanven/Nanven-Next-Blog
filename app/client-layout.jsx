"use client"

import Header from '../components/header/header'
import Navigation from '../components/navigation/navigation'
import ThemeProvider from '../components/theme/theme-provider';

import { useState, useEffect } from 'react';
import { theme } from '../data/themedata';


export default function BaseLayout({ children, allClassification }) {

    const [isMenuOpen, switchMenuOpen] = useState(false);
    const [isDarkmode, switchDarkmode] = useState(false);


    useEffect(() => {
        //设置移动端
        if (window.innerWidth > 620) switchMenuOpen(true);

        //设置黑暗模式
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) switchDarkmode(true);

    }, [])

    return (
        <ThemeProvider theme={isDarkmode ? theme.dark : theme.light}>
            <Header
                isMenuOpen={isMenuOpen} switchMenuOpen={() => { switchMenuOpen(!isMenuOpen) }}
                isDarkmode={isDarkmode} switchDarkmode={() => { switchDarkmode(!isDarkmode) }}
            />
            <Navigation allClassification={allClassification} isMenuOpen={isMenuOpen} switchMenuOpen={() => { switchMenuOpen(!isMenuOpen) }} />
        </ThemeProvider>
    )
}