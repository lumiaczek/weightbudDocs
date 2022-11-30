# Initialization

Komponent który służy jedynie do inicjalizacji czyli do utworzenia baz danych, pobrania danych z exersiceDatabase.ts (Svelte Store) i wrzucenia ich do bazy w postaci nowych dokumentów. W międzyczasie wyświetlony jest spinner.

```svelte
<script lang="ts">
	// sekcja importów
	import { CouchBase } from '@triniwiz/nativescript-couchbase';
	import { onMount } from 'svelte';
	import { navigate } from 'svelte-native';
	import Dashboard from './Dashboard.svelte';
	import { setBoolean, hasKey } from '@nativescript/core/application-settings';
	import { exercises } from './userPlans/exerciseDatabase';

	// definicja danych przekazanych z komponentu wyżej (UserConfiguration)
	export let name = '';
	export let gender = '';
	export let weight = '';
	export let height = '';

	// główna funkcja inicjalizacyjna
	const init = async () => {
		// połączenie / tworzenie nowych baz danych
		const userSettings = new CouchBase('userSettings');
		const exerciseDatabase = new CouchBase('exerciseDatabase');

		// sprawdzanie ustawień aplikacji czy została ona już zinicjalizowania : To taki gatekeeper przed wstawianiem wielokrotnej ilości takich samych dokumentów do bazy danych
		if (!hasKey('personDataSetted')) {
			await userSettings.createDocument(
				{
					name: name,
					gender: gender,
					weight: weight,
					height: height,
					weightArchive: [],
					weightDates: []
				},
				'personData'
			);

			// pobieranie ćwiczeń i wstawiwanie ich do bazy danych
			const databaseStartup = async () => {
				$exercises.forEach((e) => {
					exerciseDatabase.createDocument(e, e.name);
				});
			};

			// oczekuj na skończenie kopiowania aplikacji
			await databaseStartup();

			// ustaw że aktualizacja została zakończona
			setBoolean('personDataSetted', true);
		}

		//zamknij połączenia
		userSettings.close();
		exerciseDatabase.close();
		return;
	};

	// po zamontowaniu komponentów poczekaj na inicjalizacje po czym przejdź do ekranu głównego
	onMount(async () => {
		await init();
		navigate({ page: Dashboard });
	});
</script>

<page actionBarHidden={true}>
	<flexBoxLayout
		class="h-full w-full p-6 bg-main"
		justifyContent="center"
		flexDirection="column"
		alignItems="center"
	>
		<label
			text="Trwa inicjalizacja aplikacji..."
			class="text-2xl text-center lato text-white font-medium leading-tight"
			textWrap="true"
		/>
		<label
			text="Prosimy o nie opuszczanie tego okna."
			class="text-base text-center lato text-white font-light leading-tight"
			textWrap="true"
		/>
		<label text="&#xf013;" class="fas text-6xl mt-4 text-red-500 spinner" />
	</flexBoxLayout>
</page>
```

## Obecny wygląd

![Init](../public/Screenshot_20221129_204002.jpg)
