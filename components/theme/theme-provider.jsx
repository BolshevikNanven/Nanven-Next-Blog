import { useEffect } from "react"

export default function ThemeProvider({ theme, children }) {

    useEffect(() => {
        let classList = [theme + '-theme'];
        document.body.classList.forEach(className => {
            if (!className.endsWith('-theme')) {
                classList.push(className)
            }
        })
        document.body.classList = classList
    }, [theme])

    return children
}