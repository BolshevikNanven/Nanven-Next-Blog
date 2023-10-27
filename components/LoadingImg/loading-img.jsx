"use client"

import { useEffect, useRef, useState } from "react";
import style from './index.module.css'

export function LoadingImg({ src, className, rectangle = false }) {

    const [image, setImage] = useState(false);
    const ref = useRef();

    const appendImg = (img) => {
        setImage(true)
        if (ref.current) ref.current.append(img);
    }

    useEffect(() => {
        const img = new Image();

        img.onload = () => appendImg(img);

        img.src = src;
        img.className = className;



    }, [])

    if (!image) {
        return (
            <div className={style.imgSkeleton + ' ' + className} style={{ paddingBottom: rectangle ? '75%' : '100%' }}></div>
        )
    } else return (
        <div ref={ref}></div>
    )
}