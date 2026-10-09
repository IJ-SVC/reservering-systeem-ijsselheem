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
    id: "Duofiets reserverings systeem",
    title: "Duofiets reserverings systeem",
    description: "Reserveer een Duofiets bij een van de IJsselheem locaties.",
    href: "https://duofiets.ijsselheem.app",
    image: "/apps/duofiets.jpg",
  },
  {
    id: "Raizer ophalen",
    title: "Raizer reserverings systeem",
    description: "Wanneer er een iemand gevallen is, dan kan de raizer worden gereserveerd en opgehaald bij een van de IJsselheem locaties.",
    href: "https://raizer-reservering-systeem.sites.ijsselheem.dev/",
    image: "/apps/raizer.jpg",
  },
];
