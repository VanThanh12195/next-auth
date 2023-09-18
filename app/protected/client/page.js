"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function ClientSidePage() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/protected/client");
    },
  });

  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      This is the client content. You are signed in as {session?.user.email}
    </div>
  );
}
