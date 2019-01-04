import React, { ReactElement } from "react";
import { graphql, QueryRenderer } from "react-relay";
import environment from "./relay/environment";

import { Todo } from "../common/types";

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
            <ul>
              {props.todos.map(({ done, text }: Todo, i: number) => (
                <li key={i}>{done ? <del>{text}</del> : text}</li>
              ))}
            </ul>
          </>
        );
      }}
    />
  );
}
