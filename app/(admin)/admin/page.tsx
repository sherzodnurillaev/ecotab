import { getUsers } from "@/lib/admin/users"

export default function CRM() {
    
    const users = getUsers()
       
    return(
        <div className="">
            <h2>Dashboard</h2>
        </div>
    )
}