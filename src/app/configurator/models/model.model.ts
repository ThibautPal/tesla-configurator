export class Model {
    constructor(
        public code: string,
        public description: string,
        public colors: [
            { code: string, description: string, price: number }
        ]
    ) { }
}