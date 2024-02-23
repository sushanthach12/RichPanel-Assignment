"use client"

import Button from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { fetchUser } from "@/lib/redux-api";
import { addUser } from "@/redux/slices/userSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC, useEffect } from "react"

interface FBPageProps { }

const FBPage: FC<FBPageProps> = ({ }) => {

    const router = useRouter()
    const dispatch = useAppDispatch()

    const auth = useAppSelector((state) => state.auth)
    const user = useAppSelector(state => state.user)

    console.log(user)

    useEffect(() => {
        if (auth.status === "disconnected") {
            router.push('/connect-fb')
        }
    }, [auth, router])

    useEffect(() => {
        (
            async () => {
                const response = await fetchUser(auth.accessToken)
                dispatch(addUser(response))
            }
        )()
    }, [auth.accessToken, dispatch])

    return <div className="h-screen bg-[#004e96]">
        <div className="flex mx-auto min-h-full flex-col justify-center items-center px-6 py-12 lg:px-8">
            <div className="bg-white w-[33%] py-10 rounded-3xl">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-700">Facebook Page Integration</h2>
                </div>

                <div>
                    <p className="text-center text-gray-700 leading-9 text-lg font-medium">Integrated Page: <span className="font-bold">{user.name}</span></p>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <button type="button" className="flex w-full justify-center rounded-md bg-red-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-700">Delete Integration</button>
                    <Link href={"/dashboard"}>
                        <Button>Reply To Messages</Button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
}

export default FBPage;