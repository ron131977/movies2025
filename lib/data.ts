export interface Movie {
  id: string;
  title: string;
  poster: string;
  year: number;
  rating: number;
  genre: string;
  synopsis: string;
  director: string;
  cast: string[];
  trailerUrl: string;
  whereToWatch: { name: string; url: string }[];
  type: "movie";
  releaseDate: string;
  runtime: string;
  language: string;
  reviews: Review[];
}

export interface TVShow {
  id: string;
  title: string;
  poster: string;
  year: number;
  rating: number;
  genre: string;
  synopsis: string;
  creator: string;
  cast: string[];
  trailerId: string;
  reviewId: string;
  trailerUrl: string;
  whereToWatch: { name: string; url: string }[];
  type: "tv-show";
  seasons: number;
  episodes: number;
  network: string;
  status: string;
  reviews: Review[];
}

export interface Review {
  author: string;
  authorInitials: string;
  rating: number;
  date: string;
  content: string;
}

export const featuredMovies: Movie[] = [
  {
    id: "sinners",
    title: "Sinners",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNjIwZWY4ZDEtMmIxZS00NDA4LTg4ZGMtMzUwZTYyNzgxMzk5XkEyXkFqcGc@._V1_.jpg",
    backimage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfxMAqk4zydj2BA7FmNWlL-GGWfYH5S66JdQ&s",
    year: 2025,
    rating: 8.2,
    genre: "Action, Adventure, Drama",
    synopsis:
      "Trying to leave their troubled lives behind, twin brothers return to their hometown to start again, only to discover that an even greater evil is waiting to welcome them back.",
    director: "Ryan Coogler",
    cast: [
      {
        name: "Miles Caton",
        character: "Sammie Moore",
        image:
          "https://variety.com/wp-content/uploads/2025/04/Miles-Caton-headshot_credit-Mihailo-Andic-e1743639289624.jpg",
      },
      {
        name: "Saul Williams",
        character: "Jedidiah",
        image:
          "https://m.media-amazon.com/images/M/MV5BMTU5Nzc4ODI4NF5BMl5BanBnXkFtZTcwODkxNDEzOA@@._V1_.jpg",
      },
      {
        name: "Jack O'Connell",
        character: "Remmick",
        image:
          "https://resizing.flixster.com/vg-Ic6TkZKRXIWlTNq0OpKj2New=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/229265_v9_bc.jpg",
      },
      {
        name: "Tenaj L. Jackson",
        character: "Beatrice",
        image:
          "https://m.media-amazon.com/images/M/MV5BNGNhYjE0YTgtZDY4MC00Y2FkLTk4MGUtNjdmNGZkMzJhZTY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      },
      {
        name: "Michael B. Jordan",
        character: "Smoke",
        image:
          "https://cdn.britannica.com/74/219774-050-E0858F86/Michael-B-Jordan-2019.jpg",
      },
      {
        name: "David Maldonado",
        character: "Hogwood",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNKfj6RsyRZqO4nnWkPFrYMmgrzDmyG31pFQ&s",
      },
    ],
    trailerId: "7joulECTx_U",
    reviewId: "aNB0bB6luP0",
    whereToWatch: [
      {
        name: "Justwatch Free",
        url: "https://justwatchfree.vercel.app/movie/1233413",
      },
      {
        name: "Video Stream Hub",
        url: "https://videostreamhub.vercel.app/movie/1233413",
      },
      {
        name: "Tiny Movie Zone",
        url: "https://tinymoviezone.vercel.app/movie/1233413",
      },
    ],
    type: "movie",
    releaseDate: "April 18, 2025",
    runtime: "137 minutes",
    language: "English",
    reviews: [
      {
        author: "Warner Bros.",
        authorInitials: "WB",
        rating: 8.2,
        date: "april 19, 2025",
        content:
          "From Ryan Coogler-director of 'Black Panther' and 'Creed'-and starring Michael B. Jordan comes a new vision of fear: 'Sinners.'' Trying to leave their troubled lives behind, twin brothers (Jordan) return to their hometown to start again, only to discover that an even greater evil is waiting to welcome them back.",
      },
      {
        author: "Jane Smith",
        authorInitials: "JS",
        rating: 4,
        date: "Aptil 20, 2025",
        content:
          "Director and writer Ryan Coogler shared that some of his most vivid cinematic memories come from watching horror films in theaters as a young man - experiences that sparked his deep love for cinema. According to him, 'Sinners' is a kind of love letter to that feeling, crafted with the hope that viewers in theaters will experience the same thrill. And honestly? Mission accomplished.",
      },
    ],
  },
  {
    id: "ihostage",
    title: "iHostage",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMGEyNWI4NjctY2NkYS00ZDY0LTkyNTUtOGRhM2UzNWYxOTc2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    backimage:
      "https://i.ytimg.com/vi/lSTH0O1u1i8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCLd3SfGv8sG-0PaHi0ZnGYdwlN1w",
    year: 2025,
    rating: 5.8,
    genre: "Crime, Drama, Thriller",
    synopsis:
      "When a gunman enters an Apple Store in the heart of Amsterdam, the police face a delicate challenge to resolve the standoff. Based on true events.",
    director: "Bobby Boermans",
    cast: [
      {
        name: "Soufiane Moussouli",
        character: "Ammar Ajar",
        image:
          "https://static1.squarespace.com/static/602fb96597144054a9d7d972/61b7617e2b34a25c2e71a12b/6576d97289bd633af25638b7/1712148259804/DSC_5037.jpg?format=1500w",
      },
      {
        name: "Admir Sehovic",
        character: "Ilian Petrov",
        image:
          "https://media.e-talenta.eu/foto/750232.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjZmV0IiwiYXVkIjoiY2ZldCIsImlhdCI6MTc0Mzg1NjIxMCwiZXhwIjoxNzQzODYzNDEwLCJkYXRhIjp7ImNkbl9zY29wZSI6ImZvdG8iLCJjZG5faWQiOjc1MDIzMiwidXNlcl9wcm9maWxlSWQiOjB9fQ.dpIB3s7o7SAEfo_OZbuZjTTtr4v2nUzreFjgPcgJfkQ",
      },
      {
        name: "Emmanuel Ohene Boafo",
        character: "Mingus",
        image:
          "https://m.media-amazon.com/images/M/MV5BNzE2MDRmMTAtZjM4Mi00OWZmLWFjZjYtNWM2N2FkNDBiMGE5XkEyXkFqcGc@._V1_.jpg",
      },
      {
        name: "Fockeline Ouwerkerk",
        character: "Soof",
        image:
          "https://media.e-talenta.eu/foto/726562.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjZmV0IiwiYXVkIjoiY2ZldCIsImlhdCI6MTcyMzIwNTU3NywiZXhwIjoxNzIzMjEyNzc3LCJkYXRhIjp7ImNkbl9zY29wZSI6ImZvdG8iLCJjZG5faWQiOjcyNjU2MiwidXNlcl9wcm9maWxlSWQiOjB9fQ.i290rqEUKU-b6qWupXVi2ZF6h5T0E31iF4LQltPaf-w",
      },
      {
        name: "Roosmarijn van der Hoek",
        character: "Bente",
        image:
          "https://media.themoviedb.org/t/p/w235_and_h235_face/qMxNsj2o1bcSRMNSGQS4JVQUqGp.jpg",
      },
      {
        name: "Louis Talpe",
        character: "Winston",
        image:
          "https://resizing.flixster.com/vp04vBO11M75xpOwdymx7Dd8rwM=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/950359_v9_bb.jpg",
      },
    ],
    trailerId: "Dhg-3ME2L6M",
    whereToWatch: [
      {
        name: "Justwatch Free",
        url: "https://justwatchfree.vercel.app/movie/1371202",
      },
      {
        name: "Video Stream Hub",
        url: "https://videostreamhub.vercel.app/movie/1371202",
      },
      {
        name: "Tiny Movie Zone",
        url: "https://tinymoviezone.vercel.app/movie/1371202",
      },
    ],
    type: "movie",
    releaseDate: "April 18, 2025",
    runtime: "1HR 40Min",
    language: "Dutch",
    reviews: [
      {
        author: "Robert Johnson",
        authorInitials: "RJ",
        rating: 7.5,
        date: "April 20, 2025",
        content:
          "This film manages to capture your attention from the very first moments. It feels tense, raw, and surprisingly realistic-almost as if you are witnessing real events unfold rather than watching a dramatized interpretation. There's an authenticity to the way the story is presented, both in the cinematography and in the pacing of the narrative. The director clearly made a conscious effort to stay as close as possible to the real-life events that inspired the film, and that effort pays off in a big way.",
      },
      {
        author: "Sarah Williams",
        authorInitials: "SW",
        rating: 6.5,
        date: "March 2, 2025",
        content:
          "I looked forward to viewing this film. I enjoy foreign films. American tv is over produced and the writing is often not stellar. But European films and episodics tend to be gritier and more realistic. Grounded acting and real looking people who are not overly groomed. But Ihostage felt American, especially the constant music which turned it into melodrama and sentimentalized the story. The dialogue was often over written, as though they were explaining info to a not very bright audience. Dog Day Afternoon this is not. The great acting of Pacino, Cazale, Durning, etc. Reminds one how far films can go. Although I enjoyed ihostage overall, i certainly hoped for more.",
      },
    ],
  },
  {
    id: "a-working-man",
    title: "A Working Man",
    poster:
      "https://m.media-amazon.com/images/M/MV5BYmQxZGIxNTYtYTQwMy00ODdkLWI0MmQtM2E0ZmIyNmYzMGMzXkEyXkFqcGc@._V1_.jpg",
    backimage:
      "https://www.factsmostly.com/wp-content/uploads/2025/01/A-Working-Man.webp",
    year: 2025,
    rating: 5.8,
    genre: "Action, Drama, Thriller",
    synopsis:
      "Levon Cade left his profession behind to work construction and be a good dad to his daughter. But when a local girl vanishes, he's asked to return to the skills that made him a mythic figure in the shadowy world of counter-terrorism.",
    director: "David Ayer",
    cast: [
      {
        name: "Jason Statham",
        character: "Levon Cade",
        image:
          "https://deadline.com/wp-content/uploads/2025/02/jason-statham.jpg",
      },
      {
        name: "Jason Flemyng",
        character: "Wolo Kolisnyk",
        image:
          "https://media.themoviedb.org/t/p/w500/nYl0180ACnLzVlGbaAfuPtdGr9K.jpg",
      },
      {
        name: "Merab Ninidze",
        character: "Yuri",
        image: "https://ntvb.tmsimg.com/assets/assets/75904_v9_bb.jpg",
      },
      {
        name: "Maximilian Osinski",
        character: "Dimi Kolisnyk",
        image: "https://ntvb.tmsimg.com/assets/assets/532490_v9_aa.jpg",
      },
      {
        name: "Cokey Falkow",
        character: "Dougie",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8TFvbK3GAC083JuloWfmf8Vsktsg0J48mkQ&s",
      },
      {
        name: "Michael Peña",
        character: "Joe Garcia",
        image:
          "https://resizing.flixster.com/U4fPrtdfXpZVoanZ7QFBmuuEzeI=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/208373_v9_bc.jpg",
      },
    ],
    trailerId: "zTbgNC42Ops",
    reviewId: "AZ3C2LiO3CI",
    whereToWatch: [
      {
        name: "Justwatch Free",
        url: "https://justwatchfree.vercel.app/movie/1197306",
      },
      {
        name: "Video Stream Hub",
        url: "https://videostreamhub.vercel.app/movie/1197306",
      },
      {
        name: "Tiny Movie Zone",
        url: "https://tinymoviezone.vercel.app/movie/1197306",
      },
    ],
    type: "movie",
    releaseDate: "March 28, 2025",
    runtime: "1HR 56Min",
    language: "English",
    reviews: [
      {
        author: "Michael Chen",
        authorInitials: "MC",
        rating: 6.5,
        date: "April 10, 2025",
        content:
          "If it says Statham on the outside, it's Statham inside. Minor inconsistencies are acceptable. It's always a joy to see him fire about 200 bullets from a 20-round magazine. And of course, he's invulnerable. I almost forgot. 😉. Very much in vogue: a young, smart and powerful woman who was placed at his side so that the male audience wouldn't fall asleep.The only thing missing was for him to catch the flying bullets with his teeth. So, for a possible second part, one could add more. For the faint-hearted, the film exudes a fair amount of cultural pessimism. The theme of 'I scare you, and then I'm the hero who saves you' is inherent in American films. As such, the plot is rather one-dimensional and not for people who prefer a more complex way of thinking. Nevertheless, we felt thoroughly entertained at the end of the film and deeply impressed by the many close-ups of Statham's heroic face.",
      },
      {
        author: "Lisa Rodriguez",
        authorInitials: "LR",
        rating: 5.4,
        date: "April 1, 2025",
        content:
          "A Working Man is let down by its overly long run time exacerbated because of how needlessly convoluted its plotting is but it can still deliver the goods frequently enough to be a solid action flick that actually manages to avoid most of the icky issues with these types of stories. From the moment the flashy opening title sequence starts, it's clear this is going to be almost hilariously straight faced and better for it.Surprisingly, there's a pretty eccentric cast of villains here however, it always remains Jason Statham's movie and him doing his usual extremely serious shtick carries this one as usual. Once again, he's playing squarely to his strengths and it's seriously impressive how him playing this type of character for the umpteenth time doesn't feel anywhere near as stale as when his fellow contemporaries stay in their respective lanes.David Ayer's direction isn't as strong as his efforts in last year's The Beekeeper whilst keeping the film consistently visually slick despite a couple of weird creative flourishes. The action is unexpectedly choppy when also compared to Ayer and Statham's last collaboration, saved by the stuff that's still easy to see and a wild action packed finale. The overdone score by Jared Michael Fry really helps to nail the throwback feel this is going for.",
      },
    ],
  },
  {
    id: "the-accountant-2",
    title: "The Accountant 2",
    poster:
      "https://m.media-amazon.com/images/M/MV5BYjFiY2I0NTEtNjdjNy00MTljLThkOWYtMzNiYjYyMDcxYjhkXkEyXkFqcGc@._V1_QL75_UX190_CR0,0,190,281_.jpg",
    backimage:
      "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/medium/the-accountant-2-et00433878-1739521241.jpg",
    year: 2025,
    rating: 7.5,
    genre: "Action, Crime, Thriller",
    synopsis:
      "Christian Wolff applies his brilliant mind and illegal methods to reconstruct the unsolved puzzle of a Treasury chief's murder.",
    director: "Gavin O'Connor",
    cast: [
      {
        name: "Ben Affleck",
        character: "Christian Wolff",
        image:
          "https://cdn.britannica.com/33/242333-050-95A19CE8/Actor-Ben-Affleck-premiere-AIR-March-2023.jpg",
      },
      {
        name: "Jon Bernthal",
        character: "Braxton",
        image: "https://www.caa.com/caaspeakers/partyHeadshot/jon-bernthal.png",
      },
      {
        name: "Cynthia Addai-Robinson",
        character: "Marybeth Medina",
        image:
          "https://m.media-amazon.com/images/M/MV5BY2FhMGJkNWItMmYzNi00ZTE4LTlmMmItZWMwODI4ODRlYzFlXkEyXkFqcGc@._V1_.jpg",
      },
      {
        name: "J.K. Simmons",
        character: "Ray King",
        image:
          "https://resizing.flixster.com/oVXd8Pg3icKXpcXg7GGX6yFaDO4=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/v9/AllPhotos/72076/72076_v9_bb.jpg",
      },
      {
        name: "Allison Robertson",
        character: "Justine",
        image:
          "https://m.media-amazon.com/images/M/MV5BYjMzMTcyNjEtYjllYy00ODdlLTg3NzYtN2YyMjQwNWYzMTQwXkEyXkFqcGc@._V1_.jpg",
      },
      {
        name: "Daniella Pineda",
        character: "Anaïs",
        image: "https://ntvb.tmsimg.com/assets/assets/644016_v9_bc.jpg",
      },
    ],
    trailerId: "HPMh3AO4Gm0",
    whereToWatch: [
      {
        name: "Justwatch Free",
        url: "https://justwatchfree.vercel.app/movie/870028",
      },
      {
        name: "Video Stream Hub",
        url: "https://videostreamhub.vercel.app/movie/870028",
      },
      {
        name: "Tiny Movie Zone",
        url: "https://tinymoviezone.vercel.app/movie/870028",
      },
    ],
    type: "movie",
    releaseDate: "April 25, 2025",
    runtime: "2HR 12Min",
    language: "English",
    reviews: [
      {
        author: "Tom Wilson",
        authorInitials: "TW",
        rating: 5.4,
        date: "April 25, 2025",
        content:
          "This was the one film I wanted to see the most at SXSW and I was lucky enough to see the world premier and left more than pleased. Jon Bernthal really explodes on screen and you can feel the joy he gets from pushing his brothers buttons in the most entertaining way possible. These two have real, believable chemistry and brought something both familiar and unexpected while delivering a story that isn't the same ole buddy trope the way other films seem to struggle. Jon's comic relief blends perfectly with Ben's robotic, emotionlessness. It feels like anything can and will happen at any moment...and it does! I hope we see these two characters together again sooner than later!",
      },
      {
        author: "Amanda Lee",
        authorInitials: "AL",
        rating: 6.3,
        date: "April 21, 2025",
        content:
          "This is the first time I've seen the sequel be as good or better than the first movie! Great plot and was very funny in in a lot of spots!I would highly recommend that you go to see this movie. If you like the first one, you won't be disappointed!!!! They must've put a long time in developing the script to the movie as they did s great job on continuing in the story line from the first movie! I totally recommend this one! I truly hope there'll be a third movie and make this a franchise. It was so good, I think I will see it again as it was so good I thinki I will see it multiple times. The movie action was excellent add even though it was kinda long time wise, it went quickly.Great movie, go see it people!!",
      },
    ],
  },
  {
    id: "captain-america-brave-new-world",
    title: "Captain America: Brave New World",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNDRjY2E0ZmEtN2QwNi00NTEwLWI3MWItODNkMGYwYWFjNGE0XkEyXkFqcGc@._V1_.jpg",
    backimage:
      "https://theknockturnal.com/wp-content/uploads/2025/02/HO00003393.jpg",
    year: 2025,
    rating: 5.8,
    genre: "Action, Adventure, Sci-Fi",
    synopsis:
      "Sam Wilson, the new Captain America, finds himself in the middle of an international incident and must discover the motive behind a nefarious global plan.",
    director: "Julius Onah",
    cast: [
      {
        name: "Anthony Mackie",
        character: "Sam Wilson/Captain America",
        image:
          "https://cdn.britannica.com/33/215933-050-BCB7B4DD/American-actor-Anthony-Mackie-2019.jpg",
      },
      {
        name: "Harrison Ford",
        character: "President Thaddeus Ross/Red Hulk",
        image:
          "https://ntvb.tmsimg.com/assets/assets/25704_v9_bc.jpg?w=360&h=480",
      },
      {
        name: "Danny Ramirez",
        character: "Joaquin Torres/Falcon",
        image:
          "https://live.screendollars.com/wp-content/uploads/2021/10/0-DANNY-RAMIREZ-PROFILE-01.jpg",
      },
      {
        name: "Shira Haas",
        character: "Ruth Bat-Seraph",
        image:
          "https://goldenglobes.com/wp-content/uploads/2023/10/shira-haas.jpg?w=600?w=600",
      },
      {
        name: "Carl Lumbly",
        character: "Isaiah Bradley",
        image:
          "https://ntvb.tmsimg.com/assets/assets/76483_v9_bc.jpg?w=360&h=480",
      },
      {
        name: "Tim Blake Nelson",
        character: "Samuel Sterns",
        image:
          "https://resizing.flixster.com/XarnjJ__dCWrpSGvAP4rgXNpMCE=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/79718_v9_bc.jpg",
      },
    ],
    trailerId: "1pHDWnXmK7Y",
    whereToWatch: [
      {
        name: "Justwatch Free",
        url: "https://justwatchfree.vercel.app/movie/822119",
      },
      {
        name: "Video Stream Hub",
        url: "https://videostreamhub.vercel.app/movie/822119",
      },
      {
        name: "Tiny Movie Zone",
        url: "https://tinymoviezone.vercel.app/movie/822119",
      },
    ],
    type: "movie",
    releaseDate: "February 11, 2025",
    runtime: "1HR 58Min",
    language: "English",
    reviews: [
      {
        author: "David Park",
        authorInitials: "DP",
        rating: 4,
        date: "April 15, 2025",
        content:
          "This movie failed to focus on a villain or a storyline despite its length. It felt like it was being used as an excuse to introduce new dynamics and catapult upcoming releases and potential projects (IDF woman, Bucky in Thunderbolts*, the new Falcon) rather than focusing on the Captain America character. Both the Winter Soldier & Falcon show as well as the trailers made it seem like this movie had specific intentions for the new Captain America, but the movie fell flat and didn't tell us anything we didn't already know about Sam. Despite the possible consequences, the villains wound up feeling low stakes and impersonal. The most interesting characters had the least screen time, and it was overall disappointing compared to the show that preceded it.",
      },
      {
        author: "Elena Gomez",
        authorInitials: "EG",
        rating: 3,
        date: "April 20, 2025",
        content:
          "Considering the fact that the Captain America films have produced two of the best MCU films in Winter Soldier and Civil War, it is a shame that we are now left with this thoroughly mediocre and lazy fourth instalment.Firstly, this film requires you to recall the events of a movie that came out in 2008. If you don't remember the events of this film, don't worry, as Brave New World is chock full of clunky exposition. It also requires you to remember the events of a show that came out in 2021. Without remembering some of these details, certain plot points just lose all their impact and don't carry much weight. Maybe my memory isn't what it used to be, and maybe I should have rewatched The Incredible Hulk and Falcon and the Winter Soldier before watching this, but who has the time for that.Even ignoring these links to previous MCU instalments, the whole plot still feels incredibly messy and all over the place. There is a random collection of new characters all of whom get zero character development. Even Sam Wilson, Cap himself, gets no real development or journey in this film. It's an incredibly bland portrayal of the character, which is a shame given the great journey Steve Rodgers had. Anthony Mackie and Sam Wilson deserves more from his solo projects. Once you muddle through the clumsy link back the Eternals, and the overarching plot that links to The Incredible Hulk, you are still left trying to grapple with other bizarre aspects of the film. Why was a character seemingly central to the story like Sidewinder only added in reshoots? They can spin as much yarn as they like about the reshoots not being material to the film, but they clearly weren't happy with what they had in the can when they finished principal photography and it shows. The plot also felt very fragmented and choppy. Somehow it managed to feel convoluted yet mindlessly simple at the same time. Quite the achievement.Now I will put my positive hat on briefly as there are some good points to this film. Despite being given very little to work with, Anthony Mackie puts in a good performance as Cap. It's clear that he could nail this role if the writing wasn't so poor, so I hope this improves for future outings. His chemistry with the new Falcon is pretty solid and there's some promise there. I do also think the final action scene is suitably chaotic, even if it does fizzle out, and the action throughout is all decent enough if nothing remarkable.Ultimately though I really do think that Marvel has just hit a brick wall. With each film that passes, it becomes more and more apparent that Endgame was the obvious end point. The franchise should have taken a hiatus then kicked off again with a whole new cast and a whole new set of stories. It's a shame as Mackie has been let down by a poor film and poor overall franchise direction, but for Marvel diehards this film will be watchable enough.",
      },
    ],
  },
  {
    id: "novocaine",
    title: "Novocaine",
    poster:
      "https://m.media-amazon.com/images/M/MV5BZWJmMTIxMjEtNGNiZC00NTEzLWE4YmYtZDlmZjRkZGQzNzcyXkEyXkFqcGc@._V1_.jpg",
    backimage:
      "https://images.justwatch.com/backdrop/327373239/s640/novocaine-2025",
    year: 2025,
    rating: 6.5,
    genre: "Action, Comedy, Thriller",
    synopsis:
      "When the girl of his dreams is kidnapped, a man incapable of feeling physical pain turns his rare condition into an unexpected advantage in the fight to rescue her.",
    director: "Dan Berk, Robert Olsen",
    cast: [
      {
        name: "Jack Quaid",
        character: "Nate",
        image:
          "https://ntvb.tmsimg.com/assets/assets/658104_v9_bc.jpg?w=360&h=480",
      },
      {
        name: "Amber Midthunder",
        character: "Sherry",
        image:
          "https://deadline.com/wp-content/uploads/2016/02/midthinder.jpeg",
      },
      {
        name: "Ray Nicholson",
        character: "Simon",
        image:
          "https://resizing.flixster.com/uHZK_5z7loV3GtTM516TzbIYdPY=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/1538760_v9_aa.jpg",
      },
      {
        name: "Jacob Batalon",
        character: "Roscoe",
        image:
          "https://m.media-amazon.com/images/M/MV5BZjgxNjYzNzYtYTA1Zi00MzkzLWFhYWMtZmFlNWYxZDRkODA0XkEyXkFqcGc@._V1_.jpg",
      },
      {
        name: "Betty Gabriel",
        character: "Mincy",
        image:
          "https://media.baselineresearch.com/images/1965958/1965958_full.jpg",
      },
      {
        name: "Conrad Kemp",
        character: "Andre",
        image:
          "https://resizing.flixster.com/Mv1jK6v6b8URGhosNboXWuuhQzQ=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/719693_v9_ba.jpg",
      },
    ],
    trailerId: "-PyOIlJEdqA",
    reviewId: "cIFdkeB3FX4",
    whereToWatch: [
      {
        name: "Justwatch Free",
        url: "https://justwatchfree.vercel.app/movie/1195506",
      },
      {
        name: "Video Stream Hub",
        url: "https://videostreamhub.vercel.app/movie/1195506",
      },
      {
        name: "Tiny Movie Zone",
        url: "https://tinymoviezone.vercel.app/movie/1195506",
      },
    ],
    type: "movie",
    releaseDate: "March 14, 2025",
    runtime: "1HR 50Min",
    language: "English",
    reviews: [
      {
        author: "Jennifer Kim",
        authorInitials: "JK",
        rating: 4.4,
        date: "march 31, 2025",
        content:
          "A dark comedy that might not be everyone's cup of tea. If you're able to suspend belief and just go with the absurdity of the situations, Novocaine delivers a decent amount of entertainment.The pacing is strong, with the film keeping a brisk pace that never lingers too long on one thing. It's filled with bizarre twists that are often more laughable than believable, but that's part of its fun. The performances are engaging in a way that helps you overlook the more painful elements.Ultimately, if you're in the mood for something offbeat with a good pace and a laughable yet strangely compelling plot, Novocaine might be worth checking out. Just don't expect anything too grounded or serious.",
      },
      {
        author: "Marcus Thompson",
        authorInitials: "MT",
        rating: 6,
        date: "April 15, 2025",
        content:
          "Novocaine was on my list of most anticipated for the year, and I got the chance to watch it in early March for Regal's March 3rd Monday Mystery Movie. It stars Jack Quaid and Amber Midthunder and is about a guy who can't feel physical pain/sensations who embarks on a rescue mission after the girl he likes is kidnapped during a bank robbery. There were several things to enjoy about this movie - the premise was interesting and it was comedic to see some of the situations he got himself into during his rescue mission. While I didn't hate this film, I wasn't super in love with it, which surprised me because the trailer made it look pretty fun. Part of the problem is, I think, the casting of Jack Quaid - who seems to play the same type of character in most of his roles - and the writing of the love interest could have probably been improved in ways to make her character a bit more likable. An unnecessary racially divisive line snuck in at the end was nonsensical too. But as a whole, I've seen worse movies, so I don't consider this a waste of my time. Just wish it could have been a bit better. Video review to come shortly.",
      },
    ],
  },
  {
    id: "black-bag",
    title: "Black Bag",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNzA1OWU4NDMtMDUxMC00NWI4LWJhYjUtYWQ0OGQ5MTc2NDRjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    backimage:
      "https://tomindia.s3.ap-south-1.amazonaws.com/prod/post/ogImage/1740485642326_b0ab768fc17d447f80f36bd7d8642428_Black-Bag-Holywood-movies-tomorrowsindia.jpg",
    year: 2025,
    rating: 6.9,
    genre: "Spy, Drama, Mystery",
    synopsis:
      "When intelligence agent Kathryn Woodhouse is suspected of betraying the nation, her husband - also a legendary agent - faces the ultimate test of whether to be loyal to his marriage, or his country.",
    director: "Steven Soderbergh",
    cast: [
      {
        name: "Michael Fassbender",
        character: "George Woodhouse",
        image:
          "https://cdn.britannica.com/76/219876-050-FB1E13F8/Michael-Fassbender-2017.jpg",
      },
      {
        name: "Gustaf Skarsgård",
        character: "Philip Meacham",
        image: "https://ntvb.tmsimg.com/assets/assets/425072_v9_bc.jpg",
      },
      {
        name: "Cate Blanchett",
        character: "Kathryn St. Jean",
        image:
          "https://cdn.britannica.com/34/220234-050-000D4B0E/Cate-Blanchett-2018.jpg",
      },
      {
        name: "Tom Burke",
        character: "Freddie Smalls",
        image:
          "https://i.guim.co.uk/img/media/da099a615740971ca57dd60bf29bcc9499ec7c5a/863_327_4705_2823/master/4705.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=479ade3683890b2f3b29f9080ba64b34",
      },
      {
        name: "Marisa Abela",
        character: "Clarissa Dubose",
        image: "https://ntvb.tmsimg.com/assets/assets/1314826_v9_bc.jpg",
      },
      {
        name: "Regé-Jean Page",
        character: "Col. James Stokes",
        image:
          "https://ntvb.tmsimg.com/assets/assets/944021_v9_bb.jpg?w=360&h=480",
      },
    ],
    trailerId: "n_56L6WzLT8",
    reviewId: "WcMMXajRw_c",
    whereToWatch: [
      {
        name: "Justwatch Free",
        url: "https://justwatchfree.vercel.app/movie/1233575",
      },
      {
        name: "Video Stream Hub",
        url: "https://videostreamhub.vercel.app/movie/1233575",
      },
      {
        name: "Tiny Movie Zone",
        url: "https://tinymoviezone.vercel.app/movie/1233575",
      },
    ],
    type: "movie",
    releaseDate: "March 14, 2025",
    runtime: "1HR 33Min",
    language: "English",
    reviews: [
      {
        author: "Rachel Green",
        authorInitials: "RG",
        rating: 6.5,
        date: "March 29, 2025",
        content:
          "There's just about enough intrigue in David Koepp's efficient script to hold the attention in trying to decipher what is going on in Steven Soderbergh's underwhelming spy thriller which is more like a theatrical play than a cinematic experience.All of the assembled cast do a sufficient job in delivering a very talky script. I especially liked Michael Fassbender's concise and measured performance as the spy ordered to get to the bottom of a leaked top secret software program that could jeopardise national security where his wife, Cate Blanchett, is one of the suspects.For me Soderbergh never quite scratches my itch when he attempts to do 'cool' like he did with the Ocean trilogy. There's a cold aloofness that prevents me as a viewer to get completely wrapped up in the story he is trying to tell. Also with Black Bag I wasn't keen on the cinematography which looked like a creative decision to make most light sources seem diffused, presumably to make this look like an old fashioned espionage thriller from the 1960's. Fassbenders character certainly has shades of Harry Palmer to him, especially wearing those trademark black glasses.Despite it being talky and smart it's not that taut and I would like to have seen a bit more action and a few surprise twists for there to be a better payoff for all the concentration the viewer has to endure to get to a rather mediocre finale.",
      },
      {
        author: "James Wilson",
        authorInitials: "JW",
        rating: 5.4,
        date: "March 20, 2025",
        content:
          "I find myself increasingly weary of the spy film genre, especially those that center around a romantic couple. It has become a trope so familiar, so predictable, that the very notion of it now feels like an exercise in the mundane. Each iteration feels almost mechanically constructed, as if there is an unspoken formula at play, one that prioritizes style over substance, a kind of cinematic sleight of hand designed to keep the audience distracted from the lack of originality beneath the surface. In this particular instance, however, the dialogue attempts to elevate itself above the usual banter of its kind, but only to the point of indulging in an almost ostentatious, borderline pretentious, air of intellectualism. There's a certain artifice to it all-an effort to sound clever, to sound profound, that ultimately rings hollow. The conversations between the characters, rather than offering any real emotional depth or compelling insight, instead feel like performative displays of wit, which do little more than alienate rather than engage. This was a film that seemed more concerned with showcasing its own perceived sophistication than with crafting any meaningful connection with its audience. And yet, despite all its verbal flourishes, it never once managed to grasp my attention in any truly significant way. The pacing felt sluggish, the stakes hardly compelling, and the emotional core-if one could even call it that-was so underdeveloped it barely registered. In the end, it was less a work of cinema and more an exercise in style over substance, one that never captured my imagination or curiosity.",
      },
    ],
  },
  {
    id: "mickey-17",
    title: "Mickey 17",
    poster:
      "https://m.media-amazon.com/images/M/MV5BZGQwYmEzMzktYzBmMy00NmVmLTkyYTUtOTYyZjliZDNhZGVkXkEyXkFqcGc@._V1_.jpg",
    backimage:
      "https://i0.wp.com/kreattivita.org/wp-content/uploads/2025/03/mickey_oneseven_ver2_xxlg-1-2000x1125-1-compress.jpg?fit=1920%2C1080&ssl=1",
    year: 2025,
    rating: 6.9,
    genre: "Adventure, Fantacy, Sci-Fi",
    synopsis:
      "During a human expedition to colonize space, Mickey 17, a so-called 'expendable' employee, is sent to explore an ice planet.",
    director: "Bong Joon Ho",
    cast: [
      {
        name: "Robert Pattinson",
        character: "Mickey Barnes",
        image:
          "https://resizing.flixster.com/bRlGZhDNaylYhuhlCPAWoSOtL-8=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/487714_v9_bb.jpg",
      },
      {
        name: "Steven Yeun",
        character: "Timo",
        image:
          "https://m.media-amazon.com/images/M/MV5BZTdkZDYwNzQtNmJhOC00NGRkLWJmOTgtZDM1NGE0ZDFmYTdmXkEyXkFqcGc@._V1_.jpg",
      },
      {
        name: "Michael Monroe",
        character: "Matthew",
        image:
          "https://m.media-amazon.com/images/M/MV5BMTIxNDMyNzItZjIzZi00MzdjLThmMWEtNmQ4ZWVhNjcyM2EwXkEyXkFqcGc@._V1_.jpg",
      },
      {
        name: "Patsy Ferran",
        character: "Dorothy",
        image: "https://ntvb.tmsimg.com/assets/assets/1085728_v9_bb.jpg",
      },
      {
        name: "Cameron Britton",
        character: "Arkady",
        image: "https://ntvb.tmsimg.com/assets/assets/718695_v9_bb.jpg",
      },
      {
        name: "Lloyd Hutchinson",
        character: "Underboss",
        image:
          "https://resizing.flixster.com/ciRiKM7AlzOA_CUaTXyEVGmVxKE=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/266591_v9_aa.jpg",
      },
    ],
    trailerId: "osYpGSz_0i4",
    reviewId: "C1t8r7jR66Y",
    whereToWatch: [
      {
        name: "Justwatch Free",
        url: "https://justwatchfree.vercel.app/movie/696506",
      },
      {
        name: "Video Stream Hub",
        url: "https://videostreamhub.vercel.app/movie/696506",
      },
      {
        name: "Tiny Movie Zone",
        url: "https://tinymoviezone.vercel.app/movie/696506",
      },
    ],
    type: "movie",
    releaseDate: "March 7, 2025",
    runtime: "2HR 17Min",
    language: "English",
    reviews: [
      {
        author: "Daniel Cohen",
        authorInitials: "DC",
        rating: 5.8,
        date: "March 25, 2023",
        content:
          "Mickey 17 had the potential to be an innovative sci-fi/comedy film, and it starts off in an engaging and original way. However, as the story progresses, it loses focus and ultimately turns into something generic, with an uninspired and rushed conclusion.Robert Pattinson delivers a solid and well-rounded performance, proving his versatility even in a film that leans more towards comedy - something outside his usual genre. Despite the lighter tone, Pattinson brings depth to his character, making the story feel more grounded and adding an emotional layer to the film that otherwise would feel empty.Cloning is a fascinating subject for a sci-fi movie because of all the moral and practical dilemmas it presents. Mickey 17 introduces these ideas but doesn't fully engage in them, shifting focus to a less compelling storyline midway through - the Creepers.It feels out of the place compared to the film's promising start and even the trailers- The initial mix of humor and originality is lost, and by the end, the movie feels like it was hurriedly wrapped up just to deliver something, lacking any real creativity or impact.That said, the film excels in its production design. The setting and character outfits are well-crafter, adding to the immersive sci-fi atmosphere. Additionally, the visual effects are compelling, bringing the futuristic world to life in a convincing and visually stunning way, which helps maintain engagement even when the story fails to do so.",
      },
      {
        author: "Olivia Martinez",
        authorInitials: "OM",
        rating: 6.4,
        date: "April 5, 2024",
        content:
          "I love movies that step out of the comfort zone and aren't afraid to tell a weird, uncomfortable story. This movie is exactly that. Although it's not perfect, it's dark, comedic, thought-provoking & corny (in good and some bad ways lol). Robert Pattinson's character is a little annoying with the whole voice thing at first but his acting is incredible in this movie, props to him. Joon-ho had a super high bar to reach after Parasite, and this movie definitely reached that for me. His work is diverse, unique and poetic while being entertaining for all. Overall it is definitely worth a watch and one of my faves in recent years.",
      },
    ],
  },
  {
    id: "ash",
    title: "Ash",
    poster:
      "https://m.media-amazon.com/images/M/MV5BOTYwZDE3ZDctOTc2Mi00MWIyLWFmMjctZTJmNzNmMjZkOTI0XkEyXkFqcGc@._V1_.jpg",
    backimage:
      "https://dx35vtwkllhj9.cloudfront.net/ifcfilms/ash/images/regions/us/header.jpg",
    year: 2025,
    rating: 5.8,
    genre: "Horror, Thriller, Sci-Fi",
    synopsis:
      "A woman wakes up on a distant planet and finds the crew of her space station viciously killed. Her investigation into what happened sets in motion a terrifying chain of events.",
    director: "Flying Lotus",
    cast: [
      {
        name: "Eiza González",
        character: "Riya",
        image:
          "https://ntvb.tmsimg.com/assets/assets/679359_v9_ba.jpg",
      },
      {
        name: "Aaron Paul",
        character: "Brion",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Aaron_Paul%2C_May_2009_%282%29_%28cropped%29.jpg/250px-Aaron_Paul%2C_May_2009_%282%29_%28cropped%29.jpg",
      },
      {
        name: "Iko Uwais",
        character: "Adhi",
        image: "https://m.media-amazon.com/images/M/MV5BYTI0YWY5NzAtZWNlZi00ZTlhLTlhZWItMzE1MWJkN2JlMzg1XkEyXkFqcGc@._V1_.jpg",
      },
      {
        name: "Kate Elliott",
        character: "Clarke",
        image: "https://m.media-amazon.com/images/M/MV5BNDg3NTFhNTItZGE2ZC00YWExLWIxMjItYTBmMjQ5MGM1NjhiXkEyXkFqcGc@._V1_QL75_UX158_.jpg",
      },
      {
        name: "Beulah Koale",
        character: "Kevin",
        image: "https://ntvb.tmsimg.com/assets/assets/939050_v9_bb.jpg",
      },
      {
        name: "Flying Lotus",
        character: "Davis",
        image: "https://the-talks.com/wp-content/uploads/2017/08/Flying-Lotus-01.jpg",
      },
    ],
    trailerId: "uvp2EYCXYwU",
    whereToWatch: [
      {
        name: "Justwatch Free",
        url: "https://justwatchfree.vercel.app/movie/931349",
      },
      {
        name: "Video Stream Hub",
        url: "https://videostreamhub.vercel.app/movie/931349",
      },
      {
        name: "Tiny Movie Zone",
        url: "https://tinymoviezone.vercel.app/movie/931349",
      },
    ],
    type: "movie",
    releaseDate: "March 21, 2025",
    runtime: "1HR 35Min",
    language: "English",
    reviews: [
      {
        author: "Chris Taylor",
        authorInitials: "CT",
        rating: 7.5,
        date: "April 1, 2025",
        content:
          "I watched an advanced screening of the sci-fi/horror film Ash (2025) in theaters this evening. The story follows a woman who wakes up with amnesia aboard a spaceship, only to discover that all her colleagues are dead. She encounters another survivor who is just as confused and desperate to escape. As they try to make sense of what happened, she begins to suspect that she might be responsible...Directed by Flying Lotus (Kuso), the film stars Eiza González (Baby Driver), Aaron Paul (Breaking Bad), Iko Uwais (The Raid 1 & 2), Kate Elliott (Deathgasm), and Beulah Koale (Thank You for Your Service).The film has strong The Thing and Pitch Black vibes, with an atmosphere that feels immersive thanks to its authentic sets, costumes, props, and backdrops. The acting is excellent, and the horror elements are top-tier, featuring grotesque corpses, brutal kill scenes, and some creative use of scissors and fire. Speaking of fire, this film has some of the best CGI flames I've ever seen-a rare feat. The last 20-25 minutes are a perfect 10/10; I could watch an entire film based on the final flashback sequence and showdown alone. The intensity in those scenes, along with the film's conclusion, is elite.",
      },
      {
        author: "Natalie Wong",
        authorInitials: "NW",
        rating: 6.3,
        date: "April 10, 2025",
        content:
          "The story arc had great potential but it was not executed as well as it could have been. Some scenes just seemed out of place and made no sense, the alien reveal was not impressive nor was it presented well. The editing was not great with too many quick cuts that took away from the scene. I'm trying not to give anything away in spoilers, but I do disagree with another review that the acting was not as bad as they stated it was. I think for what she was going through that Eiza's performance was fine in representing the character's situation and journey. All in all it was just not what I was hoping for. Not enough sci-fi and the horror was not all that horrific.",
      },
    ],
  },
];

export const trendingShows: TVShow[] = [
  {
    id: "the-last-of-us",
    title: "The Last of Us",
    poster: "https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2025/03/GmfYJadXYAAuJVg.jpg",
    backimage:
      "https://9meters.com/wp-content/uploads/the-last-of-us-logo.webp",
    year: 2023,
    rating: 8.8,
    genre: "Action, Adventure, Drama",
    synopsis:
      "After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity's last hope.",
    creator: "Craig Mazin, Neil Druckmann",
    cast: [
      {
        name: "Bella Ramsey",
        character: "Ellie Williams",
        image:
          "https://goldenglobes.com/wp-content/uploads/2023/12/Bella-Ramsey-.png?w=600?w=600",
      },
      {
        name: "Pedro Pascal",
        character: "Joel Miller",
        image:
          "https://cdn.britannica.com/41/240741-050-D4777963/Pedro-Pascal-attends-premiere-The-Last-of-US-January-2023.jpg",
      },
      {
        name: "Gabriel Luna",
        character: "Tommy Miller",
        image: "https://ntvb.tmsimg.com/assets/assets/573619_v9_bb.jpg",
      },
      {
        name: "Isabela Merced",
        character: "Dina",
        image: "https://m.media-amazon.com/images/M/MV5BYmFmYjBiYjQtNDA3NS00ZTA5LTliNmEtNmExYTc2MDJiMmZlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      },
      {
        name: "Young Mazino",
        character: "Jesse",
        image: "https://ntvb.tmsimg.com/assets/assets/1145072_v9_aa.jpg",
      },
      {
        name: "Kaitlyn Dever",
        character: "Abby Anderson",
        image: "https://goldenglobes.com/wp-content/uploads/2023/10/kaitlyn-dever-gettyimages-1346387598.jpg",
      },
    ],
    trailerId: "_zHPsmXCjB0",
    reviewId: "QwreMeXlFoY",
    whereToWatch: [
      {
        name: "Justwatch Free",
        url: "https://justwatchfree.vercel.app/tv/100088",
      },
      {
        name: "Video Stream Hub",
        url: "https://videostreamhub.vercel.app/tv/100088",
      },
      {
        name: "Tiny Movie Zone",
        url: "https://tinymoviezone.vercel.app/tv/100088",
      },
    ],
    type: "tv-show",
    seasons: 2,
    episodes: 7,
    network: "HBO",
    status: "Renewed for Season 2",
    reviews: [
      {
        author: "Kevin Brown",
        authorInitials: "KB",
        rating: 5,
        date: "January 20, 2023",
        content:
          "The Last of Us series, based on the critically acclaimed video game, offers a hauntingly beautiful and intense portrayal of a post-apocalyptic world. It follows Joel (Pedro Pascal), a hardened survivor, and Ellie (Bella Ramsey), a young girl with a mysterious immunity to the deadly infection decimating humanity. The series excels in blending high-stakes action with deeply emotional character moments, capturing the complex relationship between Joel and Ellie as they journey through a shattered world. The show's strength lies in its compelling storytelling, which maintains loyalty to the game while adding fresh perspectives. The performances by Pascal and Ramsey are raw and impactful, making the audience care deeply for their characters. Visually, the series is stunning, with meticulous set design that brings this ravaged world to life. The pacing may feel slow at times for those looking for constant action, but the story's emotional depth and tension are well worth it.",
      },
      {
        author: "Maria Garcia",
        authorInitials: "MG",
        rating: 4,
        date: "February 5, 2023",
        content:
          "When you try to depict a game as beloved (and hated) as The Last of Us, you're in for a challenge. In a world where everyone has the opportunity to voice their opinion, it's hard to deliver. However, for me, this show delivered on every level. It's thrilling, emotional, and offers compact storytelling with enough nods to the game while standing completely on its own.The most important aspect is the chemistry between the two main characters, and for me, this hit the mark perfectly. The supporting characters are great as well, and even the smallest details, like the spoken dialogue, have been given careful thought and attention. There's no moment where you think, 'Hmm, maybe not.' I've watched the episodes three times now, and with each viewing, I notice more details, especially in the dialogue. This is why I love watching television that shows true craftsmanship and passion in every aspect of the production!",
      },
    ],
  },
  {
    id: "house-of-the-dragon",
    title: "House of the Dragon",
    poster: "/placeholder.svg?height=600&width=400",
    backimage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfxMAqk4zydj2BA7FmNWlL-GGWfYH5S66JdQ&s",
    year: 2022,
    rating: 8.5,
    genre: "Action, Adventure, Fantasy",
    synopsis:
      "The story of the Targaryen civil war that took place about 200 years before events portrayed in Game of Thrones.",
    creator: "Ryan Condal, George R.R. Martin",
    cast: [
      {
        name: "Miles Caton",
        character: "Sammie Moore",
        image:
          "https://variety.com/wp-content/uploads/2025/04/Miles-Caton-headshot_credit-Mihailo-Andic-e1743639289624.jpg",
      },
      {
        name: "Saul Williams",
        character: "Sammie Moore",
        image:
          "https://m.media-amazon.com/images/M/MV5BMTU5Nzc4ODI4NF5BMl5BanBnXkFtZTcwODkxNDEzOA@@._V1_.jpg",
      },
      {
        name: "Jack O'Connell",
        character: "Sammie Moore",
        image: "https://example.com/jack.jpg",
      },
      {
        name: "Tenaj L. Jackson",
        character: "Sammie Moore",
        image: "https://example.com/tenaj.jpg",
      },
      {
        name: "Michael B. Jordan",
        character: "Sammie Moore",
        image: "https://example.com/michael.jpg",
      },
      {
        name: "David Maldonado",
        character: "Sammie Moore",
        image: "https://example.com/david.jpg",
      },
    ],
    trailerId: "7joulECTx_U",
    reviewId: "aNB0bB6luP0",
    whereToWatch: [
      {
        name: "Justwatch Free",
        url: "https://justwatchfree.vercel.app/tv/1233413",
      },
      {
        name: "Video Stream Hub",
        url: "https://videostreamhub.vercel.app/tv/1233413",
      },
      {
        name: "Tiny Movie Zone",
        url: "https://tinymoviezone.vercel.app/tv/1233413",
      },
    ],
    type: "tv-show",
    seasons: 1,
    episodes: 10,
    network: "HBO",
    status: "Renewed for Season 2",
    reviews: [
      {
        author: "Thomas Wright",
        authorInitials: "TW",
        rating: 4,
        date: "August 25, 2022",
        content:
          "A worthy successor to Game of Thrones that recaptures the political intrigue and family drama that made the original series so compelling. The time jumps are occasionally jarring, but the performances are excellent.",
      },
      {
        author: "Sophia Lee",
        authorInitials: "SL",
        rating: 4,
        date: "September 10, 2022",
        content:
          "Visually stunning with impressive dragon sequences and strong performances, particularly from Paddy Considine and Matt Smith. The show successfully establishes its own identity while honoring its predecessor.",
      },
    ],
  },
  {
    id: "severance",
    title: "Severance",
    poster: "/placeholder.svg?height=600&width=400",
    backimage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfxMAqk4zydj2BA7FmNWlL-GGWfYH5S66JdQ&s",
    year: 2022,
    rating: 8.7,
    genre: "Drama, Mystery, Sci-Fi",
    synopsis:
      "Mark leads a team of office workers whose memories have been surgically divided between their work and personal lives; when a mysterious colleague appears outside of work, it begins a journey to discover the truth about their jobs.",
    creator: "Dan Erickson",
    cast: [
      {
        name: "Miles Caton",
        character: "Sammie Moore",
        image:
          "https://variety.com/wp-content/uploads/2025/04/Miles-Caton-headshot_credit-Mihailo-Andic-e1743639289624.jpg",
      },
      {
        name: "Saul Williams",
        character: "Sammie Moore",
        image:
          "https://m.media-amazon.com/images/M/MV5BMTU5Nzc4ODI4NF5BMl5BanBnXkFtZTcwODkxNDEzOA@@._V1_.jpg",
      },
      {
        name: "Jack O'Connell",
        character: "Sammie Moore",
        image: "https://example.com/jack.jpg",
      },
      {
        name: "Tenaj L. Jackson",
        character: "Sammie Moore",
        image: "https://example.com/tenaj.jpg",
      },
      {
        name: "Michael B. Jordan",
        character: "Sammie Moore",
        image: "https://example.com/michael.jpg",
      },
      {
        name: "David Maldonado",
        character: "Sammie Moore",
        image: "https://example.com/david.jpg",
      },
    ],
    trailerId: "7joulECTx_U",
    reviewId: "aNB0bB6luP0",
    whereToWatch: [
      {
        name: "Justwatch Free",
        url: "https://justwatchfree.vercel.app/tv/1233413",
      },
      {
        name: "Video Stream Hub",
        url: "https://videostreamhub.vercel.app/tv/1233413",
      },
      {
        name: "Tiny Movie Zone",
        url: "https://tinymoviezone.vercel.app/tv/1233413",
      },
    ],
    type: "tv-show",
    seasons: 1,
    episodes: 9,
    network: "Apple TV+",
    status: "Renewed for Season 2",
    reviews: [
      {
        author: "Alex Johnson",
        authorInitials: "AJ",
        rating: 5,
        date: "February 25, 2022",
        content:
          "A mind-bending, meticulously crafted thriller with one of the best season finales in recent memory. The production design and direction create a perfectly unsettling corporate dystopia.",
      },
      {
        author: "Rebecca Chen",
        authorInitials: "RC",
        rating: 5,
        date: "March 10, 2022",
        content:
          "Brilliantly conceived and executed. The show builds its mystery with patience and precision, and the ensemble cast is uniformly excellent. A truly original and thought-provoking series.",
      },
    ],
  },
  {
    id: "the-bear",
    title: "The Bear",
    poster: "/placeholder.svg?height=600&width=400",
    backimage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfxMAqk4zydj2BA7FmNWlL-GGWfYH5S66JdQ&s",
    year: 2022,
    rating: 8.6,
    genre: "Comedy, Drama",
    synopsis:
      "A young chef from the fine dining world returns to Chicago to run his family's sandwich shop after the suicide of his brother.",
    creator: "Christopher Storer",
    cast: [
      {
        name: "Miles Caton",
        character: "Sammie Moore",
        image:
          "https://variety.com/wp-content/uploads/2025/04/Miles-Caton-headshot_credit-Mihailo-Andic-e1743639289624.jpg",
      },
      {
        name: "Saul Williams",
        character: "Sammie Moore",
        image:
          "https://m.media-amazon.com/images/M/MV5BMTU5Nzc4ODI4NF5BMl5BanBnXkFtZTcwODkxNDEzOA@@._V1_.jpg",
      },
      {
        name: "Jack O'Connell",
        character: "Sammie Moore",
        image: "https://example.com/jack.jpg",
      },
      {
        name: "Tenaj L. Jackson",
        character: "Sammie Moore",
        image: "https://example.com/tenaj.jpg",
      },
      {
        name: "Michael B. Jordan",
        character: "Sammie Moore",
        image: "https://example.com/michael.jpg",
      },
      {
        name: "David Maldonado",
        character: "Sammie Moore",
        image: "https://example.com/david.jpg",
      },
    ],
    trailerId: "7joulECTx_U",
    reviewId: "aNB0bB6luP0",
    whereToWatch: [
      {
        name: "Justwatch Free",
        url: "https://justwatchfree.vercel.app/tv/1233413",
      },
      {
        name: "Video Stream Hub",
        url: "https://videostreamhub.vercel.app/tv/1233413",
      },
      {
        name: "Tiny Movie Zone",
        url: "https://tinymoviezone.vercel.app/tv/1233413",
      },
    ],
    type: "tv-show",
    seasons: 2,
    episodes: 18,
    network: "FX on Hulu",
    status: "Renewed for Season 3",
    reviews: [
      {
        author: "Paul Harris",
        authorInitials: "PH",
        rating: 5,
        date: "June 25, 2022",
        content:
          "An intense, authentic portrayal of restaurant life with outstanding performances. The show captures the chaos, pressure, and camaraderie of a professional kitchen with remarkable accuracy.",
      },
      {
        author: "Diana Rodriguez",
        authorInitials: "DR",
        rating: 4,
        date: "July 5, 2022",
        content:
          "Jeremy Allen White gives a tour-de-force performance in this anxiety-inducing but ultimately rewarding series. The single-take episode in season 2 is a technical and emotional marvel.",
      },
    ],
  },
];

export const hiddenGems: Movie[] = [
  {
    id: "past-lives",
    title: "Past Lives",
    poster: "/placeholder.svg?height=600&width=400",
    backimage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfxMAqk4zydj2BA7FmNWlL-GGWfYH5S66JdQ&s",
    year: 2023,
    rating: 8.2,
    genre: "Drama, Romance",
    synopsis:
      "Nora and Hae Sung, two childhood friends, are reunited in New York after 20 years apart. They spend a week together, confronting notions of destiny, love, and choices that make up a life.",
    director: "Celine Song",
    cast: [
      {
        name: "Miles Caton",
        character: "Sammie Moore",
        image:
          "https://variety.com/wp-content/uploads/2025/04/Miles-Caton-headshot_credit-Mihailo-Andic-e1743639289624.jpg",
      },
      {
        name: "Saul Williams",
        character: "Sammie Moore",
        image:
          "https://m.media-amazon.com/images/M/MV5BMTU5Nzc4ODI4NF5BMl5BanBnXkFtZTcwODkxNDEzOA@@._V1_.jpg",
      },
      {
        name: "Jack O'Connell",
        character: "Sammie Moore",
        image: "https://example.com/jack.jpg",
      },
      {
        name: "Tenaj L. Jackson",
        character: "Sammie Moore",
        image: "https://example.com/tenaj.jpg",
      },
      {
        name: "Michael B. Jordan",
        character: "Sammie Moore",
        image: "https://example.com/michael.jpg",
      },
      {
        name: "David Maldonado",
        character: "Sammie Moore",
        image: "https://example.com/david.jpg",
      },
    ],
    trailerId: "7joulECTx_U",
    reviewId: "aNB0bB6luP0",
    whereToWatch: [
      {
        name: "Justwatch Free",
        url: "https://justwatchfree.vercel.app/tv/1233413",
      },
      {
        name: "Video Stream Hub",
        url: "https://videostreamhub.vercel.app/tv/1233413",
      },
      {
        name: "Tiny Movie Zone",
        url: "https://tinymoviezone.vercel.app/tv/1233413",
      },
    ],
    type: "movie",
    releaseDate: "June 2, 2023",
    runtime: "106 minutes",
    language: "English, Korean",
    reviews: [
      {
        author: "Jennifer Kim",
        authorInitials: "JK",
        rating: 5,
        date: "June 10, 2023",
        content:
          "A beautiful, delicate exploration of paths not taken and the concept of 'in-yun' (fate). The performances are subtle and moving, and the direction is assured and sensitive.",
      },
      {
        author: "Marcus Thompson",
        authorInitials: "MT",
        rating: 5,
        date: "June 15, 2023",
        content:
          "One of the most emotionally resonant films of the year. It captures the quiet longing of what-ifs with remarkable restraint and poignancy. A stunning directorial debut.",
      },
    ],
  },
  {
    id: "aftersun",
    title: "Aftersun",
    poster: "/placeholder.svg?height=600&width=400",
    backimage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfxMAqk4zydj2BA7FmNWlL-GGWfYH5S66JdQ&s",
    year: 2022,
    rating: 7.9,
    genre: "Drama",
    synopsis:
      "Sophie reflects on the shared joy and private melancholy of a holiday she took with her father twenty years earlier. Memories real and imagined fill the gaps between as she tries to reconcile the father she knew with the man she didn't.",
    director: "Charlotte Wells",
    cast: [
      {
        name: "Miles Caton",
        character: "Sammie Moore",
        image:
          "https://variety.com/wp-content/uploads/2025/04/Miles-Caton-headshot_credit-Mihailo-Andic-e1743639289624.jpg",
      },
      {
        name: "Saul Williams",
        character: "Sammie Moore",
        image:
          "https://m.media-amazon.com/images/M/MV5BMTU5Nzc4ODI4NF5BMl5BanBnXkFtZTcwODkxNDEzOA@@._V1_.jpg",
      },
      {
        name: "Jack O'Connell",
        character: "Sammie Moore",
        image: "https://example.com/jack.jpg",
      },
      {
        name: "Tenaj L. Jackson",
        character: "Sammie Moore",
        image: "https://example.com/tenaj.jpg",
      },
      {
        name: "Michael B. Jordan",
        character: "Sammie Moore",
        image: "https://example.com/michael.jpg",
      },
      {
        name: "David Maldonado",
        character: "Sammie Moore",
        image: "https://example.com/david.jpg",
      },
    ],
    trailerId: "7joulECTx_U",
    reviewId: "aNB0bB6luP0",
    whereToWatch: [
      {
        name: "Justwatch Free",
        url: "https://justwatchfree.vercel.app/tv/1233413",
      },
      {
        name: "Video Stream Hub",
        url: "https://videostreamhub.vercel.app/tv/1233413",
      },
      {
        name: "Tiny Movie Zone",
        url: "https://tinymoviezone.vercel.app/tv/1233413",
      },
    ],
    type: "movie",
    releaseDate: "October 21, 2022",
    runtime: "102 minutes",
    language: "English",
    reviews: [
      {
        author: "Rachel Green",
        authorInitials: "RG",
        rating: 5,
        date: "October 25, 2022",
        content:
          "A devastating, tender portrait of memory and loss. Paul Mescal and newcomer Frankie Corio give incredible performances, and Wells directs with remarkable confidence and subtlety.",
      },
      {
        author: "James Wilson",
        authorInitials: "JW",
        rating: 4,
        date: "November 2, 2022",
        content:
          "A quietly heartbreaking film that lingers long after viewing. The way it captures the complexity of parent-child relationships and the fragility of memory is masterful.",
      },
    ],
  },
  {
    id: "the-zone-of-interest",
    title: "The Zone of Interest",
    poster: "/placeholder.svg?height=600&width=400",
    backimage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfxMAqk4zydj2BA7FmNWlL-GGWfYH5S66JdQ&s",
    year: 2023,
    rating: 7.8,
    genre: "Drama, History, War",
    synopsis:
      "The commandant of Auschwitz, Rudolf Höss, and his wife Hedwig, strive to build a dream life for their family in a house and garden next to the camp.",
    director: "Jonathan Glazer",
    cast: [
      {
        name: "Miles Caton",
        character: "Sammie Moore",
        image:
          "https://variety.com/wp-content/uploads/2025/04/Miles-Caton-headshot_credit-Mihailo-Andic-e1743639289624.jpg",
      },
      {
        name: "Saul Williams",
        character: "Sammie Moore",
        image:
          "https://m.media-amazon.com/images/M/MV5BMTU5Nzc4ODI4NF5BMl5BanBnXkFtZTcwODkxNDEzOA@@._V1_.jpg",
      },
      {
        name: "Jack O'Connell",
        character: "Sammie Moore",
        image: "https://example.com/jack.jpg",
      },
      {
        name: "Tenaj L. Jackson",
        character: "Sammie Moore",
        image: "https://example.com/tenaj.jpg",
      },
      {
        name: "Michael B. Jordan",
        character: "Sammie Moore",
        image: "https://example.com/michael.jpg",
      },
      {
        name: "David Maldonado",
        character: "Sammie Moore",
        image: "https://example.com/david.jpg",
      },
    ],
    trailerId: "7joulECTx_U",
    reviewId: "aNB0bB6luP0",
    whereToWatch: [
      {
        name: "Justwatch Free",
        url: "https://justwatchfree.vercel.app/tv/1233413",
      },
      {
        name: "Video Stream Hub",
        url: "https://videostreamhub.vercel.app/tv/1233413",
      },
      {
        name: "Tiny Movie Zone",
        url: "https://tinymoviezone.vercel.app/tv/1233413",
      },
    ],
    type: "movie",
    releaseDate: "December 15, 2023",
    runtime: "105 minutes",
    language: "German",
    reviews: [
      {
        author: "Daniel Cohen",
        authorInitials: "DC",
        rating: 5,
        date: "December 20, 2023",
        content:
          "A chilling, masterful examination of the banality of evil. Glazer's approach is bold and unflinching, using sound design and visual restraint to devastating effect.",
      },
      {
        author: "Olivia Martinez",
        authorInitials: "OM",
        rating: 4,
        date: "January 5, 2024",
        content:
          "A haunting film that forces viewers to confront uncomfortable truths about human nature. The juxtaposition of domestic normalcy against unseen horror is profoundly disturbing.",
      },
    ],
  },
  {
    id: "talk-to-me",
    title: "Talk to Me",
    poster: "/placeholder.svg?height=600&width=400",
    backimage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfxMAqk4zydj2BA7FmNWlL-GGWfYH5S66JdQ&s",
    year: 2022,
    rating: 7.2,
    genre: "Horror, Thriller",
    synopsis:
      "When a group of friends discover how to conjure spirits using an embalmed hand, they become hooked on the new thrill, until one of them goes too far and unleashes terrifying supernatural forces.",
    director: "Danny Philippou, Michael Philippou",
    cast: [
      {
        name: "Miles Caton",
        character: "Sammie Moore",
        image:
          "https://variety.com/wp-content/uploads/2025/04/Miles-Caton-headshot_credit-Mihailo-Andic-e1743639289624.jpg",
      },
      {
        name: "Saul Williams",
        character: "Sammie Moore",
        image:
          "https://m.media-amazon.com/images/M/MV5BMTU5Nzc4ODI4NF5BMl5BanBnXkFtZTcwODkxNDEzOA@@._V1_.jpg",
      },
      {
        name: "Jack O'Connell",
        character: "Sammie Moore",
        image: "https://example.com/jack.jpg",
      },
      {
        name: "Tenaj L. Jackson",
        character: "Sammie Moore",
        image: "https://example.com/tenaj.jpg",
      },
      {
        name: "Michael B. Jordan",
        character: "Sammie Moore",
        image: "https://example.com/michael.jpg",
      },
      {
        name: "David Maldonado",
        character: "Sammie Moore",
        image: "https://example.com/david.jpg",
      },
    ],
    trailerId: "7joulECTx_U",
    reviewId: "aNB0bB6luP0",
    whereToWatch: [
      {
        name: "Justwatch Free",
        url: "https://justwatchfree.vercel.app/tv/1233413",
      },
      {
        name: "Video Stream Hub",
        url: "https://videostreamhub.vercel.app/tv/1233413",
      },
      {
        name: "Tiny Movie Zone",
        url: "https://tinymoviezone.vercel.app/tv/1233413",
      },
    ],
    type: "movie",
    releaseDate: "July 28, 2023",
    runtime: "95 minutes",
    language: "English",
    reviews: [
      {
        author: "Chris Taylor",
        authorInitials: "CT",
        rating: 4,
        date: "August 1, 2023",
        content:
          "A fresh, inventive horror film with genuine scares and emotional depth. The practical effects are impressive, and Sophie Wilde gives a standout performance as the troubled protagonist.",
      },
      {
        author: "Natalie Wong",
        authorInitials: "NW",
        rating: 3,
        date: "August 10, 2023",
        content:
          "A solid horror debut with some truly unsettling moments. While the third act doesn't quite deliver on the promise of the setup, the film showcases the directors' talent for creating tension.",
      },
    ],
  },
];

export const latestMovies = featuredMovies
  .filter((movie) => movie.year >= 2023)
  .slice(0, 4);

export const allMovies = [
  ...featuredMovies,
  ...hiddenGems.filter(
    (movie) => !featuredMovies.some((fm) => fm.id === movie.id)
  ),
];

export const allContent = [...allMovies, ...trendingShows];
