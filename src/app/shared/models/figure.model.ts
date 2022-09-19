export interface Figure extends NewVote{
    id: number;
}

export interface Votes{
    positive: number;
    negative: number;
}

export interface NewVote{
    name: string;
    description: string;
    category: string;
    picture: string;
    lastUpdated: string;
    votes: Votes;
}