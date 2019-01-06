import React from "react";
import environment from "../relay/environment";
import { decreaseCounter, increaseCounter, toggleDone } from "../actions";

import { RootQueryResponse } from "../../__generated__/relay_artifacts/RootQuery.graphql";
import { Todo } from "../../common/types";

export default class App extends React.Component<RootQueryResponse> {
  static defaultProps = {
    counter: 0,
    todos: []
  };

  render() {
    const { counter, todos } = this.props;
    return (
      <>
        <h2>What needs to be done?</h2>
        <h4>Click item to toggle state</h4>
        <ul>
          {todos.map(({ done, id, text }: Todo, i: number) => (
            <li
              key={i}
              onClick={() => environment.commitUpdate(toggleDone(id, done))}
            >
              {done ? <del>{text}</del> : text}
            </li>
          ))}
        </ul>
        {todos.every((todo: Todo) => todo.done) ? (
          <h5>You're all done!</h5>
        ) : null}
        <h2>Count Something!</h2>
        <h2>
          <button onClick={() => environment.commitUpdate(decreaseCounter())}>
            -
          </button>{" "}
          {counter}{" "}
          <button onClick={() => environment.commitUpdate(increaseCounter())}>
            +
          </button>
        </h2>
      </>
    );
  }
}
