import { commitLocalUpdate } from "react-relay";
import environment from "./relay/environment";
import { StoreUpdater } from "relay-runtime";

const dispatch = (updater: StoreUpdater) =>
  commitLocalUpdate(environment, updater);

export default dispatch;
