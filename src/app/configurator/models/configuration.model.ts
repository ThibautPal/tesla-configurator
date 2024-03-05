import { Color } from "./color.model";
import { Config } from "./config.model";
import { Model } from "./model.model";

export class Configuration {
    constructor(
        public model?: Model,
        public color?: Color,
        public config?: Config,
        public towHitch?: boolean,
        public yoke?: boolean,
    ) { }
}