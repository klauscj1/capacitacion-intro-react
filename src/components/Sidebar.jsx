import { Link } from "react-router-dom";
import { routes } from "../data/sidebarData";
export const Sidebar = () => {
  return (
    <div className="sideBar">
      <h3>Menu</h3>
      <ul>
        {routes.map((route) => {
          return (
            <li className="sidebar_item" key={route.route}>
              <Link to={route.route}>{route.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
