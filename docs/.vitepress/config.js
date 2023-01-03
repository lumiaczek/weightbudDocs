export default {
  title: "WeightBud",
  base: "/weightbudDocs/",
  description: "WeightBud documentation",
  themeConfig: {
    nav: [
      { text: "Dokumentacja", link: "/" },
      {
        text: "1.0.0-final",
        link: "https://github.com/lumiaczek/weightbud/releases/tag/v1.0.0-final",
      },
    ],
    sidebar: [
      {
        text: "Opis projektu",
        items: [
          { text: "Co to jest WeightBud?", link: "/" },
          { text: "Wybór technologi", link: "/intro/" },
          { text: "Przemyślenia", link: "/intro/after" },
          { text: "Zbiór narzędzi i technologi", link: "/intro/res" },
        ],
      },
      {
        text: "Architektura i funkcjonalność",
        items: [
          { text: "Mapa interakcji komponentów", link: "/architecture/" },
          { text: "Struktura danych", link: "/architecture/data" },
          { text: "Kod źródłowy", link: "/architecture/source" },
        ],
      },
      {
        text: "Obsługa aplikacji",
        items: [
          { text: "Pierwsze uruchomienie", link: "/app/" },
          { text: "Panel główny", link: "/app/dashboard" },
          { text: "Plany", link: "/app/plans" },
          { text: "Statystyki", link: "/app/stats" },
          { text: "Trening", link: "/app/workout" },
          { text: "Ustawienia", link: "/app/settings" },
        ],
      },
    ],
  },
};
