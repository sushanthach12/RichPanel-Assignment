'use client'

import Button from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { authenticate } from "@/redux/slices/authSlice";
import { fbLogin } from "@/utils/FacebookSDK";
import { useRouter } from "next/navigation";
import { FC, useEffect } from "react"

interface ConnectFBPageProps { }


const ConnectFBPage: FC<ConnectFBPageProps> = ({ }) => {
    const router = useRouter()

    const dispatch = useAppDispatch()
    const auth = useAppSelector((state) => state.auth)

    useEffect(() => {
        if (auth.status === "connected") {
            router.push('/fb-page')
        }
    }, [auth, router])


    const handleFBCallback = async (e: any) => {
        e.preventDefault()
        const { authResponse } = await fbLogin();

        console.log("Login", authResponse)
        if (authResponse) {
            dispatch(authenticate(authResponse))
            router.push('/fb-page')
        }
    }



    return <div className="container h-screen">
        <div className="flex mx-auto min-h-full flex-col justify-center items-center px-6 py-12 lg:px-8">
            <div className="bg-white w-[33%] py-10 rounded-3xl">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-700">Facebook Page Integration</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-4" action="#" method="POST">
                        <div>
                            <Button type="submit" onClick={handleFBCallback}>Connect Page</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

}

export default ConnectFBPage;