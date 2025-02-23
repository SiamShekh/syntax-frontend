import { database } from "@/firebase/configure";
import { LineChart, PieChart } from "@mui/x-charts";
import { collection, doc, getCountFromServer, query } from "firebase/firestore";
import { FaDollarSign, FaStore, FaUserClock } from "react-icons/fa";

async function page() {
    const userCount = await getCountFromServer(collection(database, "user"));
    const productCount = await getCountFromServer(collection(database, "product"));
    return (
        <div className="p-3">
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/10 p-3 border rounded-lg flex items-center gap-3">
                    <FaUserClock className="text-6xl bg-white/10 rounded-full p-3" />
                    <div className="">
                        <p className="text-2xl font-medium">{userCount.data()?.count}</p>
                        <p className="text-xs font-medium uppercase text-white/60">{userCount.data()?.count} user is total signup on syntax</p>
                    </div>
                </div>
                <div className="bg-white/10 p-3 border rounded-lg flex items-center gap-3">
                    <FaStore className="text-6xl bg-white/10 rounded-full p-3" />
                    <div className="">
                        <p className="text-2xl font-medium">{productCount?.data().count}</p>
                        <p className="text-xs font-medium uppercase text-white/60">{productCount?.data().count} product have on syntax</p>
                    </div>
                </div>
                <div className="bg-white/10 p-3 border rounded-lg flex items-center gap-3">
                    <FaDollarSign className="text-6xl bg-white/10 rounded-full p-3" />
                    <div className="">
                        <p className="text-2xl font-medium">5001$</p>
                        <p className="text-xs font-medium uppercase text-white/60">5001$ volume have on syntax</p>
                    </div>
                </div>
            </div>
            <div className="mt-2 bg-white/10 p-3">

            </div>
        </div>
    )
}

export default page;