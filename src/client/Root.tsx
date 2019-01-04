import React, { ReactElement } from "react";
import { commitLocalUpdate, graphql, QueryRenderer } from "react-relay";
import environment from "./relay/environment";

import { Todo } from "../common/types";

const toggleDone = (id: string, done: boolean) =>
  commitLocalUpdate(environment, store =>
    store.get(id).setValue(!done, "done")
  );

export default function Root(): ReactElement<any> {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query RootQuery {
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
                <li key={i} onClick={() => toggleDone(id, done)}>
                  {done ? <del>{text}</del> : text}
                </li>
              ))}
            </ul>
            {props.todos.every((todo: Todo) => todo.done) ? (
              <h5>You're all done!</h5>
            ) : null}
          </>
        );
      }}
    />
  );
}
