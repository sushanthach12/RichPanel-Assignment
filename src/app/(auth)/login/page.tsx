import Button from "@/components/ui/button";
import Link from "next/link";
import { FC } from "react"

interface LoginProps { }

const Login: FC<LoginProps> = ({ }) => {

    return <div className="container h-screen">
        <div className="flex mx-auto min-h-full flex-col justify-center items-center py-12">
            <div className="bg-white w-[33%] px-12 py-10 rounded-3xl">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-700">Login to your account</h2>
                </div>

                <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-4" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                            <div className="mt-1">
                                <input id="email" name="email" type="email" autoComplete="email" placeholder="example@email.com" required className="block w-full rounded-md px-3 py-1.5 text-gray-900 border border-gray-300 outline-none shadow-sm placeholder:text-gray-400 focus-within:border-gray-400 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                            <div className="mt-1">
                                <input id="password" name="password" type="password" placeholder="password" autoComplete="current-password" required className="block w-full rounded-md px-3 py-1.5 text-gray-900 border border-gray-300 outline-none shadow-sm placeholder:text-gray-400 focus-within:border-gray-400 sm:text-sm sm:leading-6" />
                            </div>

                            <span className="block text-gray-500 font-bold mt-2">
                                <input className="mr-2 leading-tight" type="checkbox" />
                                <span className="text-sm font-medium leading-6 text-gray-900">
                                    Remember Me
                                </span>
                            </span>
                        </div>

                        <div>
                            <Button type="submit">Login</Button>
                        </div>
                    </form>

                    <p className="mt-8 text-center text-sm text-gray-500">
                        New to MyApp?{" "}
                        <Link href="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign Up</Link>
                    </p>
                </div>
            </div>
        </div>

    </div>
}

export default Login;