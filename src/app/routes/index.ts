import { IRoute } from '@src/types/App';
import UserRoutes from './user';

const routes: IRoute[] = [...Object.values(UserRoutes)];

export default routes;
