import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(options);

  // if(!session) redirect("/api/auth/signin?callbackUrl=/");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {session ? (
        <div className="text-center text-xl mb-8">
          This is Homepage. You are signed in as {session?.user.email}
        </div>
      ) : (
        <div className="text-center text-xl mb-8">
          You cannot access this page. You need to sign in
        </div>
      )}
    </main>
  );
}
