/**
 * Przed rozpoczęciem kilka słów o tym jak pracować z tym plikiem
 *
 * 1) zadania możesz uruchomić dzięki uruchomieniu pliku index.html w przeglądarce
 *    - możesz przeciągnąć plik index.html do okna przegladarki
 *    - możesz odapilić plik html za pomocą rozszerzenia live server
 * 2) Do rozwiązywania zadań możesz praktycznie wszystko (chyba że w zadaniu jest opisane co można a co nie) tzn.
 *    - tworzyć zmienne
 *    - tworzyć funkcje
 *    - korzystać z internenetu
 *    - etc.
 * 3) każde zadanie posiada przykładowe rozwiązanie w pliku który często nazywa się solution.js użyj go jeżeli:
 *    - nie wiesz jak ruszyć zadania
 *    - chcesz sprawdzić moją przykładową implementację
 * 4) jeżeli Twoje rozwiązanie różni się od zaproponowanego przezemnie nie musi to oznaczać że Twoje jest złe/gorsze
 *    problemy w programowaniu mają często wiele rozwiązań
 * 5) zadanie 0 jest przykładowym już rozwiązanym zadaniem - użyj go jako referencji do pozostałych zadań
 *
 * Powodzenia!
 */

/**
 * Zadanie 0 Odfiltrowanie elementów nie będących stringami
 *
 * Stwórz funkcje getStrings która na podstawie tablicy elements stworzy nową tablicę gdzie wartościami będą tylko elementy
 * o typie string
 *
 *
 * wymagania
 * - rozwiązanie powinno być zapisane w ciele (wewnątrz) funkcji getStrings
 * - użyj metody dostępnej na tablicach .filter
 */

const elements = [
  "123",
  123,
  "trelemorele",
  ["tablica w tablicy"],
  { pole: "obiekt w tablicy" },
  "zwykly string",
];

function getStrings() {
  return elements.filter((element) => {
    /**
     * Jeżeli typ elementu w danym obrocie pętli jest równy string zwróć true (boolean) tak żeby metoda flter
     * zwróciła element
     */
    if (typeof element === "string") {
      return true;
    }

    /**
     * Jeżeli typ elementu w danym obrocie pętli nie jest stringiem zwróć false czyli odrzuć element z nowej tablicy
     */

    return false;
  });
}

/**
 * sprytniejszym i krótszym podejściem i rozwiązaniem tego zadania jest następujący kod:
 *
 * function getStrings() {
 *      return elements.filter((element) => typeof element === "string");
 * }
 *
 */

const filteredElements = getStrings(); // w tablicy filteredElements powinny być tylko stringi czyli: ["123", "trelemorele", "zwykly string"]

/**
 * Zadanie 1 Obliczenie kwadratów liczb w tablicy
 *
 * Stwórz funkcje getSquaredNumbers która na podstawie tablicy liczb numbers stworzy nową tablicę gdzie wartościami będą kwadraty tych liczb
 * tzn każdy element z tablicy numbers powinien zostać pomnożony przez samego siebie
 *
 * np.
 * na podstawie danych:
 *
 * const numbers = [2,5,7];
 *
 * w zmiennej squaredNumbers po wywołaniu Twojej funkcji powinny znajdować się kwadraty liczb [2,5,7]
 *
 * const squaredNumbers = twojaFunckja();
 *
 * console.log(squaredNumbers); // [4, 25, 49]
 *
 * w console.log-u jest przykładowy rezaultat jaki powinna zwrócić funkcja na podstawie tablicy numbers
 *
 * wymagania
 * - rozwiązanie powinno być zapisane w ciele (wewnątrz) funkcji getSquaredNumbers
 * - użyj metody dostępnej na tablicach .map
 *
 */

const numbers = [2, 12, 6, 4, 7, 11];

/* MIEJSCE NA TWÓJ KOD 👇 */


function getSquaredNumbers() {
  const pomnozoneNumbers = numbers.map((x) => {
    return x*x;
  });
  console.table(pomnozoneNumbers);
}

function getSquaredNumbers() {
  return numbers.map((x) => x*x);
}


/**
 * Zadanie 2 Tablica z długościami stringów
 *
 * Stwórz funkcje getLenghtsOfPhrases która na podstawie tablicy stringów phrases stworzy nową tablicę z długościami stringów (jakkolwiek to brzmi 😅)
 *
 * np.
 * na podstawie danych
 *
 * const phrases = ["ok", "hello", "react"];
 *
 * w zmiennej dlugosciStringow po wywołaniu Twojej funkcji powinny znajdować się długości stringów [2,5,5]
 *
 * const dlugosciStringow = twojaFunckja();
 *
 * console.log(dlugosciStringow); // [2,5,5]
 *
 * w console.log-u jest przykładowy rezaultat jaki powinna zwrócić funkcja na podstawie tablicy phrases
 *
 * wymagania
 * - rozwiązanie powinno być zapisane w ciele (wewnątrz) funkcji getLenghtsOfPhrases
 * - użyj metody dostępnej na tablicach .map
 *
 */

