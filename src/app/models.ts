export interface Game {
  id: number;
  background_image: string;
  name: string;
  released: string;
  metacritic_url: string;
  website: string;
  description: string;
  metacritic: number;
  genres: Array<Genre>;
  parent_platforms: Array<ParentPlatform>;
  publishers: Array<Publishers>;
  ratings: Array<Rating>;
  screenshots: Array<Screenshots>;
  trailers: Array<Trailer>;
}

export interface APIResponse<T> {
    results: Array<T>;
}

interface Genre {
  name: string;
}

interface ParentPlatform {
  platform: {
    id: string;
    name: string;
    slug: string;
  };
}

interface Publishers {
  name: string;
}

interface Rating {
  id: number;
  count: number;
  title: string;
}

interface Screenshots {
  image: string;
}

interface Trailer {
  data: {
    max: string;
  };
}

export interface Tab {
  name: string
  route: string
}

export interface GameAbout{
  "id": 0,
  "slug": "string",
  "name": "string",
  "name_original": "string",
  "description": "string",
  "metacritic": 0,
  "metacritic_platforms": [
    {
      "metascore": 0,
      "url": "string"
    }
  ],
  "released": "2022-06-07",
  "tba": true,
  "updated": "2022-06-07T17:24:53Z",
  "background_image": "http://example.com",
  "background_image_additional": "string",
  "website": "http://example.com",
  "rating": 0,
  "rating_top": 0,
  "ratings": {},
  "reactions": {},
  "added": 0,
  "added_by_status": {},
  "playtime": 0,
  "screenshots_count": 0,
  "movies_count": 0,
  "creators_count": 0,
  "achievements_count": 0,
  "parent_achievements_count": "string",
  "reddit_url": "string",
  "reddit_name": "string",
  "reddit_description": "string",
  "reddit_logo": "http://example.com",
  "reddit_count": 0,
  "twitch_count": "string",
  "youtube_count": "string",
  "reviews_text_count": "string",
  "ratings_count": 0,
  "suggestions_count": 0,
  "alternative_names": [
    "string"
  ],
  "metacritic_url": "string",
  "parents_count": 0,
  "additions_count": 0,
  "game_series_count": 0,
  "esrb_rating": {
    "id": 0,
    "slug": "everyone",
    "name": "Everyone"
  },
  "platforms": [
    {
      "platform": {
        "id": 0,
        "slug": "string",
        "name": "string"
      },
      "released_at": "string",
      "requirements": {
        "minimum": "string",
        "recommended": "string"
      }
    }
  ]
}

