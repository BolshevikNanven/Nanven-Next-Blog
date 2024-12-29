import { useEffect } from "react"

export default function ThemeProvider({ theme, children }) {

    useEffect(() => {
        // const styleLists= Object.keys(theme).map(key => {
        //     return { name: `--${key}`, value: theme[key] }
        // })

        // styleLists.forEach(style => document.body.style.setProperty(style.name, style.value));
        document.body.classList.value = theme + '-theme'
    }, [theme])

    return (
        <>
            {children}
        </>
    )
}