const phrases = ["react", "trelemorele", "frontend", "angular", "js", ""];

/* MIEJSCE NA TWÓJ KOD 👇 */

const getLenghtsOfPhrases = () => {
  return phrases.map((phrase) => phrase.length)
 
};

/**
 * Zadanie 3 Tablica userów - nowe pole w obiekcie
 *
 * Stwórz funkcje verfiyUsers która na podstawie tablicy obiektów users stworzy nową tablicę
 * obiektów które w swojej strukturze będą zawierały dodatkowe pole "isAdult"
 *
 * nowe pole isAdult będzie ustawiane na podstawie wieku usera (age - inne istniejące pole w obiekcie user)
 *
 * przykładowy obiekt user:
 *
 * --------------------------------
 *
 * const user = {
 *      name: 'Jane',
 *      lastName: 'Doe',
 *      age: 12,
 * }
 *
 * --------------------------------
 *
 * żeby dodać nowe pole do tego obiektu należy odwołać się do tego obiektu i następnie do przyszłego pola po
 * kropce (patrz poniżej)
 *
 * --------------------------------
 *
 * user.isAdult = true;
 *
 * --------------------------------
 *
 * dodaliśmy do obiektu user pole isAdult i przypisaliśmy wartość boolowską true
 *
 * to samo będziesz musiał/musiała zrobić ze wszystkimi obiektami w tablicy
 * na podstawie wieku usera (age) - możliwe że będą potrzebne if-y
 *
 * przykładowe dane wejściowe (tablica users) i wyjściowe (nowa tablica z userami którzy mają pole isAdult)
 *
 *
 * const users = [
 *  {
 *      name: 'John',
 *      age: 23,
 *  },
 *  {
 *      name: 'Jane',
 *      age: 16
 *  }
 * ];
 *
 * w zmiennej verifiedUsers po wywołaniu Twojej funkcji powinny znajdować się obiekty z polem isAdult oraz wartością boolowską ustawioną
 * na podstawie wieku (age)
 *
 * const verifiedUsers = twojaFunckja();
 *
 * console.log(verifiedUsers); // patrz poniżej
 *
 * [
 *  {
 *      name: 'John',
 *      age: 23,
 *      isAdult: true // bo John ma 23 lata (powyżej 18)
 *  },
 *  {
 *      name: 'Jane',
 *      age: 16,
 *      isAdult: false, // bo Jane ma 16 lat (poniżej 18)
 *  }
 * ];
 *
 * w console.log-u jest przykładowy rezaultat jaki powinna zwrócić funkcja na podstawie tablicy users
 *
 *
 * wymagania
 * - rozwiązanie powinno być zapisane w ciele (wewnątrz) funkcji verfiyUsers
 * - użyj metody dostępnej na tablicach .map
 */

const users = [
  { name: "John", age: 20 },
  { name: "Johny", age: 12 },
  { name: "Jerry", age: 22 },
  { name: "Jack", age: 17 },
  { name: "Jane", age: 66 },
];

/* MIEJSCE NA TWÓJ KOD 👇 */

const verfiyUsers = () => {
  return users.map((user) => ({ ...user, isAdult: user.age >= 18 }));
};




/**
 * Zadanie 4  Tablica pracowników - aktualizacja pola salary
 *
 * Stwórz funkcje processSalaries która na podstawie tablicy obiektów workers stworzy nową tablicę
 * obiektów ze zaktulizowanymi polami salary (worker.salary) na podstawie następujących wymagań
 *
 * jeżeli obiekt worker ma pole seniority = 'junior' pole salary powinno być powiększone o 50%
 * jeżeli obiekt worker ma pole seniority = 'regular' pole salary powinno być powiększone o 30%
 * jeżeli obiekt worker ma pole seniority = 'senior' pole salary powinno być powiększone o 15%
 *
 * przykładowe dane wejściowe (tablica z workerami do przeprocesowania)
 *
 * const workers = [
 *      {
 *          name: 'John',
 *          seniority: 'junior',
 *          salary: 4000
 *      },
 *      {
 *          name: 'Jane',
 *          seniority: 'senior',
 *          salary: 15000
 *      }
 * ]
 *
 * w zmiennej processedWorkers po wywołaniu Twojej funkcji powinny znajdować się obiekty z zaktualizowanym
 * polem salary na podstawie logiki opisanej wyżej
 *
 * const processedWorkers = twojaFunckja();
 *
 * console.log(processedWorkers); // patrz poniżej
 *
 * [
 *      {
 *          name: 'John',
 *          seniority: 'junior',
 *          salary: 6000 // ponieważ 4000 + 2000 (50% z 4000) = 6000
 *      },
 *      {
 *          name: 'Jane',
 *          seniority: 'senior',
 *          salary: 17250 // ponieważ 15000 + 2250 (15% z 15000) = 17250
 *      }
 * ]
 *
 * w console.log-u jest przykładowy rezaultat jaki powinna zwrócić funkcja na podstawie tablicy workers
 */

