import { AppTile } from "@/app/components/AppTile";
import { SiteFooter } from "@/app/components/SiteFooter";
import { SiteHeader } from "@/app/components/SiteHeader";
import { reservationApps } from "@/lib/apps";

export default function Home() {
  return (
    <div className="flex min-h-full w-full flex-1 flex-col">
      <SiteHeader />

      <main className="w-full flex-1 px-6 py-8 sm:px-8 sm:py-10">
        <section className="rounded-2xl bg-white p-5 shadow-[var(--shadow-card)] sm:p-6">
          <h2 className="text-lg font-bold text-primary">Kies een reservering</h2>
          <p className="mt-0.5 text-sm text-muted">
            Open de applicatie die je nodig hebt. Eén overzicht van onze
            reserveringen.
          </p>
        </section>

        <section className="mt-8 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {reservationApps.map((app) => (
            <AppTile key={app.id} app={app} />
          ))}
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
