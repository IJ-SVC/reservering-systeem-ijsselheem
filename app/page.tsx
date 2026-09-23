import { appwritePublicConfig, isAppwriteConfigured } from "@/lib/appwrite/config";
import { AppwriteConnectionTester } from "@/app/components/appwrite-connection-tester";

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center bg-zinc-50 px-6 py-16 font-sans dark:bg-black">
      <main className="w-full max-w-3xl rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-950">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          Next.js + Appwrite starter
        </h1>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">
          Deze template is geconfigureerd met de Appwrite SDK.
        </p>

        <div className="mt-8 rounded-xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
            Configuratiestatus
          </p>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Endpoint: {appwritePublicConfig.endpoint}
          </p>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Project ID: {appwritePublicConfig.projectId || "Nog niet ingesteld in .env"}
          </p>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Project name: {appwritePublicConfig.projectName || "Niet opgegeven"}
          </p>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Starter ready: {isAppwriteConfigured ? "Ja" : "Nog niet volledig"}
          </p>
          <AppwriteConnectionTester projectId={appwritePublicConfig.projectId} />
        </div>

        <ol className="mt-8 list-decimal space-y-2 pl-5 text-zinc-700 dark:text-zinc-300">
          <li>Gebruik `.env` voor je Appwrite instellingen.</li>
          <li>Vul endpoint, project id en project name in.</li>
          <li>Klik op `Send a ping` om de connectie te testen.</li>
        </ol>
      </main>
    </div>
  );
}
