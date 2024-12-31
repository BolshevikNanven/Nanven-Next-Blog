"use client"

import Header from '../components/header/header'
import Navigation from '../components/navigation/navigation'
import { useDarkMode } from '../components/theme/theme-provider';

import { useState, useEffect } from 'react';


export default function BaseLayout({ allClassification, allPostsData }) {
    const [darkMode, setDarkMode] = useDarkMode()
    const [isMenuOpen, switchMenuOpen] = useState(false);

    useEffect(() => {
        //设置移动端
        if (window.innerWidth > 620) switchMenuOpen(true);

        //设置黑暗模式
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) setDarkMode(true);

    }, [])

    return (
        <>
            <Header
                isMenuOpen={isMenuOpen} switchMenuOpen={() => { switchMenuOpen(!isMenuOpen) }}
                allPostsData={allPostsData}
            />
            <Navigation allClassification={allClassification} isMenuOpen={isMenuOpen} switchMenuOpen={() => { switchMenuOpen(!isMenuOpen) }} />
        </>
    )
}