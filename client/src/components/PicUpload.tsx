import React, { useState, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import useLocMsg from '../localization/useLocMsg'

interface IProps {
  pic?: string
  setPic: (pic: string) => void
}

export default function PicUpload({ pic, setPic }: IProps) {
const locMsg = useLocMsg()
  const { acceptedFiles, getRootProps, getInputProps, inputRef } = useDropzone({
    accept: {
      'image/png': ['.png', '.jpg', '.jpeg', '.webp', '.gif'],
    },
    maxFiles: 1,
  })
  const [url, setUrl] = useState<string | undefined>(pic)

  useEffect(() => {
    const data = new FormData()
    data.append('file', acceptedFiles[0])
    data.append('upload_preset', 'xqublzln')
    data.append('cloud_name', 'diriloebp')
    fetch('  https://api.cloudinary.com/v1_1/diriloebp/image/upload', {
      method: 'post',
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (!pic) setUrl(data.url)
        setPic(data.url)
      })
      .catch((err) => console.log(err))
  }, [acceptedFiles, pic, setPic])

  function removePic(e: React.MouseEvent) {
    e.preventDefault()
    acceptedFiles.length = 0
    setUrl('')
    setPic('')
    if (inputRef?.current?.value) inputRef.current.value = ''
    console.log(acceptedFiles)
  }

  function stopPropagation(e: React.MouseEvent) {
    e.stopPropagation()
  }

  return (
    <div className="flex flex-col justify-center">
      {url && (
        <>
          <img src={url} alt="" className="text-center" />
          <button onClick={removePic}>{locMsg('PicUpload.removePic')}</button>
        </>
      )}
      {!url && (
        <div
          {...getRootProps()}
          className="p-3 py-5 bg-zinc-200 dark:bg-zinc-800 border rounded dropzone"
          onClick={stopPropagation}
        >
          <input {...getInputProps()} />
          <div className="text-center">{locMsg('PicUpload.putImageHere')}</div>
        </div>
      )}
    </div>
  )
}
