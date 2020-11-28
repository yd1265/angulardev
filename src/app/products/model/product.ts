export class Product{
    id:number;
    name:string;
    description:string;
    image:string;
    price:number;
  constructor(id, name, description, image, price){
      this.id = id;
      this.name = name;
      this.description = description;
      this.image = image;
      this.price = price;
  }  
}