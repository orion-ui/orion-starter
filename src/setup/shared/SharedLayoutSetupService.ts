import { } from 'vue';
import { useModal, useNotif } from '@orion.ui/orion';
import BaseSetupService from '@/setup/BaseSetupService';
import ThemeModal from '@/components/ThemeModal.vue';

type Props = SetupProps<typeof SharedLayoutSetupService.props>

export default class SharedLayoutSetupService extends BaseSetupService<Props> {
	static props = {};

	private simpleCallbackNotif: Undef<OrionNotif>;

	get navMain (): OrionNavMain.Props {
		return {
			items: [
				{
					label: `Home`,
					icon: 'home_outline',
					to: { name: 'home' },
					root: true,
					always: true,
				},
				{
					label: `Simple list`,
					icon: 'data',
					to: { name: 'simple-list' },
				},
				{
					label: `Submenu collapse`,
					icon: 'list_ul',
					children: [
						{
							label: `Item 1`,
							icon: 'heading_h1',
							callback: () => this.simpleCallback(),
						},
						{
							label: `Item 2`,
							icon: 'heading_h2',
							callback: () => this.simpleCallback(),
						},
						{
							label: `Item 3`,
							icon: 'heading_h3',
							callback: () => this.simpleCallback(),
						},
						{
							label: `Item 4`,
							icon: 'heading_h4',
							callback: () => this.simpleCallback(),
						},
					],
				},
				{
					label: `Submenu replace`,
					icon: 'list_ul',
					replace: true,
					children: [
						{
							label: `Item 1`,
							icon: 'heading_h1',
							callback: () => this.simpleCallback(),
						},
						{
							label: `Item 2`,
							icon: 'heading_h2',
							callback: () => this.simpleCallback(),
						},
						{
							label: `Item 3`,
							icon: 'heading_h3',
							callback: () => this.simpleCallback(),
						},
						{
							label: `Item 4`,
							icon: 'heading_h4',
							callback: () => this.simpleCallback(),
						},
					],
				},
			],
		};
	}

	get navTop (): OrionNavTop.Props {
		return {
			items: [
				{
					label: `Switch theme`,
					icon: 'sun',
					callback: () => this.switchTheme(),
				},
				{
					label: `Documentation`,
					icon: 'link_02',
					callback: () => window.open(`https://orion-ui.org`, '_blank'),
				},
				{
					label: `Logout`,
					icon: 'log_out',
					callback: () => useNotif.info(`Example of menu callback`),
				},
			],
		};
	}


	constructor (props?: Props) {
		super(props);
	}


	simpleCallback () {
		this.simpleCallbackNotif
			? this.simpleCallbackNotif.resetTimer()
			: (this.simpleCallbackNotif = useNotif.info({
				title: `You clicked on a menu item`,
				events: { 'leave-end': () => (this.simpleCallbackNotif = undefined) },
			}));
	}

	switchTheme () {
		useModal({
			Nested: ThemeModal,
			size: 'xs',
		});
	}
}
