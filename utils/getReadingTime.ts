function getReadingTime(text: string, wordsPerMinute = 200): number {
  const words = text.trim().split(/\s/g).length;
  const minutes = words / wordsPerMinute;
  return Math.ceil(minutes);
}

export default getReadingTime;