const workers = [
  {
    name: "John",
    seniority: "junior",
    salary: 4000,
  },
  {
    name: "Jack",
    seniority: "senior",
    salary: 15000,
  },
  {
    name: "Jane",
    seniority: "regular",
    salary: 10000,
  },
  {
    name: "Jerry",
    seniority: "senior",
    salary: 20000,
  },
];

function processSalaries() {
  return workers.map(worker => {
    if (worker.seniority === "junior"){
      return {...worker, salary: worker.salary * 1.5};
    } else if (worker.seniority === "regular"){
      return {...worker, salary: worker.salary * 1.3};
    } else {
      return {...worker, salary: worker.salary * 1.15};
    }
  });
};

// Sposób II
// function processSalaries(workers) {
//   return workers.map(worker => {
//     if (worker.seniority === "junior"){
//       return {...worker, salary: worker.salary * 1.5};
//     } else if (worker.seniority === "regular"){
//       return {...worker, salary: worker.salary * 1.3};
//     } else if (worker.seniority === "senior") {
//       return {...worker, salary: worker.salary * 1.15};
//     } else {
//       return updatedWorkers;
//     }
//   });
// };
// const updatedWorkers = processSalaries(workers);
// console.log(updatedWorkers);

/**
 * Zadanie 5 Filtrowanie tablicy userów - wyciągnij userów którzy są pełnoletni (age >= 18)
 *
 * Stwórz funkcje getAdults która na podstawie tablicy obiektów users (z zadania 3 powyżej) stworzy nową tablicę
 * obiektów które będą spełniały następujący warunek
 *
 * wiek usera (age) ma być większy bądź równy 18
 *
 * przykładowe dane wejściowe (tablica users)
 *
 *
 * const users = [
 *  {
 *      name: 'John',
 *      age: 23,
 *  },
 *  {
 *      name: 'Jane',
 *      age: 16
 *  }
 * ];
 *
 *
 * w zmiennej adultUsers po wywołaniu Twojej funkcji powinni znajdować się userzy którzy mają pole age większe bądź równe 18
 *
 * const adultUsers = twojaFunckja();
 *
 * console.log(adultUsers); // patrz poniżej
 *
 * [
 *  {
 *      name: 'John',
 *      age: 23,
 *  }
 * ];
 *
 * wymagania
 * - rozwiązanie powinno być zapisane w ciele (wewnątrz) funkcji getAdults
 * - użyj metody dostępnej na tablicach .filter
 */

function getAdults() {
  return users.filter(function(user){
    return user.age >= 18;
  })
};



/**
 * Zadanie 6 Filtrowanie tablicy workerów - wyciągnij workerów których seniority = 'junior'
 *
 * Stwórz funkcje getJuniors która na podstawie tablicy obiektów workers (z zadania 4 powyżej) stworzy nową tablicę
 * obiektów które będą spełniały następujący warunek
 *
 * seniority workera (seniority) ma być równe 'junior'
 *
 * przykładowe dane wejściowe (tablica workers)
 *
 *
 * const workers = [
 *      {
 *          name: 'John',
 *          seniority: 'junior',
 *          salary: 4000
 *      },
 *      {
 *          name: 'Jane',
 *          seniority: 'senior',
 *          salary: 15000
 *      }
 * ]
 *
 *
 * w zmiennej juniors po wywołaniu Twojej funkcji powinni znajdować się workerzy których pole seniority = 'junior'
 *
 * const juniors = twojaFunckja();
 *
 * console.log(juniors); // patrz poniżej
 *
 * [
 *      {
 *          name: 'John',
 *          seniority: 'junior',
 *          salary: 4000
 *      }
 * ]
 *
 * wymagania
 * - rozwiązanie powinno być zapisane w ciele (wewnątrz) funkcji getJuniors
 * - użyj metody dostępnej na tablicach .filter
 */

function getJuniors() {
  return workers.filter(function(worker){
    return worker.seniority === "junior";
  });
};
