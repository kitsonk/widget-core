import { Base } from './Base';

export default class Matches extends Base {
	/**
	 * Determine if the target of a particular `Event` matches the virtual DOM key
	 * @param key The virtual DOM key
	 * @param event The event object
	 */
	public get(key: string, event: Event): boolean {
		this.requireNode(key);
		const node = this.nodes.get(key);
		return node ? node === event.target : false;
	}
}
