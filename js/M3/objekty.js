// const bookShelf = {
//   books: ["The Last Kingdom", "Dream Guardian"],
//   // Це метод об'єкта
//   getBooks() {
//     console.log("Цей метод буде повертати всі книги - властивість books");
//   },
//   // Це метод об'єкта
//   addBook(bookName) {
//     console.log("Цей метод буде додавати нову книгу у властивість books");
//   },
// };

// // Виклики методів
// bookShelf.getBooks();
// bookShelf.addBook("Нова книга");


//  Репета 52:25 говорить про this
// const playlist = {
//     namme: 'Мій плейлист',
//     rating: 5,
//     tracks: ['tr - 1', 'tr - 2', 'tr - 3', 'tr - 4'],
    // Це вказаний трек від початку, але казав Репета, що краще використовувати обчислювані методи, 
    // тобто нема змісту держати в пам'яті, краще щоб завжди вираховувалося. Тому наступний рядок  закоментується.
    // countTrack: 4,
    // changname(newName) {
    //     console.log(`Зараз використовується this`, this);
    //     this.namme = newName;
    // },
    // addTrack(track) {
    //     this.tracks.push(track);
        // Рядок знизу закоментовується, ьак як закоментований рядок кількості треків
        // this.countTrack = this.tracks.length;
//     },
//     updateRating(newRating) {
//         this.rating = newRating;
//     },
//     getTrackCount() {
//         return this.tracks.length;
//     }
// }
// console.log(playlist.getTrackCount());
// playlist.changname(`Другий лист`);
// console.log(playlist);
// playlist.addTrack('Самий новий трек');
// console.log(playlist.getTrackCount());
// console.log(playlist);
// playlist.updateRating(7);
// console.log(playlist);


// Репета від 1 години починає говорити про перебирання об'єкту

// const feedback = {
//     good: 5,
//     neutral: 10,
//     bad: 3,
// }
// let totalFeedback = 0;
// Повертає масив ключив, тобто властивостей об'єкту Object.keys()
// for (const iterator of object) {
    // const klyuchi = Object.keys(feedback);
    // console.log(klyuchi);
    // for (const klyuch of klyuchi) {
    //     console.log(klyuch);
    //     console.log(feedback[klyuch]);
    //     console.log(`А тепер все разом ${klyuch} : ${feedback[klyuch]}`)
    // }
//

// А зараз буде повернення значень Object.values()
// const znachennya = Object.values(feedback);
// console.log(znachennya);
// for (const iterator of znachennya) {
//     totalFeedback +=iterator
// }
// console.log(`Всього ${totalFeedback}`)

//   Деструктуризація об'єкта
// const playlist = {
//     name: 'Мій плейлист',
//     rating: '',
//     countTrack:4, 
//     tracks: ['tr - 1', 'tr - 2', 'tr - 3', 'tr - 4'],
// }
// console.log(playlist);
// const { name, rating, tracks, vlastyvist = 'nova', countTrack : numberTrack=56 } = playlist;

// // console.log(tracks);
// console.log(playlist);
// console.log(numberTrack);
// console.log(playlist);


// Глибока деструктуризація
const playlist = {
    name: 'Мій плейлист',
    rating: 5,
    countTrack:4, 
    tracks: ['tr - 1', 'tr - 2', 'tr - 3', 'tr - 4'],
    stats: {
        perehlyad: 25,
        vpodobannya: 14,
        nepodobajetsya: 9,
    }
}

console.log(playlist);
const { name, rating, countTrack, tracks, stats :{ perehlyad, vpodobannya, nepodobajetsya } } = playlist;

console.log(name, rating, countTrack, tracks,);
console.log(name, rating, countTrack, tracks, perehlyad, vpodobannya, nepodobajetsya);
console.log(name, rating, countTrack, tracks, stats, perehlyad, vpodobannya, nepodobajetsya );






