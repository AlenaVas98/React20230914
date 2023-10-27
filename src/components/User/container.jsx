import { User } from "./User";
import { useGetUsersQuery } from "../../redux/services/api";

export const UserContainer = ({ userId }) => {
  const { data: user } = useGetUsersQuery(undefined, {
    selectFromResult: (result) => {
      return {
        ...result,
        data: result?.data?.find(({ id }) => id === userId),
      };
    },
  });
  if (!user) {
    return null;
  }
  return <User user={user.id} userName={user.name} />;
};
