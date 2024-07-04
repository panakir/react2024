import { Component } from "react";
import { Main } from "../main/Main";
import { ErrorBoundary } from "../errorBoundary/ErrorBoundary";
import { Fallback } from "../errorBoundary/Fallback";

export class App extends Component {
  render(): JSX.Element {
    return (
      <ErrorBoundary fallback={<Fallback />}>
        <Main />;
      </ErrorBoundary>
    );
  }
}
