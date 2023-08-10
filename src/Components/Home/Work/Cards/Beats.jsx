import React, { useRef } from 'react'
import s from './Beats.module.scss'
import Image from 'next/image'
import beats from '@assets/vids/beats-ad.webm'

export default function Beats({ handleMouseEnter, handleMouseLeave }) {
    const beatsRef = useRef(null);
  return (
    <div
          className={`${s.block} ${s.beats}`}
          ref={beatsRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            src="https://images.unsplash.com/photo-1627697823116-42877786ac26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            className={s.beatsPic}
            fill
            sizes="40dvw"
            quality={100}
            alt={"dude is being extremely cash money"}
          />
          <video
            playsInline=""
            loop="loop"
            muted
            disablePictureInPicture=""
            className={s.video}
            src={beats}
            type="video/webm"
          />
    </div>
  )
}
