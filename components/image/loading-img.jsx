"use client"

import { useEffect, useRef, useState } from "react";
import style from './index.module.css'

export function LoadingImg({ src, className, rectangle = false }) {

    const [image, setImage] = useState(null);
    const ref = useRef();

    useEffect(() => {
        if (image) {
            ref.current.append(image)
        }
    }, [image])

    useEffect(() => {
        const img = new Image();

        img.onload = () => setImage(img);

        img.src = src;
        img.className = className;



    }, [])

    if (!image) {
        return (
            <div className={style.imgSkeleton + ' ' + className} style={{ paddingBottom: rectangle ? '50%' : '100%' }}></div>
        )
    } else return (
        <div ref={ref}></div>
    )
}