export class Suggestions{
    public name: string;
    public subtitle: string
    public description: string;
    public imagePath: string;
    constructor(name: string, subtitle: string, desc: string, imagePath: string){
        this.name = name;
        this.subtitle = subtitle;
        this.description =  desc;
        this.imagePath=imagePath;
    }
}