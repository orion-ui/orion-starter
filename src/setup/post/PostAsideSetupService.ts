import type { PropType } from 'vue';
import BaseSetupService from '@/setup/BaseSetupService';
import { reactive } from 'vue';
import { sleep } from '@orion.ui/orion';

type Props = SetupProps<typeof PostAsideSetupService.props>

export default class PostAsideSetupService extends BaseSetupService<Props> {
	static props = {
		post: {
			type: Object as PropType<JsonPlaceholderPost>,
			required: true as const,
		},
	};

	_aside?: OrionAside;

	private state = reactive({ comments: [] as JsonPlaceholderComment[] });

	get comments () { return this.state.comments; }


	constructor (props?: Props, _aside?: OrionAside) {
		super(props);
		this._aside = _aside;
	}

	async onBeforeMountAsync () {
		this._aside?._loader()?.show(`Fetching comments...`);

		await sleep(700); // simulate longer request
		const res = await fetch(
			`https://jsonplaceholder.typicode.com/posts/${this.props.post.id}/comments`,
		);
		this.state.comments = await res.json();

		this._aside?._loader()?.hide();
	}
}
