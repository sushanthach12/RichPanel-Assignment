import SideBar from '@/components/sidebar'
import React from 'react'

const DashboardLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className='max-h-screen bg-[#f6f6f6]'>
            <div className='h-full w-[72px] fixed'>
                <SideBar />
            </div>
            <div className='pl-[72px] h-screen '>
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout