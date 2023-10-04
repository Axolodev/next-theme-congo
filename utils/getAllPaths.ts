import fs from "fs";
import path from "path";

async function* walk(dir: string): AsyncGenerator<string> {
  for await (const d of await fs.promises.opendir(dir)) {
    const entry = path.join(dir, d.name);
    if (d.isDirectory()) {
      yield* walk(entry);
    } else if (d.isFile()) {
      yield entry;
    }
  }
}

// Then, use it with a simple async for loop
export default async function getAllPaths(dir: string) {
  const paths = [];
  for await (const p of walk(dir)) {
    paths.push(p);
  }

  return paths;
}


export function getOSSeparator() {
  return path.sep;
}