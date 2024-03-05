import { Color } from "./color.model";

export class ModelsColors {
    constructor(
        public code: string,
        public description: string,
        public colors: [Color]
    ) { }
}