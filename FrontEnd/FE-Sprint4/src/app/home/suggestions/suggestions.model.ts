export class Suggestions{
    public name: string;
    public subtitle: string
    public review: string;
    public imagePath: string;
    constructor(name: string, subtitle: string, review: string, imagePath: string){
        this.name = name;
        this.subtitle = subtitle;
        this.review =  review;
        this.imagePath=imagePath;
    }
}