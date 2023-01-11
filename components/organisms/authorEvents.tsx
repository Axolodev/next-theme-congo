import * as React from "react";
import type { AuthorEventProps } from "../../lib/types";
import { AuthorEvent } from "../molecules";

interface Props {
  title?: string;
  children: AuthorEventProps[];
}

function authorEvents({ children, title }: Props) {
  return (
    <>
      {title && <h2>{title}</h2>}
      {children.map((event) => (
        <AuthorEvent key={event.title + event.date} {...event} />
      ))}
    </>
  );
}

export default authorEvents;
