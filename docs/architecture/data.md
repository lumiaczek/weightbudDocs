# Struktura danych

## Ustawienia użytkownika // userSettings

```js
{
    name: string,
    gender: men | women,
    weight: number,
    height: number
},
```

## Baza danych ćwiczeń // exerciseDatabase

```js
{
    category: string,
    name: string,
    imgUrl: string,
}
```

## Baza danych planów // userPlans

```js
{
    name: string,
    cwiczenia: Exercise[]
}
```

## Baza danych treningów // userWorkouts

```js
Lista {
    name: string,
    imgURL: string,
    serie: number,
    powtorzenia: number[],
    waga: number[]
}
```

```js
{
    name: string,
    cwiczenia: Lista[],
    czas: number
}
```
