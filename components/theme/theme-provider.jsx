'use client'

import { createContext, useContext, useEffect, useState } from "react"

import { argbFromHex, themeFromSourceColor } from "@material/material-color-utilities";
import { getMissingColorString } from "@/utils/material";
import { defaultTheme } from ".";

const ThemeContext = createContext()

export function useTheme() {
    const { theme } = useContext(ThemeContext)

    return theme
}

export function useDarkMode() {
    const { darkMode } = useContext(ThemeContext)

    return darkMode
}

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState()
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        const md = themeFromSourceColor(argbFromHex(theme || defaultTheme))

        document.body.style.cssText = getMissingColorString(md, darkMode)
    }, [theme, darkMode])

    return (
        <ThemeContext.Provider value={{ theme: [theme, setTheme], darkMode: [darkMode, setDarkMode] }}>
            {children}
        </ThemeContext.Provider>
    )
}