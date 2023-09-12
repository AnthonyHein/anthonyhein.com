import AnthonyHein from "../pages/anthony-hein/AnthonyHein";

interface Route {
  path: string;
  exact: boolean;
  component: () => JSX.Element;
}
const routes: Route[] = [{ path: "/", exact: true, component: AnthonyHein }];

export default routes;
