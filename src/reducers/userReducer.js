import { UPDATE_USER } from "../actions/usersActions";

const usersReducer = (state = "", { type, payload }) => {
  switch (type) {
    case UPDATE_USER:
      return payload.user;
    default:
      return state;
  }
};
export default usersReducer;
