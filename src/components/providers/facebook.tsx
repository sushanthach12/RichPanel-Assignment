'use client'
import { initFacebookSdk } from "@/utils/FacebookSDK"
import { FC, useEffect, useState } from "react"

interface FacebookProviderProps { }

const FacebookProvider: FC<FacebookProviderProps> = ({ }) => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true);
        (
            async () => {
                console.log('Started')
                const response = await initFacebookSdk()
                console.log('Response', response)
            }
        )()
        return () => setMounted(false)
    }, [])
    

    return null
}

export default FacebookProvider;