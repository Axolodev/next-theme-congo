import yaml from "js-yaml";
import fs from "fs";
import path from "path";
import type { ThemeSettings } from "./types";

let config: ThemeSettings | null = null;

const configFileName = "config.yml";

function loadConfig() {
  const configPath = path.join(process.cwd(), configFileName);
  const config = yaml.load(
    fs.readFileSync(configPath, "utf8")
  ) as ThemeSettings;
  return config;
}

export function getConfig() {
  if (!config) {
    config = loadConfig();
  }

  return config;
}

export default getConfig;
