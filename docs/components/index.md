# App

Komponent app jest to główny punkt "Montowania aplikacji" tutaj łączymy się do baz danych sprawdzamy czy aplikacja została już zainicjalizowana i przenosimy do następnego odpowiedniego komponentu.

```svelte
<script lang="ts">
  // sekcja importów
  import { getBoolean, clear } from "@nativescript/core/application-settings";
  import { CouchBase } from "@triniwiz/nativescript-couchbase";
  import StartScreen from "./components/StartScreen.svelte";
  import Dashboard from "./components/Dashboard.svelte";

  // połączenie do baz danych
  const userSettings = new CouchBase("userSettings");
  const exerciseDatabase = new CouchBase("exerciseDatabase");

  console.log(
    // do debugowania
    userSettings.query({
      select: [],
      from: "",
    })
  );

  console.log(
    // do debugowania
    exerciseDatabase.query({
      select: [],
      from: "",
    })
  );

  // po zakończeniu działań na bazie danych zamykamy połączenie
  userSettings.close();
  exerciseDatabase.close();

  //definicja i inicjalizacja sprawdzania czy aplikacja została już zainicjalizowana
  let configured: boolean = getBoolean("personDataSetted", false);
</script>

<frame class="bg-main">
  {#if !configured}
  <StartScreen />
  {/if} {#if configured}
  <Dashboard />
  {/if}
</frame>
```
