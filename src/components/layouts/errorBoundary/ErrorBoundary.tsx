import React from "react";
import { Fallback } from "./Fallback";

type Props = {
  children?: React.ReactNode;
  fallback: React.ReactNode;
};

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props),
      (this.state = {
        hasError: false,
      });
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return <Fallback />;
    }

    return this.props.children;
  }
}
