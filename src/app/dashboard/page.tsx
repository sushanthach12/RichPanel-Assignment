
import { FC } from "react"

interface DashboardProps { }

const Dashboard: FC<DashboardProps> = ({ }) => {


    return <div className="h-full flex justify-center items-center text-center text-black">
        <h1 className="text-xl font-bold">FB-HELPDESK</h1>
    </div>
}

export default Dashboard;