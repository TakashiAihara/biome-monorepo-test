"use client";

import { api } from "@/trpc/react";

export function Health() {
  const { data, isLoading, isError } = api.health.healthCheck.useQuery(undefined, {
    refetchInterval: 1000,
  });
  const { status } = data ?? {};

  let content;
  if (isLoading) {
    content = <p className="text-yellow-400">Checking health...</p>;
  } else if (!isError || status === "ok" || status === "up") {
    content = <p className="text-green-400">✅ Healthy</p>;
  } else {
    content = <p className="text-red-400">❌ Unhealthy</p>;
  }

  return (
    <div className="w-full max-w-md rounded-lg bg-gray-800 p-8 shadow-lg">
      <h2 className="mb-4 text-center text-2xl font-bold text-white">Health Check</h2>
      <div className="text-center text-xl">{content}</div>
    </div>
  );
}
