"use client";

import { AppwriteException } from "appwrite";
import { useState } from "react";

import { client } from "@/lib/appwrite";

type ConnectionState = "idle" | "loading" | "success" | "error";

type PingLog = {
  date: Date;
  status: number;
  response: string;
};

type AppwriteConnectionTesterProps = {
  projectId: string;
};

export function AppwriteConnectionTester({
  projectId,
}: AppwriteConnectionTesterProps) {
  const [state, setState] = useState<ConnectionState>("idle");
  const [message, setMessage] = useState<string>("");
  const [logs, setLogs] = useState<PingLog[]>([]);

  const handleTestConnection = async () => {
    if (state === "loading") {
      return;
    }

    setState("loading");
    setMessage("");

    if (!projectId) {
      setState("error");
      setMessage("Project ID ontbreekt. Vul NEXT_PUBLIC_APPWRITE_PROJECT_ID in.");
      return;
    }

    try {
      const result = await client.ping();
      setLogs((prev) => [
        {
          date: new Date(),
          status: 200,
          response: JSON.stringify(result),
        },
        ...prev,
      ]);
      setState("success");
      setMessage("Ping gelukt: project is bereikbaar.");
    } catch (error) {
      const appwriteError = error instanceof AppwriteException ? error : null;
      setLogs((prev) => [
        {
          date: new Date(),
          status: appwriteError?.code ?? 500,
          response: appwriteError?.message ?? "Something went wrong",
        },
        ...prev,
      ]);
      setState("error");
      const details = error instanceof Error ? error.message : "Onbekende fout";
      setMessage(`Connectie mislukt: ${details}`);
    }
  };

  return (
    <div className="mt-5">
      <button
        type="button"
        onClick={handleTestConnection}
        disabled={state === "loading"}
        className="inline-flex h-10 items-center justify-center rounded-full bg-zinc-900 px-5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
      >
        {state === "loading" ? "Bezig met testen..." : "Send a ping"}
      </button>

      {message ? (
        <p
          className={`mt-3 text-sm ${
            state === "success"
              ? "text-emerald-700 dark:text-emerald-400"
              : "text-red-700 dark:text-red-400"
          }`}
        >
          {message}
        </p>
      ) : null}

      {logs.length > 0 ? (
        <div className="mt-4 rounded-lg border border-zinc-200 bg-zinc-50 p-3 text-xs dark:border-zinc-700 dark:bg-zinc-900">
          <p className="font-medium text-zinc-700 dark:text-zinc-300">Laatste log</p>
          <p className="mt-1 text-zinc-600 dark:text-zinc-400">
            {logs[0].date.toLocaleString("nl-NL")} - status {logs[0].status}
          </p>
          <p className="mt-1 truncate text-zinc-600 dark:text-zinc-400">
            {logs[0].response}
          </p>
        </div>
      ) : null}
    </div>
  );
}
