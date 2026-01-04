'use client'

import { useTheme } from "@/components/theme/theme-provider"
import { useEffect } from "react"

export default function HeadImg({ title, url, color }) {
    const [, setTheme] = useTheme()

    useEffect(() => {
        setTheme('#' + color)
        return () => setTheme(null)
    }, [color,setTheme])

    return (
        <img alt={title} src={url}/>
    )
}