// Voeg een tegel toe: object hier + foto in public/apps/.
export type ReservationApp = {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
};

export const reservationApps: ReservationApp[] = [
  {
    id: "vergaderruimte",
    title: "Vergaderruimte",
    description: "Reserveer een zaal of overlegruimte op locatie.",
    href: "#",
    image: "/apps/vergadering.jpg",
  },
  {
    id: "bezoek",
    title: "Bezoek",
    description: "Plan een bezoek bij een cliënt of locatie.",
    href: "#",
    image: "/apps/bezoek.jpg",
  },
  {
    id: "dagbesteding",
    title: "Dagbesteding",
    description: "Meld iemand aan voor een activiteit of dagprogramma.",
    href: "#",
    image: "/apps/dagbesteding.jpg",
  },
  {
    id: "behandeling",
    title: "Behandeling",
    description: "Maak een afspraak voor behandeling of revalidatie.",
    href: "#",
    image: "/apps/behandeling.jpg",
  },
];
