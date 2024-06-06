import { IRoute } from '@src/types/App';
import UserRoutes from './user';
import PostRoutes from './post';

const routes: IRoute[] = [
  ...Object.values({...PostRoutes, ...UserRoutes}),
];

export default routes;
