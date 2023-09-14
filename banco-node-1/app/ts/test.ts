interface Cat {
    readonly breed: string;
    readonly mass: number;
}

class BengalCat implements Cat {
    breed: string;
    mass: number;

    constructor(mass: number) {
        this.breed = 'bengal';
        this.mass = mass;
    }

}