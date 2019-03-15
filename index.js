import { useEffect, useState, useCallback } from "react";

const useSetState = initState => {
  const [state, setState] = React.useState(initState);
  return [
    state,
    React.useCallback(v => {
      return setState(preState => ({
        ...preState,
        ...(typeof v === "function" ? v(preState) : v)
      }));
    }, [])
  ];
};
