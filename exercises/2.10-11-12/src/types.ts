interface Movie {
    title: string;
    director: string;
    duration?: number;
    image_url? : string;
    description? : string;
    budget? : number;
}

export type { Movie };
  