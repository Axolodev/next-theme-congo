export interface Props {
  readingTime: number;
}

function ReadingTime({ readingTime }: Props) {
  return (
    <div className="text-sm text-neutral-500 dark:text-neutral-400">
      <div className="flex flex-row flex-wrap items-center">
        <span title="Reading time">{readingTime} mins</span>
      </div>
    </div>
  );
}

export default ReadingTime;
