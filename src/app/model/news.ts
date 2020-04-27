export class News {
    public id: string;
    public title: string;
    public writer: string;
    public description: string;
    public category: string;
    public date: string;
    public selected?: boolean;
    public comments: string[];
    public tags: string[];
    public media: string;
}
