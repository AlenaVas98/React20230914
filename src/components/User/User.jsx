import { useSelector } from "react-redux";
import { selectorUserById } from "../../redux/entities/user/selectors";

export const User = ({ userId }) => {
  const user = useSelector((state) => selectorUserById(state, userId));

  return <span>{user.name}</span>;
};
