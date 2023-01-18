"use client";
import type { AuthorEventProps } from "../../lib/types";

// Specify default date formatting for language with a fallback language (in this case Indonesian)
const formatter = new Intl.DateTimeFormat("es-MX", {
  month: "short",
  day: "2-digit",
  year: "numeric",
});

function formatImageDate(date: Date) {
  return formatter.format(date);
}

function formatSubtitleDate(date: Date) {
  return formatter.format(date).replaceAll(" ", " / ");
}

function authorEvent({
  title,
  date,
  url,
  location,
  description,
}: AuthorEventProps) {
  const dateObj = date && !isNaN(Date.parse(date)) ? new Date(date) : null;
  const formattedDate = dateObj ? formatSubtitleDate(dateObj) : null;
  const formattedImageDate = dateObj ? formatImageDate(dateObj) : null;
  return (
    <article className="flex flex-row mt-6 max-w-prose">
      <div className="flex-none h-24 flex w-24 text-center justify-center items-center rounded-md sm:w-30 sm:h-30 mr-5 bg-neutral-800/10 dark:bg-neutral/10">
        <div className="text-lg font-bold">{formattedImageDate}</div>
      </div>
      <div>
        <h3 className="flex items-center text-xl font-semibold mt-0">
          {url && (
            <a
              className="text-neutral-800 decoration-primary-500 hover:underline hover:underline-offset-2 dark:text-neutral"
              href={url}
            >
              {title}
            </a>
          )}
          {!url && title}
        </h3>
        <div className="text-sm text-neutral-500 dark:text-neutral-400">
          <div className="flex flex-row flex-wrap items-center">
            {dateObj && (
              <time dateTime={dateObj?.toUTCString()}>{formattedDate}</time>
            )}
            {dateObj && location && (
              <span className="px-2 text-primary-500">·</span>
            )}
            {location && <span>{location}</span>}
          </div>
        </div>
        {description && (
          <div className="py-1 prose dark:prose-invert">{description}</div>
        )}
      </div>
    </article>
  );
}

export default authorEvent;
