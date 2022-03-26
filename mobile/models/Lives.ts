export class Lives {
    pk: string;
    title: string;
    image: string;

    constructor(
        pk: string,
        title: string,
        image: string
    ) {
        this.pk = pk
        this.title = title
        this.image = image
    }
}