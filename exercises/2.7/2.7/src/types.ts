interface Movie {
    id:number;
    title: string;
    director: string;
    duration: number;
    image_url? : string;
    description? : string;
    budget? : number;
}

export type { Movie };
  