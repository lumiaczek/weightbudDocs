export default {
  title: "WeightBud",
  base: "/weightbudDocs/",
  description: "Just playing around.",
  themeConfig: {
    nav: [
      { text: "Dokumentacja", link: "/" },
      {
        text: "0.3.1-indev",
        items: [{ text: "Changelog", link: "/changelog" }],
      },
    ],
    sidebar: [
      {
        text: "Wprowadzenie",
        items: [
          { text: "Co to jest WeightBud?", link: "/" },
          { text: "Wybór technologi", link: "/intro/" },
          { text: "Trudności", link: "/intro/wymagania" },
        ],
      },
      {
        text: "UI/UX Design",
        items: [
          { text: "Zasoby i postanowienia", link: "/ui/res" },
          { text: "Wygląd ekranu startowego", link: "/ui/" },
          { text: "Wygląd panelu głównego", link: "/ui/main" },
        ],
      },
      {
        text: "Architektura i funkcjonalność",
        items: [
          { text: "Mapa interakcji komponentów", link: "/architecture/" },
          { text: "Struktura danych", link: "/architecture/data" },
          { text: "SvelteNative", link: "/architecture/native" },
          {
            text: "Błędy i obecne problemy",
            link: "/architecture/errors",
          },
        ],
      },
      {
        text: "Opis komponentów",
        items: [
          {
            text: "Programowanie część 1",
            items: [
              { text: "App", link: "/components/" },
              { text: "StartScreen", link: "/components/startscreen" },
              { text: "UserConfiguration", link: "/components/userconfig" },
              { text: "Initialization", link: "/components/init" },
              { text: "Dashboard", link: "/components/dashboard" },
              { text: "Settings", link: "/components/settings" },
            ],
          },
          {
            text: "Programowanie część 2",
            items: [
              { text: "Plans", link: "/components/plans" },
              { text: "NewPlan", link: "/components/newplan" },
              { text: "CategoryChoose", link: "/components/catchoose" },
              { text: "ExerciseList", link: "/components/exlist" },
              { text: "ExerciseAdd", link: "/components/exeradd" },
              { text: "Stats", link: "/components/stats" },
            ],
          },
        ],
      },
    ],
  },
};
