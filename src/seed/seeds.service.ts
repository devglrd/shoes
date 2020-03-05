import { randomBytes } from 'crypto';
import { Injectable, Logger } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Connection } from 'mongoose';

export interface Shoes {
  name: string;
  brand: string;
  price: number;
}

@Injectable()
export class SeedsService {

  constructor(
    private readonly logger: Logger,
    @InjectModel('Shoes') private readonly shoesModel: Model<Shoes>,
    @InjectConnection() private readonly connection: Connection,
  ) {
  }

  async seed() {
    this.logger.log('Run seeds');
    await this.truncate();

    const users = await this.seedShoes();
    this.logger.log('Successfuly completed seeding shoes...');
  }

  private lorem(): string {
    return 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n\'a pas fait que survivre cinq siècles, mais s\'est aussi adapté à la bureautique informatique, sans que son contenu n\'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker';
  }

  async truncate() {
    this.logger.log('Clear all tables ...');
  }

  private async seedShoes() {
    const shoes = [];

    for (let i = 1; i < 50; i++) {
      const createdCat = new this.shoesModel({
        brand: 'Brand' + i,
        price: 14 + i,
        name: 'Name ' + i,
      });
      createdCat.save();
      shoes.push(createdCat);
    }
    console.log(shoes);
  }
}
