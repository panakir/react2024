export type Character = {
  name: string;
  gender: string;
  height: string;
  mass: string;
  birth_year: string;
  url: string;
  image?: string;
};

export type ResponseFromApi = {
  results: Character[];
  count: number;
  next: string | null;
  previous: string | null;
};
