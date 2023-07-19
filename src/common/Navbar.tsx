import React from 'react'
import { primaryPaths, secondaryPaths, explorePaths, servicePaths, settingPaths, informationPaths, provisionPaths } from '../util/paths'
import Link from 'next/link'
import Image from 'next/image'
import LeftHeader from '@/components/LeftHeader'

const lineStyle = 'items-center px-3 gap-4 rounded-md hover:bg-[#F2F2F2] m-auto flex w-[200px] h-10'
const Navbar = () => {
  return (
    <div className='w-60'>
        <LeftHeader />
        <div className='overflow-y-scroll h-[calc(100vh-56px)]'>
            <div>
                {
                    primaryPaths.map(item => (
                        <Link className={lineStyle} href={item.url} key={item.name}>
                            <Image src={item.icon} height={24} width={24} alt='image' />
                            <div>{item.name}</div>
                        </Link>
                    ))
                }
            </div>
            <hr className='my-2'/>
            <div>
                {
                    secondaryPaths.map(item => (
                        <Link className={lineStyle} href={item.url} key={item.name}>
                            <Image src={item.icon} height={24} width={24} alt='image' />
                            {item.name}
                        </Link>
                    ))
                }
            </div>
            <hr className='my-2'/>
            <div className='flex flex-col'>
                <h2 className='m-auto w-[200px] px-3'>Kênh đăng ký</h2>
                <div>

                </div>
            </div>
            <hr className='my-2'/>
            <div>
                <h2 className='m-auto w-[200px] px-3'>Khám phá</h2>
                <div className=''>
                {
                    explorePaths.map(item => (
                        <Link className={lineStyle} href={item.url} key={item.name}>
                            <Image src={item.icon} height={24} width={24} alt='image' />
                            {item.name}
                        </Link>
                    ))
                }
            </div>
            <hr className='my-2'/>
            </div>
            {/* Dịch vụ khác */}
            <div>
                <h2 className='m-auto w-[200px] px-3'>Khám phá</h2>
                <div className=''>
                {
                    servicePaths.map(item => (
                        <Link className={lineStyle} href={item.url} key={item.name}>
                            <Image src={item.icon} height={24} width={24} alt='image' />
                            {item.name}
                        </Link>
                    ))
                }
            </div>
            </div>
            <hr className='my-2'/>
            {/* Cài đặt */}
            <div>
                <div className=''>
                {
                    settingPaths.map(item => (
                        <Link className={lineStyle} href={item.url} key={item.name}>
                            <Image src={item.icon} height={24} width={24} alt='image' />
                            {item.name}
                        </Link>
                    ))
                }
            </div>
            </div>
            <hr className='my-2'/>
            <div className='px-6 flex flex-wrap gap-x-2'>
                {
                    informationPaths.map(item => (
                        <Link className='text-[13px]' href={item.path} key={item.name}>{item.name}</Link>
                    ))
                }
            </div>
            <hr className='my-2'/>
            <div className='px-6 flex flex-wrap gap-x-2'>
                {
                    provisionPaths.map(item => (
                        <Link className='text-[13px]' href={item.path} key={item.name}>{item.name}</Link>
                    ))
                }
            </div>
            <p className='my-2'/>
            <p className='px-6'>© {new Date().getFullYear()} Google LLC</p>
            <p className='my-2'></p>
        </div>
    </div>
  )
}

export default Navbar