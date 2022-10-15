import { container } from 'tsyringe';
import Database from './database'

export { container };

container.register('IDatabase', {
    useClass: Database
})
