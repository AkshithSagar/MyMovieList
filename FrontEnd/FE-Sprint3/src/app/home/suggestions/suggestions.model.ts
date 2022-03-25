export class Suggestions{
    public name: string;
    public subtitle: string
    public description: string;
    public imagePath: string;
    public backimg: string;
    constructor(name: string, subtitle: string, desc: string, imagePath: string, backimg: string){
        this.name = name;
        this.subtitle = subtitle;
        this.description =  desc;
        this.imagePath=imagePath;
        this.backimg = backimg;
    }
}