export class Configuration {
    constructor(
        public model?: { code?: string, description?: string },
        public color?: { code?: string, description?: string, price?: number },
        public config?: { id: number, description: string, range: number, speed: number, price: number },
        public towHitch?: boolean,
        public yoke?: boolean,
    ) { }
}