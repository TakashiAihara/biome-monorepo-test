import { Health } from "@/app/_components/health";
import { HydrateClient } from "@/trpc/server";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="flex flex-col items-center justify-center min-h-screen gap-8 bg-gray-900 p-4">
        <Health />
      </main>
    </HydrateClient>
  );
}
