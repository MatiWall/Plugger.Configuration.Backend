import { ConfigReader } from "../config";



function readConfig(environment: string) {
    const reader = new ConfigReader(`../../config/config.${environment}.yaml`);

    return reader.config
}

export {
    readConfig
}