import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		const todos = [
			{
				id: 1,
				title: 'First label',
				completed: true
			},
			{
				id: 2,
				title: 'Second label',
				completed: false
			},
			{
				id: 3,
				title: 'Thirt label',
				completed: false
			}
		];

		return { todos };
	}
}
