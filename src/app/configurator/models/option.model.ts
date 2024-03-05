import { Config } from "./config.model";

export class Option {
    constructor(
        public configs?: Config[],
        public towHitch?: boolean,
        public yoke?: boolean
    ) { }
}