import ConversationSidebar from '@/components/conversation-sidebar'
import SideBar from '@/components/sidebar'
import React from 'react'

const ConversationLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className='max-h-screen flex w-full'>
            <div className='h-full w-[21rem]'>
                <ConversationSidebar />
            </div>
            <div className=' w-full'>
                {children}
            </div>
        </div>
    )
}

export default ConversationLayout