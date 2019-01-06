import { RecordSourceProxy } from "relay-runtime";

export const toggleDone = (id: string, done: boolean) => (
  store: RecordSourceProxy
) => store.get(id).setValue(!done, "done");

export const increaseCounter = () => (store: RecordSourceProxy) =>
  store
    .getRoot()
    .setValue((store.getRoot().getValue("counter") || 0) + 1, "counter");

export const decreaseCounter = () => (store: RecordSourceProxy) =>
  store
    .getRoot()
    .setValue((store.getRoot().getValue("counter") || 0) - 1, "counter");
