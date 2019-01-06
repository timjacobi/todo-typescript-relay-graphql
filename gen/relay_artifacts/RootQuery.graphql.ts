/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type RootQueryVariables = {};
export type RootQueryResponse = {
    readonly counter: number | null;
    readonly todos: ReadonlyArray<({
        readonly id: string | null;
        readonly done: boolean | null;
        readonly text: string | null;
    }) | null>;
};
export type RootQuery = {
    readonly response: RootQueryResponse;
    readonly variables: RootQueryVariables;
};



/*
query RootQuery {
  counter
  todos {
    id
    done
    text
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "counter",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "todos",
    "storageKey": null,
    "args": null,
    "concreteType": "Todo",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "done",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "text",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "RootQuery",
  "id": null,
  "text": "query RootQuery {\n  counter\n  todos {\n    id\n    done\n    text\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "RootQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "RootQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
(node as any).hash = '77d3fc212b11f6fae2a690de5b747042';
export default node;
