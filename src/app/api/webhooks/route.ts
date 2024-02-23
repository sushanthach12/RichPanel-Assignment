import { NextResponse } from "next/server"

export const POST = async (req: Request, res: Response) => {
    try {
        const body = await req.json()
        console.log('WEBHOOK: ', body)

        if (body.object === "page") {
            return new NextResponse('EVENT_RECEIVED', { status: 2000 });
        }

        return new NextResponse('Not Found', { status: 404})
    } catch (error) {
        return new NextResponse('Not Found', { status: 404})
    }
}