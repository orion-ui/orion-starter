import { } from 'vue';
import { getThemeMode, setThemeMode } from '@orion.ui/orion';
import BaseSetupService from '@/setup/BaseSetupService';

type Props = SetupProps<typeof ThemeModalSetupService.props>

export default class ThemeModalSetupService extends BaseSetupService<Props> {
	static props = {};

	get theme () { return getThemeMode(); }
	set theme (val) { setThemeMode(val); }

	constructor (props?: Props) {
		super(props);
	}
}
