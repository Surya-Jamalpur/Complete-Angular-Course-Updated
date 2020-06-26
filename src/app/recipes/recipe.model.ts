import { Ingrediant } from '../shared/ingrediant.model';

export class Recipe {
    public name:string;
    public description:string;
    public imagePath:string;
    public ingredients:Ingrediant[];

    constructor(name:string, desc:string, imgPath:string, ingredients:Ingrediant[]){
        this.name= name;
        this.description= desc;
        this.imagePath=imgPath;
        this.ingredients= ingredients;
    }
}