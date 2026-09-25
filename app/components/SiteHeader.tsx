export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-border-subtle bg-white/85 backdrop-blur-md">
      <div className="flex w-full items-center gap-4 px-6 py-3 sm:px-8">
        <img
          src="/ijsselheem-logo.svg"
          alt="IJsselheem"
          className="h-12 w-auto sm:h-14"
        />
        <span className="hidden h-10 w-px bg-border-subtle sm:block" aria-hidden />
        <p className="text-base font-bold tracking-tight text-primary sm:text-lg">
          Reserveringssysteem
        </p>
      </div>
    </header>
  );
}
