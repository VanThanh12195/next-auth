import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

export default async function ServerSidePage() {
  const session = await getServerSession(options);

  if (!session) redirect("/api/auth/signin?callbackUrl=/protected/server");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {session ? (
        <div className="text-center text-xl mb-8">
          This is the <strong>server content</strong>. You are signed in as{" "}
          {session.user.email}
        </div>
      ) : (
        <div className="text-center text-xl mb-8">
          You cannot access this <strong>server content</strong>. Please sign
          in.
        </div>
      )}
    </main>
  );
}
