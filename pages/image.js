import React from 'react'
import Image from 'next/image'

export default function image() {
  return (
    <div>
        <Image src='/sample/images/contact-img.jpg' width={500} height={500}/>
        <Image src='/sample/images/b1.jpg' width={500} height={500}/>
        <Image src='/sample/images/b2.jpg' width={500} height={500}/>
        <Image src='/sample/images/c1.jpg' width={500} height={500}/>
        <Image src='/sample/images/c2.jpg' width={500} height={500}/>
        <Image src='/sample/images/c3.jpg' width={500} height={500}/>
        <Image src='/sample/images/cat1.jpg' width={500} height={500}/>
        <Image src='/sample/images/cat2.jpg' width={500} height={500}/>
        <Image src='/sample/images/cat3.jpg' width={500} height={500}/>
        <Image src='/sample/images/c2.jpg' width={500} height={500}/>
        <img src='/sample/images/contact-img.jpg' />
    </div>
  )
}
