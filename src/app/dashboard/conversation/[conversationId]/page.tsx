import ChatInput from "@/components/chat-input"
import Messages from "@/components/messages"
import Button from "@/components/ui/button"
import UserAvatar from "@/components/user-avatar"
import { CircleUserRound, LucideVoicemail, Voicemail, VoicemailIcon } from "lucide-react"
import Image from "next/image"
import { FC } from "react"

interface ConversationPageProps {
    params: {
        conversationId: string
    }
}

const ConversationPage: FC<ConversationPageProps> = ({ params: { conversationId } }) => {

    return <div className="w-full text-black border-2 border-[#edeef0] h-full">
        <div className="flex h-full">
            <div className="w-[70%] border-r-2 border-r-[#edeef0] flex flex-col">
                <div className="p-4 flex items-center justify-between bg-white border-b-2 border-[#edeef0]">
                    <h3 className="text-2xl leading-9 text-gray-900 font-bold">Amit RG</h3>
                </div>

                <div className="flex flex-1 flex-col py-3 h-full overflow-scroll">
                    <Messages />

                    <ChatInput />
                </div>
            </div>

            <div className="w-[30%] flex flex-col">
                <div className="flex flex-col justify-center items-center gap-3 bg-white p-4 py-10">
                    <div className="flex flex-col items-center">
                        <div className="relative">
                            {/* <Image
                                src={""}
                                alt="user-picture"
                                className="h-10 w-10 rounded-full"
                            /> */}
                            <UserAvatar firstName="Richard" lastName="Panel" className="h-14 w-14" />
                        </div>
                        <h3 className="text-xl leading-9 text-gray-900 font-bold">Amit RG</h3>
                        <div className="flex items-center gap-x-1 text-gray-500/70 text-sm font-medium">
                            <div className="bg-gray-300 h-2 w-2 rounded-full" />
                            <p>Offline</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-x-2">
                        <Button className="flex items-center gap-1 bg-transparent border-2 px-3 py-1 text-sm font-medium hover:bg-gray-50 rounded-md">
                            <Voicemail className="rotate-[140deg] h-5 w-5 text-gray-600" />
                            Call
                        </Button>
                        <Button className="flex items-center gap-1 bg-transparent border-2 px-3 py-1 text-sm font-medium hover:bg-gray-50 rounded-md">
                            <CircleUserRound className="h-5 w-5 text-gray-600 " />
                            Profile
                        </Button>
                    </div>
                </div>

                <div className="p-4">
                    <div className="bg-white p-3 rounded-lg shadow-sm border space-y-3">
                        <p className="text-base font-semibold">Customer details</p>

                        <div className="flex flex-col gap-y-2 mt-2">
                            <div className="flex items-center justify-between text-sm">
                                <p className="text-gray-700 text-muted-foreground font-medium">Email</p>
                                <p className="font-semibold">amit@richpanel.com</p>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <p className="text-gray-700 text-muted-foreground font-medium">First Name</p>
                                <p className="font-semibold">Amit</p>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <p className="text-gray-700 text-muted-foreground font-medium">Last Name</p>
                                <p className="font-semibold">RG</p>
                            </div>
                        </div>

                        <p className="text-sm font-semibold text-blue-800">View more details</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default ConversationPage;