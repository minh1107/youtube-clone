import { IconButton } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import * as icons from '../assets/img'

const LeftHeader = () => {
  return (
    <div className='flex h-14 items-center ml-4 sticky top-0 bg-white'>
        <IconButton className='mx-2'>
            <Image src={icons.MenuIcon} height={24} width={24} alt='image'/>                
        </IconButton>
        <Link href={'/'}>
            <Image className='mx-4 cursor-pointer' src={icons.LogoIcon} width={90} alt='image'/>
        </Link>
</div>
  )
}

export default LeftHeader