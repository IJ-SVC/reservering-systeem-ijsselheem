import Image from "next/image";
import type { ReservationApp } from "@/lib/apps";

type AppTileProps = {
  app: ReservationApp;
};

export function AppTile({ app }: AppTileProps) {
  const isExternal = app.href.startsWith("http");

  return (
    <a
      href={app.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-elevated)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={app.image}
          alt=""
          fill
          unoptimized={app.image.endsWith(".svg")}
          sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 ease-out group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h2 className="text-[15px] font-semibold text-primary">{app.title}</h2>
        <p className="mt-1 text-sm text-muted">{app.description}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
          Openen
          <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </span>
      </div>
    </a>
  );
}
