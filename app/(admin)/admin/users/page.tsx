import { getUsers } from "@/lib/admin/users"

export default async function UsersPage() {
  const users = await getUsers()

  return (
    <div>
      <h1>Users</h1>

      {users.map((u) => (
        <div key={u.id}>
          {u.name} - {u.role}
        </div>
      ))}
    </div>
  )
}