import { useEffect, useState, useCallback, useRef } from "react";

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

const useOnDidUpdate = (cb, dep) => {
  useEffect(() => {
    typeof cb === "function" && cb();
  }, dep);
};

const useOnWillUnmount = (cb, dep) => {
  useEffect(() => {
    return typeof cb === "function" && cb();
  }, dep);
};

const usePreState = state => {
  const ref = React.useRef();
  useOnDidUpdate(() => {
    ref.current = state;
  });
  return ref.current;
};
