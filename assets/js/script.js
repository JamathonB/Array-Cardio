// Some variable data
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
  ];

// Array.prototype.filter()
// Filter the list of inventors for those who were born in the 1500's
const fifteen = inventors.filter(function(inventor) {
    if (inventor.year >= 1500 && inventor.year < 1600) {
        return true;
    } else {
        return false;
    }
});
console.table(fifteen);

// Array.prototype.map()
// Give an array of the inventory first and last names
const names = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.table(names);

// Array.prototype.sort()
// Sort the inventors by birthdate, oldest to youngest
const yearBorn = inventors.sort((a, b) => new Date(a.year) - new Date(b.passed));
console.table(yearBorn);

// Array.prototype.reduce()
// How many years did all the inventors live?
const totalYearsLived = inventors.reduce((total, inventor) => {
const yearsLived = inventor.passed - inventor.year;
return total + yearsLived;
}, 0);
console.log(totalYearsLived)

// Sort the inventors by years lived
const sortedYearsLived = inventors.sort((a, b) => {
    const yearsLivedA = a.passed - a.year;
    const yearsLivedB = b.passed - b.year;
    return yearsLivedB - yearsLivedA;
});
console.table(sortedYearsLived);

// Create a list of boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a'));
// const de = links
//     .map(link => link.textContent)
//     .filter(streetName => streetName.includes('de'));

// Sort the people aplhibetically by last name
const alpha = people.sort((lastOne, nextOne) => {
    const [aLast, aFirst] = lastOne.split(', ');
    const [bLast, bFirst] = nextOne.split(', ');
    return aLast > bLast ? 1 : -1;
});
console.log(alpha);

// Sum up the instances of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

const dataCounts = data.reduce((acc, data) => {
    if (acc[data]) {
        acc[data]++;
    } else {
        acc[data] = 1;
    }
    return acc;
}, {});
console.log(dataCounts);