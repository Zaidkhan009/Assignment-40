function makealbum(artist, title) {
    var dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}
var album = makealbum("Ali", "light");
console.log(album);
album = makealbum("Usama", "red wave");
console.log(album);
album = makealbum("Azeem", "seecbreez");
console.log(album);
