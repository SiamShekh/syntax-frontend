
import { database } from "@/firebase/configure";
import { collection, getDocs, limit, query } from "firebase/firestore";

async function user() {
    const collections = collection(database, "user");
    const q = query(collections, limit(10));
    const allUser = await getDocs(q);

    // Currently i have used hard coded some info, that should be come from admin;
    return (
        <div className="w-full">
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Password</th>
                            <th>Protfolio</th>
                            <th>Spend</th>
                            <th>Block</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allUser.docs.map((item, i) => (
                                <tr key={i} className="bg-white/10 rounded-2xl">
                                    <th>
                                        <div className="flex items-center gap-2">
                                            <div className={`size-10 flex justify-center items-center rounded-full bg-white/10 ${item.data().role !== 'admin' ? 'bg-[#054B02]' : 'bg-[#4D4100]'}`}>{String(item.data().firstName
                                            ).slice(0, 2)}</div>
                                            <div>
                                                <p className="font-medium">{item.data().firstName} {item.data().lastName}</p>
                                                <p className="text-xs font-normal text-white/60">{item.data().email}</p>
                                            </div>
                                        </div>
                                    </th>
                                    <td>{item.data().password}</td>
                                    <td>Add Protfolio</td>
                                    <td>Add Spend</td>
                                    <td>
                                        <button className="px-4 py-1 bg-white/10 rounded-lg border">Block</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default user;