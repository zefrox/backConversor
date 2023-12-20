import { environments } from './common/environment';
import ServerClass from './server';

const { app: server } = new ServerClass();
server.listen(environments.port, () => {
    console.log('App is running at http://localhost:%d', environments.port);
});