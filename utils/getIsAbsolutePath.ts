function getIsAbsolutePath(path: string) {
  return /^\/(?!\/)/.test(path);
}

export default getIsAbsolutePath;
