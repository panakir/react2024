import { Component, ReactNode } from "react";
import { Fallback } from "./Fallback";

type Props = {
  children?: ReactNode;
  fallback: ReactNode;
};

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props),
      (this.state = {
        hasError: false,
      });
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return <Fallback />;
    }

    return this.props.children;
  }
}
