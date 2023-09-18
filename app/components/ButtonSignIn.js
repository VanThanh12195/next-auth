"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ButtonSignIn() {
  const { data: session } = useSession();

  const pathname = usePathname()

  return (
    <div>
      {session ? (
        <Link
          href={`/api/auth/signout?callbackUrl=${pathname}`}
          className="text-white flex-1 px-4 py-2 hover:bg-gray-700 active:bg-gray-900"
        >
          Sign Out
        </Link>
      ) : (
        <Link
          href={`/api/auth/signin?callbackUrl=${pathname}`}
          className="text-white flex-1 px-4 py-2 hover:bg-gray-700 active:bg-gray-900"
        >
          Sign In
        </Link>
      )}
    </div>
  );
}
