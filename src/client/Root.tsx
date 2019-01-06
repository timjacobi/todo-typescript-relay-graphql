import React, { ReactElement } from "react";
import { graphql, QueryRenderer } from "react-relay";
import environment from "./relay/environment";
import App from "./components/App";

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
        return <App {...props} />;
      }}
    />
  );
}
