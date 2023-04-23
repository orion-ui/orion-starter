import { reactive } from 'vue';
import { getThemeMode, setThemeMode } from '@orion.ui/orion';
import BaseSetupService from '@/setup/BaseSetupService';

type Props = SetupProps<typeof ThemeModalSetupService.props>

export default class ThemeModalSetupService extends BaseSetupService<Props> {
	static props = {};

	private state = reactive({ theme: getThemeMode() });

	get theme () { return this.state.theme; }
	set theme (val) {
		this.state.theme = val;
		setThemeMode(val);
	}

	constructor (props?: Props) {
		super(props);
	}
}
