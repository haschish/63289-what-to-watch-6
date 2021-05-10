const films = [
  {
    id: 1,
    name: `The Grand Budapest Hotel`,
    posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
    previewImage: `img/what-we-do-in-the-shadows.jpg`,
    backgroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
    backgroundColor: `#ffffff`,
    videoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    previewVideoLink: `https://some-link`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    rating: 8.9,
    scoresCount: 240,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    runTime: 99 * 60,
    genre: `Comedy`,
    released: 2014,
    isFavorite: false
  },
  {
    id: 2,
    name: `Snatch`,
    posterImage: `img/snatch-poster.jpg`,
    previewImage: `img/snatch.jpg`,
    backgroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
    backgroundColor: `#ffffff`,
    videoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    previewVideoLink: `https://some-link`,
    description: `After stealing an 86-carat (17.2 g) diamond in a heist in Antwerp, Franky "Four-Fingers" goes to London to see diamond dealer Doug "The Head" on behalf of New York jeweller "Cousin Avi". One of the other robbers advises Franky to obtain a gun from ex-KGB agent Boris "The Blade", then later calls Boris and encourages him to steal the diamond from Franky before he can turn it over to Doug.`,
    rating: 9.5,
    scoresCount: 1020,
    director: `Guy Ritchie`,
    starring: [
      `Benicio del Toro`,
      `Dennis Farina`,
      `Jason Flemyng`,
      `Vinnie Jones`,
      `Brad Pitt`,
      `Rade Sherbedgia`,
      `Jason Statham`
    ],
    runTime: 102 * 60,
    genre: `Comedy`,
    released: 2000,
    isFavorite: false
  },
  {
    id: 3,
    name: `Shutter Island`,
    posterImage: `img/shutter-island-poster.jpg`,
    previewImage: `img/shutter-island.jpg`,
    backgroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
    backgroundColor: `#ffffff`,
    videoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    previewVideoLink: `https://some-link`,
    description: `In 1954, U.S. Marshal Edward "Teddy" Daniels and his new partner Chuck Aule travel to the Ashecliffe Hospital for the criminally insane on Shutter Island in Boston Harbor. They are investigating the disappearance of patient Rachel Solando, incarcerated for drowning her three children.`,
    rating: 6.9,
    scoresCount: 120,
    director: `Martin Scorsese`,
    starring: [
      `Leonardo DiCaprio`,
      `Mark Ruffalo`,
      `Ben Kingsley`,
      `Michelle Williams`,
      `Emily Mortimer`
    ],
    runTime: 139 * 60,
    genre: `Triller`,
    released: 2010,
    isFavorite: false
  },
  {
    id: 4,
    name: `Pulp Fiction`,
    posterImage: `img/pulp-fiction-poster.jpg`,
    previewImage: `img/pulp-fiction.jpg`,
    backgroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
    backgroundColor: `#ffffff`,
    videoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    previewVideoLink: `https://some-link`,
    description: `In 1954, U.S. Marshal Edward "Teddy" Daniels and his new partner Chuck Aule travel to the Ashecliffe Hospital for the criminally insane on Shutter Island in Boston Harbor. They are investigating the disappearance of patient Rachel Solando, incarcerated for drowning her three children.`,
    rating: 8.3,
    scoresCount: 320,
    director: `Quentin Tarantino`,
    starring: [
      `John Travolta`,
      `Samuel L. Jackson`,
      `Uma Thurman`,
      `Harvey Keitel`,
      `Tim Roth`,
      `Amanda Plummer`
    ],
    runTime: 154 * 60,
    genre: `Comedy`,
    released: 1994,
    isFavorite: false
  },
  {
    id: 5,
    name: `War of the Worlds`,
    posterImage: `img/war-of-the-worlds-poster.jpg`,
    previewImage: `img/war-of-the-worlds.jpg`,
    backgroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
    backgroundColor: `#aaaaaa`,
    videoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    previewVideoLink: `https://some-link`,
    description: `Divorced longshoreman Ray Ferrier works as a crane operator at a dock in Brooklyn, New York, and is estranged from his children: 10-year-old daughter Rachel, and teenage son Robbie. Ray\'s pregnant former wife, Mary Ann, drops the two off at his house in Bayonne, New Jersey, on her way to visit her parents in Boston.`,
    rating: 8.5,
    scoresCount: 230,
    director: `Steven Spielberg`,
    starring: [
      `Tom Cruise`,
      `Dakota Fanning`,
      `Miranda Otto`,
      `Tim Robbins`
    ],
    runTime: 116 * 60,
    genre: `Action`,
    released: 2005,
    isFavorite: false
  }
];

const getFilms = () => films;

export {getFilms};
