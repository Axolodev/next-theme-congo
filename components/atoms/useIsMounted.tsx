import * as React from "react";

function useIsMounted() {
  const [isMounted, setIsMounted] = React.useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted;
}

export default useIsMounted;
