import Sidebar from "@/components/admin/Sidebar";
import "../globals.css";
import { getUser } from "@/lib/getUser";

export default async function CRMLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUser()
  return (
    <div className="flex min-h-screen">
      <Sidebar role={user?.role} />

      <main className="flex-1 p-6">
        
        {children}
      </main>
    </div>
  );
}