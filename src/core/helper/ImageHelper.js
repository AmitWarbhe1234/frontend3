import React from 'react'

const ImageHelper = ({product}) => {
  const imageurl = product ? product.image
  :`https://pixabay.com/photos/tree-sunset-clouds-sky-silhouette-736885/`
  return (
    <div className="rounded border border-success p-2">
        <img src={imageurl}
        style={{maxHeight:"100%", maxwidth:"100%"}}
        className="mb-3 rounded"
        alt=""/>

    </div>
  )
}

export default ImageHelper;
