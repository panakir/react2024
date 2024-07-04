import { Component } from "react";

type State = {
  hasError: boolean;
};
export class ErrorButton extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = { hasError: false };
  }

  handlerErrorButton = (): void => {
    this.setState({ hasError: true });
  };

  render(): JSX.Element {
    if (this.state.hasError) {
      throw new Error("Oops!");
    }

    return <button onClick={this.handlerErrorButton}> throw error </button>;
  }
}
