import classNames from "classnames";

import styles from "./RestaurantTabs.module.scss";
import { RestaurantTabContainer } from "../RestaurantTab/container";
import { NavLink } from "react-router-dom";
export const RestaurantTabs = ({ className, restarants }) => {
  return (
    <div className={classNames(styles.root, className)}>
      {restarants.map(({ id, name }) => (
        <NavLink
          key={id}
          to={id}
          className={({ isActive }) =>
            classNames({ [styles.activeTab]: isActive })
          }
        >
          <RestaurantTabContainer restauranName={name} size="m" />
        </NavLink>
      ))}
    </div>
  );
};
