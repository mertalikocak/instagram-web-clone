import store from "store/store";
import { setUser } from "store/auth";

export const userHandle = (data) => {
  store.dispatch(setUser(data));
};
