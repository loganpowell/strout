import React from "react"

export const Image = ({ src, fallback, type = "image/webp", alt, className }) => {
    return (
        <picture className={className}>
            <source srcSet={src} type={type} />
            <img src={fallback} alt={alt} />
        </picture>
    )
}

//export default Image;
