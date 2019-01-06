import React, { ReactElement } from "react";
import { graphql, QueryRenderer } from "react-relay";
import environment from "./relay/environment";
import { decreaseCounter, increaseCounter, toggleDone } from "./actions";

import { Todo } from "../common/types";

export default function Root(): ReactElement<any> {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query RootQuery {
          counter
          todos {
            id
            done
            text
          }
        }
      `}
      variables={{}}
      render={({ props }) => {
        if (!props) {
          return null;
        }
        return (
          <>
            <h2>What needs to be done?</h2>
            <h4>Click item to toggle state</h4>
            <ul>
              {props.todos.map(({ done, id, text }: Todo, i: number) => (
                <li
                  key={i}
                  onClick={() => environment.commitUpdate(toggleDone(id, done))}
                >
                  {done ? <del>{text}</del> : text}
                </li>
              ))}
            </ul>
            {props.todos.every((todo: Todo) => todo.done) ? (
              <h5>You're all done!</h5>
            ) : null}
            <h2>Count Something!</h2>
            <h2>
              <button
                onClick={() => environment.commitUpdate(decreaseCounter())}
              >
                -
              </button>{" "}
              {props.counter || 0}{" "}
              <button
                onClick={() => environment.commitUpdate(increaseCounter())}
              >
                +
              </button>
            </h2>
          </>
        );
      }}
    />
  );
}
