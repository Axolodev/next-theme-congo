import { promises as fs } from "fs";
import { readdir } from "fs/promises";

const fileExists = async (filepath: string) => {
  try {
    const stat = await fs.lstat(filepath);
    return stat.isFile();
  } catch (err) {
    return false;
  }
};

const allowedExtensions = [".md", ".mdx"];

const isDirectory = async (path: string) => {
  try {
    const stat = await fs.lstat(path);
    return stat.isDirectory();
  } catch (err) {
    return false;
  }
};

const getFileName = async (path: string) => {
  for (const ext of allowedExtensions) {
    const filepath = path + ext;
    const exists = await fileExists(filepath);

    if (exists) {
      return filepath;
    }
  }

  return "";
};

const findFilename = async (path: string) => {
  /** @TODO refactor this trashy code */
  const isDir = await isDirectory(path);

  let filename = "";

  if (!isDir) {
    return getFileName(path);
  }

  filename = await getFileName(path + "/index");

  if (filename) {
    return filename;
  }

  filename = await getFileName(path + "/_index");

  if (!filename) {
    throw new Error("No file found on path: " + path);
  }

  return filename;
};

const getDirectoriesForPath = async (source: string) =>
  (await readdir(source, { withFileTypes: true }))
    // Remove index files
    .filter((dirent) => !dirent.name.includes("index"))
    // Filter out non-directories and non-md files
    .filter((dirent) => dirent.isDirectory() || dirent.name.includes(".md"))
    .map((dirent) => `${source}/${dirent.name}`);

const getContentForPath = async (path: string) => {
  const filename = await findFilename(path);

  const content = await fs.readFile(filename, "utf-8");

  const isIndex = filename.includes("index.md");

  let subpaths: string[] = [];

  if (isIndex) {
    subpaths = await getDirectoriesForPath(path);
  }

  return {
    content,
    filename,
    isIndex,
    subpaths,
  };
};

export default getContentForPath;
