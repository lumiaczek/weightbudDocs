# Wybór technologii

## Język programowania

Jako główny język programowania wybrałem [NativeScript](https://nativescript.org/) z dodatkiem biblioteki [Svelte](https://svelte.dev/). Wybrałem ten właśnie język ze względu na to że nie dokońca przepadam za Javą a `Svelte` jest JS Frameworkiem którego uczę się już kilka miesięcy i chce używać go to projektowania stron Internetowych, dlatego gdy odkryłem że `NativeScript` umożliwia pisanie aplikacji w wyglądzie `HTML-Like` przy pomocy JavaScripta zdecydowałem się właśnie na niego. Poza wymienionymi wyżej używam [TypeScript](https://www.typescriptlang.org/) ze względu na łatwiejsze wynajdywanie błędów w trakcie developmentu.

::: tip Java i Android
NativeScript w momencie budowy i developmentu konwertuje wszystko do formatu Java dlatego wciąż wymagane jest posiadanie Android Studio. Sam proces pisania nie posiada prawie wcale tagów typowych dla HTML lecz specjalne komponenty typowe właśnie dla Javy np. `<textView/>`
:::

## Stylizacja

Do stylizacji aplikacji używam [TailwindCSS](https://tailwindcss.com/) w postaci pluginu do NativeScript. Wybrałem go ponad natywnym `CSS` ze względu na użycie Utility-First i w moim przypadku bardzo intuicyjne użycie.

## Dane

Ze względu na charakter mojej aplikacji wymagane jest przetwarzanie dużej ilości danych. Wybór padł na [CouchDB](https://couchdb.apache.org/). Jest to wybór uzależniony od samego NativeScript'a ze względu na to że jest to jedyny plugin umożliwający tworzenie lokanych baz danych. Jest to baza typu NoSQL więc jest ona idealna do moich potrzeb.
