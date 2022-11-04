export type IssueType = {
    issue: string;
    uri: string;
    cover: string;
};

export type MagazineType = {
    coverName: string;
    items: Array<IssueType>;
};
export type MagazineArray = Array<MagazineType>;
