import type { PropType } from 'vue';
import BaseSetupService from '@/setup/BaseSetupService';

type Props = SetupProps<typeof PostCardSetupService.props>

export default class PostCardSetupService extends BaseSetupService<Props> {
	static props = {
		post: {
			type: Object as PropType<JsonPlaceholderPost>,
			required: true as const,
		},
	};

	constructor (props?: Props) {
		super(props);
	}
}
