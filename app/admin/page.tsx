import { redirect } from "next/navigation";
import dynamic from "next/dynamic";

import { getIsAdmin } from "@/lib/admin";

const App = dynamic(() => import("./app"), { ssr: !!false });

async function AdminPage() {
  const isAdmin = await getIsAdmin();
  if (!isAdmin) {
    redirect("/");
  }
  return (
    <div>
      <App />
    </div>
  );
}

export default AdminPage;
