'use client'

import { useTheme } from "@/components/theme/theme-provider"
import { useEffect, useRef } from "react"

export default function HeadImg({ title, url, color }) {
    const imgRef = useRef()
    const [theme, setTheme] = useTheme()

    useEffect(() => {
        setTheme('#' + color)
        return () => setTheme(null)
    }, [])

    return  <img ref={imgRef} alt={title} src={url} />
}