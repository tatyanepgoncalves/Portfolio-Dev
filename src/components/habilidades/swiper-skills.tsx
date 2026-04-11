'use client'

import { A11y, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { skills } from '@/types/skills'

import 'swiper/css'
import 'swiper/css/autoplay'

import '@/app/globals.css'

import Image from 'next/image'

export default function SwiperSkills() {
  return (
    <div className="">
      <Swiper
        a11y={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        freeMode={true}
        loop={true}
        modules={[A11y, Autoplay]}
        pagination={{
          dynamicBullets: true,
        }}
        slidesPerView={4}
        speed={2000}
      >
        {skills.map((skill) => (
          <SwiperSlide key={skill.text}>
            <div className="flex h-20 w-20 flex-col items-center justify-center gap-4 rounded-md border bg-purple-600/30 md:h-40 md:w-40">
              <Image
                alt={skill.text}
                className="w-5 md:w-15"
                src={skill.icon}
              />
              <p className="text-[10px] text-white md:text-xs">{skill.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
