import { useSelector } from "react-redux";
import { User } from "./User";
import { selectorUserById } from "../../redux/entities/user/selectors";

export const UserContainer = ({ userId }) => {
  const user = useSelector((state) => selectorUserById(state, userId));
  if (!user) {
    return null;
  }
  return <User user={user} />;
};
