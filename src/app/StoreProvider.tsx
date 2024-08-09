"use client";

import React, { useRef, type PropsWithChildren } from "react";
import { Provider } from "react-redux";

import { makeStore, type AppStore } from "@/store/store";

const StoreProvider = ({ children }: PropsWithChildren): React.ReactElement => {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;
