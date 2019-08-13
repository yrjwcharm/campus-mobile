/*  Master Stylesheet

	All predefined campus-mobile styles should reside here.

	Section List
	------------------------------
	01 - Main
	02 - Common
	03 - Special Events
	04 - Finals
	05 - Classes
	06 - Shuttle
	07 - Dining
	08 - Student ID Card
	10 - Links
	11 - Weather
	12 - Map
	13 - Feedback
	14 - Settings
	15 - Onboarding
	16 - Parking
	17 - Notifications

	99 - Misc
*/
import { StyleSheet, Platform } from 'react-native'
import { platformAndroid, deviceIphoneX, platformIOS, round } from '../util/general'
import COLOR from './ColorConstants'
import LAYOUT from './LayoutConstants'

const CC_LEFT = LAYOUT.MAX_CARD_WIDTH * 0.006
const CC_RIGHT = LAYOUT.MAX_CARD_WIDTH * 0.004

const css = StyleSheet.create({
	/**
	 *  01 - Main
	 */
	// Containers
	main: { flex: 1 },
	main_full: { backgroundColor: COLOR.WHITE, paddingBottom: deviceIphoneX() ? LAYOUT.NAVIGATOR_HEIGHT : 0 },
	main_full_flex: { flexGrow: 1, backgroundColor: COLOR.WHITE, paddingBottom: deviceIphoneX() ? LAYOUT.NAVIGATOR_HEIGHT : 0 },
	full_flex: { flexGrow: 1, backgroundColor: COLOR.WHITE },
	scroll_default: { backgroundColor: COLOR.WHITE },
	card_container: { backgroundColor: COLOR.WHITE, margin: 6, borderRadius: 3 },
	card_full_container: { backgroundColor: COLOR.WHITE, marginBottom: 16, borderTopWidth: 1, borderBottomWidth: 1, borderColor: COLOR.MGREY },
	main_full_lgrey: { flexGrow: 1, backgroundColor: COLOR.LGREY }, // special events
	loginview_container: { flexGrow: 1, backgroundColor: COLOR.MGREY, marginTop: LAYOUT.NAVIGATOR_HEIGHT },
	messaging_container: { flex: 1, paddingBottom: platformIOS() ? LAYOUT.NAVIGATOR_HEIGHT : 0 },
	// Navigator
	nav: { backgroundColor: COLOR.PRIMARY, height: LAYOUT.NAVIGATOR_HEIGHT, marginTop: deviceIphoneX() ? -13 : 0 },
	navTitle: { flex: 1, fontSize: 24, fontWeight: '300', textAlign: 'center', alignSelf: 'center', marginTop: deviceIphoneX() ? 0 : -3 },
	navCampusLogoTitle: { flex: 1, resizeMode: 'contain', height: 26, alignSelf: 'center', marginTop: platformAndroid() ? 6 : 0 },
	navButtonTextIOS: { color: COLOR.WHITE, fontWeight: '300', fontSize: 18, height: 24 },
	navButtonTextAndroid: { color: COLOR.WHITE, marginTop: -8, fontWeight: '300', fontSize: 18 },
	// Tab Bar
	tabBar: { backgroundColor: COLOR.WHITE, height: LAYOUT.TAB_BAR_HEIGHT },
	tabContainer: { justifyContent: 'center', paddingTop: deviceIphoneX() ? 17 : 0 },
	tabContainerBottom: { borderBottomColor: COLOR.PRIMARY },
	// Tab Icons
	tabIcon: { color: COLOR.DMGREY, alignSelf: 'center', backgroundColor: COLOR.TRANSPARENT, opacity: 0.95, width: 24, height: 24, overflow: 'hidden' },
	tabIconUser: { color: COLOR.WHITE, alignSelf: 'center', backgroundColor: COLOR.DMGREY, opacity: 0.95, width: 24, height: 24, overflow: 'hidden' },
	tabIconUserOutline: { borderColor: COLOR.DMGREY, alignSelf: 'center', overflow: 'hidden', borderRadius: 24, width: 24, height: 24, borderWidth: 1 },
	tabIconWithBadge: { padding: 5 },
	tabIconBadge: { position: 'absolute', zIndex: 10, top: platformIOS() ? 0 : 3, right: platformIOS() ? 2 : 3, width: 18, height: 18, backgroundColor: 'red', borderRadius: 9, justifyContent: 'center', opacity: 1 },
	tabIconBadgeCount: { color: COLOR.WHITE, textAlign: 'center', fontSize: 12, overflow: 'hidden', fontWeight: '700' },


	/**
	 *  02 - Common
	 */
	// Cards
	card_main: { borderWidth: 1, borderRadius: 2, borderColor: COLOR.MGREY, backgroundColor: COLOR.WHITE, margin: 6, alignItems: 'flex-start', justifyContent: 'center', overflow: 'hidden' },
	card_demo: { alignItems: 'center' },
	card_row_container: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 8, paddingBottom: 0 },
	card_footer_container: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 8 },
	card_button_container: { padding: 6, borderTopWidth: 1, borderTopColor: COLOR.MGREY },
	card_button_text: { color: COLOR.PRIMARY, fontSize: 20, fontWeight: '300', textAlign: 'center' },
	card_text_container: { justifyContent: 'center', alignItems: 'center', width: LAYOUT.MAX_CARD_WIDTH, padding: 8, borderBottomWidth: 1, borderBottomColor: COLOR.MGREY },
	ch_headerContainer: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: COLOR.MGREY },
	ch_titleText: { flexGrow: 1, fontSize: 26, color: COLOR.DGREY, paddingLeft: 10, paddingVertical: 6 },
	ch_titleImage: { height: 36, minWidth: 85, maxWidth: 150, marginTop: 6, marginLeft: 6 },
	ch_filler: { flexGrow: 1 },
	cm_menu: { flexDirection: 'row', justifyContent: 'flex-end' },
	cm_option: { margin: 10, fontSize: 16 },
	cm_trigger: { paddingTop: 9, paddingBottom: 6, paddingLeft: 12, paddingRight: 10, color: COLOR.DGREY },
	scrollcard_main_marginBottom: { marginBottom: 6 },
	scrollcard_dotStyle: { padding: 6, paddingTop: 3, backgroundColor: 'transparent', color: COLOR.DGREY },
	scrollcard_dotsContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
	scrollcard_listStyle: { flexDirection: 'row' },
	card_last_updated: { flexDirection: 'row', alignItems: 'center', marginLeft: 16, marginBottom: 8 },
	card_last_updated_text: { fontStyle: 'italic', fontWeight: '300', color: COLOR.DGREY },
	last_updated_err_icon: { fontSize: 16, marginRight: 6 },
	last_updated_err_icon_warn: { color: COLOR.WARNING },
	last_updated_err_icon_error: { color: COLOR.ERROR },
	safe_image_loading_activity_indicator: { flex: 1, alignItems: 'center', justifyContent: 'center' },
	// Data
	DataList_card_list: {  },
	DataList_full_list: { top: -1 },
	dataitem_descContainer: { flex: 1 },
	dataitem_descText: { color: COLOR.VDGREY },
	dataitem_touchableRow: { paddingVertical: 12, paddingHorizontal: 8, borderTopWidth: 1, borderTopColor: COLOR.MGREY },
	dataitem_titleText: { fontSize: 17 },
	dataitem_listInfoContainer: { flexDirection: 'row', paddingVertical: 8 },
	dataitem_dateText: { color: COLOR.PRIMARY, paddingTop: 8 },
	dataitem_image: { width: 120, height: 70, marginLeft: 10, borderWidth: 1, borderColor: COLOR.LGREY },
	dlc_list: { top: -1 },
	dlc_content_load_err: { padding: 30, fontSize: 16, alignSelf: 'center'  },
	dlc_cardcenter: { alignItems: 'center', justifyContent: 'center', padding: 20 },
	// FlatList
	fl_full: { flexGrow: 1, backgroundColor: COLOR.WHITE, paddingBottom: deviceIphoneX() ? LAYOUT.NAVIGATOR_HEIGHT : 0 },
	fl_bg: { backgroundColor: COLOR.WHITE },
	fl_row_title: { flex: 1, color: COLOR.VDGREY, fontSize: 18 },
	fl_row_title_disabled: { flex: 1, color: COLOR.DMGREY, fontSize: 18 },
	fl_row_arrow: { color: COLOR.CCC },
	fl_separator: { height: 1, backgroundColor: COLOR.MGREY },
	fl_row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 8, borderTopWidth: 1, marginTop: -1, borderTopColor: COLOR.MGREY },
	// Sortable List View
	sl_row: { flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderTopWidth: 1, borderColor: COLOR.MGREY, paddingVertical: 8, marginTop: -1, elevation: 0, backgroundColor: COLOR.WHITE, minHeight: 48 },
	sl_icon: { color: COLOR.CCC, marginLeft: 8 },
	sl_title: { flex: 5, fontSize: 18, marginLeft: 6 },
	sl_title_disabled: { color: COLOR.CCC },
	sl_switch_container: { flex: 1, justifyContent: 'center', alignItems: 'flex-end', marginRight: 12 },
	// Buttons
	button_primary: { justifyContent: 'center', alignItems: 'center', backgroundColor: COLOR.PRIMARY, borderRadius: 3, marginTop: 20, padding: 10 },
	button_primary_text: { fontSize: 16, color: COLOR.WHITE },
	share_button: { justifyContent: 'center', alignItems: 'center', backgroundColor: COLOR.MGREY, borderRadius: 3, marginTop: 20, padding: 10 },
	share_button_text: { fontSize: 16 },
	// Checkbox
	ccb_checkBoxContainer: { flexDirection: 'row', alignItems: 'center' },
	ccb_center: { justifyContent: 'center', alignItems: 'center' },
	ccb_checkBoxLabel: { fontSize: 18, fontWeight: '300', marginHorizontal: 10 },
	// Media
	eventdetail_readmore_container: { justifyContent: 'center', alignItems: 'center', backgroundColor: COLOR.PRIMARY, borderRadius: 3, marginTop: 20, padding: 10 },
	eventdetail_readmore_text: { fontSize: 16, color: COLOR.WHITE },
	media_detail_container: { width: LAYOUT.WINDOW_WIDTH, paddingHorizontal: 12, paddingVertical: 14 },
	media_detail_image: { width: LAYOUT.WINDOW_WIDTH, height: 200 },
	media_detail_title: { fontSize: 22, color: COLOR.PRIMARY },
	media_detail_dateText: { color: COLOR.PRIMARY, paddingTop: 14 },
	media_detail_descContainer: { paddingTop: 14 },
	media_detail_descText: { lineHeight: 18, color: COLOR.BLACK, fontSize: 14 },
	media_detail_locationText: { fontSize: 16, color: COLOR.DGREY },
	cm_desc: { fontSize: 16, padding: 20 },
	// General
	bold: { fontWeight: '700' },
	flex: { flex: 1 },
	flexrow: { flexDirection: 'row' },
	hyperlink: { color: COLOR.PRIMARY, textDecorationLine: 'underline' },

	/**
	 *  03 - Special Events
	 */
	specialevents_filter: { backgroundColor: COLOR.WHITE, paddingBottom: deviceIphoneX() ? (LAYOUT.NAVIGATOR_HEIGHT + 60) : 60 },
	specialevents_filter_itemrow: { flexDirection: 'row', alignItems: 'center', backgroundColor: COLOR.WHITE, borderBottomWidth: 1, borderBottomColor: COLOR.LGREY, padding: 12 },
	specialevents_filter_applybutton: { position: 'absolute', width: LAYOUT.WINDOW_WIDTH - 20, bottom: deviceIphoneX() ? LAYOUT.NAVIGATOR_HEIGHT : 10, left: 10, padding: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: COLOR.PRIMARY, borderRadius: 3, opacity: 0.95 },
	specialevents_filter_applybutton_text: { fontSize: 16, color: COLOR.WHITE },
	// SpecialEventsView
	sev_specialEventsListView: { flex: 1 },
	sev_scrollButtonContainer: { flexDirection: 'row' },
	sev_scrollContentContainer: { flexGrow: 1 },
	sev_buttonContainer: { flex: 1, flexDirection: 'row', alignItems: 'center' },
	sev_selectedButton: { flexGrow: 1, minWidth: Math.round(LAYOUT.WINDOW_WIDTH / 3.65), height: LAYOUT.TAB_BAR_HEIGHT, alignItems: 'center', justifyContent: 'center', backgroundColor: COLOR.SECONDARY, borderLeftWidth: 1, borderLeftColor: COLOR.MGREY },
	sev_selectedFirstButton: { flexGrow: 1, minWidth: LAYOUT.WINDOW_WIDTH / 4, height: LAYOUT.TAB_BAR_HEIGHT, alignItems: 'center', justifyContent: 'center', backgroundColor: COLOR.SECONDARY },
	sev_plainButton: { flexGrow: 1, minWidth: Math.round(LAYOUT.WINDOW_WIDTH / 3.65), height: LAYOUT.TAB_BAR_HEIGHT, alignItems: 'center', justifyContent: 'center', backgroundColor: COLOR.WHITE, borderLeftWidth: 1, borderLeftColor: COLOR.MGREY },
	sev_plainFirstButton: { flexGrow: 1, minWidth: Math.round(LAYOUT.WINDOW_WIDTH / 3.65), height: LAYOUT.TAB_BAR_HEIGHT, alignItems: 'center', justifyContent: 'center', backgroundColor: COLOR.WHITE },
	sev_hideLeftBorder: { borderLeftWidth: 0 },
	sev_selectedText: { textAlign: 'center', fontSize: 18, color: 'white' },
	sev_plainText: { textAlign: 'center', fontSize: 18, opacity: 0.5 },
	sev_tabBar: { borderTopWidth: 1, borderColor: COLOR.DGREY, backgroundColor: COLOR.WHITE, height: LAYOUT.TAB_BAR_HEIGHT },
	sev_daysBar: { borderBottomWidth: 1, borderColor: COLOR.MGREY, backgroundColor: COLOR.WHITE, height: LAYOUT.TAB_BAR_HEIGHT },
	sev_selectedDayText: { textAlign: 'center', fontSize: 18, color: COLOR.WHITE, backgroundColor: COLOR.SECONDARY },
	sev_filterText: { textAlign: 'center', fontSize: 17, color: 'white' },
	sev_backButtonContainer: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: -7 },
	sev_backButtonImage: { color: COLOR.WHITE, marginRight: 7 },
	// SpecialEventsListView
	selv_mainContainer: { flexGrow: 1 },
	selv_rowContainer: { flex: 1, flexDirection: 'row' },
	selv_full: { flexGrow: 1, width: LAYOUT.WINDOW_WIDTH, height: (LAYOUT.WINDOW_HEIGHT - LAYOUT.NAVIGATOR_HEIGHT - LAYOUT.TAB_BAR_HEIGHT) },
	selv_card: { width: LAYOUT.MAX_CARD_WIDTH },
	selv_noSessions: { flexGrow: 1, fontSize: 16, textAlign: 'center', padding: 20, lineHeight: 22 },
	selv_labelsContainer: { alignItems: 'center', justifyContent: 'flex-start', borderBottomWidth: 1, borderBottomColor: COLOR.PRIMARY },
	selv_labelHeader: { fontWeight: '600' },
	selv_labelText: { width: LAYOUT.WINDOW_WIDTH, paddingVertical: 4, paddingHorizontal: 20, fontSize: 14, color: COLOR.PRIMARY },
	// SpecialEventsItem
	sei_itemRow: { flexShrink: 1, flexDirection: 'row' },
	sei_titleContainer: { flexShrink: 1, flexBasis: 10000, marginTop: 3, marginBottom: 8 }, // TODO: improve usage of flex, especially to avoid hardcoding 10000, which acts like an infifity value to maximize column width on all screen sizes.
	sei_titleText: { alignSelf: 'stretch', fontSize: 17, color: 'black' },
	sei_labelView: { flexDirection: 'row', paddingTop: 4 },
	sei_labelTextContainer: { 'flexDirection': 'row', 'maxWidth': LAYOUT.WINDOW_WIDTH / 2 },
	sei_labelText: { fontSize: 13 },
	sei_starButton: { width: 50 },
	sei_starButtonInner: { justifyContent: 'flex-start', alignItems: 'center' },
	sei_starOuterIcon: { color: COLOR.DGREY, position: platformIOS() ? 'absolute' : 'relative', zIndex: 10, backgroundColor: 'rgba(0,0,0,0)' },
	sei_starInnerIcon: { color: COLOR.YELLOW, position: 'absolute', zIndex: platformIOS() ? 5 : 15, marginTop: 3 },
	sei_borderContainer: { width: 1, alignSelf: 'stretch', marginRight: 10, alignItems: 'flex-start' },
	sei_line: { flexGrow: 1, borderLeftWidth: 1, borderColor: COLOR.MGREY },
	sei_circle: { position: 'absolute', top: 11, left: -2.5, height: 6, width: 6, borderRadius: 3, borderWidth: 1, borderColor: COLOR.MGREY, backgroundColor: COLOR.LGREY },
	// SpecialEventsDetailView
	sedv_detailContainer: { width: LAYOUT.WINDOW_WIDTH, padding: 12 },
	sedv_labelView: { flexDirection: 'row', paddingTop: 4 },
	sedv_labelText: { fontSize: 13 },
	sedv_sessionName: { fontSize: 24, color: COLOR.PRIMARY, paddingTop: 6 },
	sedv_sessionInfo: { fontSize: 12, paddingTop: 16  },
	sedv_sessionDesc: { lineHeight: 18, fontSize: 14, paddingTop: 16 },
	sedv_hostedBy: { fontSize: 10, fontWeight: 'bold', marginTop: 16 },
	sedv_speakerContainer: { marginTop: 2 },
	sedv_speakerName: { fontSize: 14, fontWeight: 'bold', color: COLOR.PRIMARY, marginTop: 10 },
	sedv_speakerPosition: { fontSize: 10, marginTop: 2 },
	sedv_speakerSubTalkTitle: { fontSize: 14, fontWeight: 'bold', marginTop: 10 },
	sedv_starButton: { width: 50, position: 'absolute', top: 2, right: -5, zIndex: 10 },
	sedv_starButtonInner: { justifyContent: 'flex-start', alignItems: 'center' },
	sedv_starOuterIcon: { color: COLOR.DGREY, position: platformIOS() ? 'absolute' : 'relative', zIndex: 10, backgroundColor: 'transparent' },
	sedv_starInnerIcon: { color: COLOR.YELLOW, position: 'absolute', zIndex: platformIOS() ? 5 : 15, marginTop: 3 },
	sedv_sed_dir: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderTopWidth: 1, borderTopColor: COLOR.MGREY, marginTop: 16, paddingVertical: 6 },
	sedv_sed_dir_icon: { color: COLOR.PRIMARY, alignSelf: 'flex-end' },
	sedv_sed_dir_label: { flex: 1, fontSize: 22, color: COLOR.PRIMARY },

	/**
	 *  04 - Finals
	 */
	finals_card_content: { width: LAYOUT.MAX_CARD_WIDTH + 2, marginBottom: 10 },	// +2 ?
	finals_day_of_week: { paddingTop: 10, paddingBottom: 5, paddingLeft: 15, fontWeight: 'bold', fontSize: 18, color: COLOR.VDGREY },
	finals_day_container: { paddingLeft: 15, paddingVertical: 5  },
	finals_course_title: { fontSize: 16, fontWeight: 'bold', color: COLOR.VDGREY },
	finals_course_text: { fontSize: 14, color: COLOR.DGREY },
	finals_separator: { width: LAYOUT.MAX_CARD_WIDTH + 2, borderColor: COLOR.MGREY, borderTopWidth: 1 },	// +2 ?
	/**
	 *  05 - Classes
	 */
	cc_loadingContainer: { alignItems: 'center', justifyContent: 'center', paddingHorizontal: 10, paddingVertical: 40 },
	cc_messageText: { fontWeight: '400', fontSize: 20 },
	cc_container: { flexDirection: 'row', width: LAYOUT.MAX_CARD_WIDTH, height: (LAYOUT.MAX_CARD_WIDTH / 1.6216) + 44, paddingTop: LAYOUT.MAX_CARD_WIDTH * 0.05, paddingBottom: LAYOUT.MAX_CARD_WIDTH * 0.05, paddingLeft: LAYOUT.MAX_CARD_WIDTH * 0.04, paddingRight: LAYOUT.MAX_CARD_WIDTH * 0.04 },
	cc_leftHalf: { flex: 6 },
	cc_leftHalf_upper: { flex: 3 },
	cc_leftHalf_upper_timeText: { fontSize: CC_LEFT * 7, color: COLOR.DGREY },
	cc_leftHalf_upper_timeText_secondSection: { fontSize: CC_LEFT * 5, alignSelf: 'flex-end', marginBottom: CC_LEFT * 0.5, fontWeight: 'bold' },
	cc_leftHalf_upper_classText: { flex: 2, flexDirection: 'row' },
	cc_leftHalf_upper_classText_firstSection: { fontSize: CC_LEFT * 15, fontWeight: 'bold', marginRight: CC_LEFT * 3, overflow: 'hidden' },
	cc_leftHalf_upper_classText_secondSection: { marginBottom: Math.round(CC_LEFT * 15 * 1.2) * 0.12, color: COLOR.DGREY },
	cc_leftHalf_lower: { flex: 7 },
	cc_leftHalf_lower_sections: { marginTop: CC_LEFT * 3.75, flexDirection: 'row' },
	cc_icon_time: { width: 44, marginRight: 2 * CC_LEFT, color: COLOR.PRIMARY },
	cc_icon_building: { width: 44, marginRight: 2 * CC_LEFT, paddingLeft: 2, color: COLOR.DGREY },
	cc_icon_lettergrade: { width: 44, marginRight: 2 * CC_LEFT, paddingLeft: 1, paddingTop: 2, color: COLOR.MGREEN },
	cc_leftHalf_lower_sections_text_topSection: { fontSize: CC_LEFT * 6, paddingTop: CC_LEFT * 1 },
	cc_leftHalf_lower_sections_text_bottomSection: { fontSize: CC_LEFT * 4.5, paddingTop: CC_LEFT * 1.75, color: COLOR.DGREY },
	cc_rightHalf: { flex: 4, paddingTop: CC_RIGHT * 0.5, justifyContent: 'flex-start' },
	cc_rightHalf_eachOfFourCards: { borderColor: COLOR.DGREY, borderWidth: CC_RIGHT * 0.5, borderRadius: CC_RIGHT * 1, paddingLeft: CC_RIGHT * 4, paddingTop: CC_RIGHT * 2.5, overflow: 'hidden', width: '100%', aspectRatio: 3.16 },
	cc_rightHalf_activeCard: { borderColor: COLOR.VDGREY, borderWidth: CC_RIGHT * 0.75, paddingLeft: CC_RIGHT * 3.75, paddingTop: CC_RIGHT * 2.25 },
	cc_rightHalf_each_daytime_text: { fontSize: 7 * CC_RIGHT },
	cc_rightHalf_each_class_text: { paddingTop: 4, fontSize: 10 * CC_RIGHT },
	cc_Half_each_classAndItsType_class: { width: CC_RIGHT * 55, fontSize: CC_RIGHT * 11 },
	cc_rightHalf_each_inActiveText: { color: COLOR.DGREY },
	cc_last_updated: { marginLeft: 18, marginTop: 8 },
	cc_noclasses: { fontSize: 16, textAlign: 'center' },
	schedule_full_button_touchable: { borderTopWidth: 1, borderTopColor: COLOR.MGREY, width: LAYOUT.MAX_CARD_WIDTH },
	schedule_full_button_text: { fontSize: 20, fontWeight: '300', color: COLOR.PRIMARY, paddingHorizontal: 14, paddingVertical: 10 },
	fslv_container: { backgroundColor: COLOR.WHITE },
	fslv_header_wrapper: { borderColor: COLOR.LGREY2, borderTopWidth: 1, borderBottomWidth: 1, backgroundColor: COLOR.LGREY },
	fslv_header_text: { paddingHorizontal: 16, paddingVertical: 8, fontSize: 20, fontWeight: '300' },
	fslv_row: { paddingHorizontal: 16, paddingVertical: 8 },
	fslv_course_code: { fontSize: 16, fontWeight: 'bold' },
	fslv_course_instructor: { fontSize: 16, marginBottom: 4 },
	fslv_course_title: { fontSize: 16 },
	fslv_si_container: { paddingTop: 4 },
	fslv_si_session: { alignItems: 'center', flexDirection: 'row' },
	fslv_si_session_text: { color: COLOR.PRIMARY, fontSize: 16 },
	fslv_si_right_arrow_icon: { color: COLOR.PRIMARY, paddingTop: 3 },
	fslv_si_down_arrow_icon: { color: COLOR.PRIMARY, paddingTop: 3 },
	fslv_flat_list_separator: { height: 1, backgroundColor: COLOR.LGREY2 },

	/**
	 *  06 - Shuttle
	 */
	shuttlecard_addButton: { width: LAYOUT.MAX_CARD_WIDTH, backgroundColor: COLOR.WHITE, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 4, paddingVertical: 8, borderTopWidth: 1, borderColor: COLOR.MGREY },
	shuttlecard_addText: { fontSize: 20, color: COLOR.PRIMARY, fontWeight: '300' },
	so_busIcon: { color: COLOR.PRIMARY },
	so_bigContainer: { width: LAYOUT.MAX_CARD_WIDTH, borderBottomWidth: 1, borderBottomColor: COLOR.MGREY },
	so_bigCircles: { flexDirection: 'row', alignItems: 'stretch', justifyContent: 'center', margin: 20, height: 83 },
	so_shortNameCircle: { borderRadius: 50, width: 83, justifyContent: 'center', overflow: 'hidden', padding: 2 },
	so_shortNameText: { textAlign: 'center', fontWeight: '600', fontSize: 48, backgroundColor: 'transparent' },
	so_shortNameTextLoading: { color: COLOR.DGREY },
	so_atContainer: { flexGrow: 3, justifyContent: 'center', alignItems: 'center' },
	so_atText: { textAlign: 'center', color: COLOR.DGREY, fontSize: 30, fontWeight: '300', backgroundColor: 'transparent' },
	so_stopNameCircle: { borderRadius: 48, borderWidth: 1, backgroundColor: COLOR.WHITE, borderColor: COLOR.MGREY, width: 83, justifyContent: 'center', padding: 2 },
	so_stopNameText: { padding: 5, textAlign: 'center', color: COLOR.DGREY, fontWeight: '500', fontSize: 16, backgroundColor: 'transparent' },
	so_infoContainer: { alignItems: 'center', paddingBottom: 10, paddingHorizontal: 8 },
	so_routeNameText: { fontSize: 17 },
	so_arrivingText: { fontSize: 26, color: COLOR.DGREY },
	so_noShuttleContainer: { width: LAYOUT.MAX_CARD_WIDTH, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 30, paddingVertical: 20 },
	so_noShuttleText: { lineHeight: 28, fontSize: 15, textAlign: 'center' },
	so_scheduleContainer: { flexDirection: 'row', marginTop: 10, justifyContent: 'center', alignItems: 'center' },
	so_scheduleText: { color: COLOR.PRIMARY, fontSize: 20, paddingLeft: 8 },
	srlv_icon: { alignSelf: 'flex-end', color: COLOR.DGREY },
	srlv_row_name: { flex: 1, paddingRight: 10 },
	srlv_touchable: { flex: 1, flexDirection: 'row', alignItems: 'center', height: 60, padding: 7, paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: COLOR.MGREY, overflow: 'hidden' },

	sslv_listRow: { backgroundColor: COLOR.WHITE, flexDirection: 'row', alignItems: 'center', width: LAYOUT.DEVICE_WIDTH, borderBottomWidth: 1, borderBottomColor: COLOR.MGREY, height: 50,	...Platform.select({ ios: { shadowOpacity: 0, shadowOffset: { height: 2, width: 2 }, shadowRadius: 2 }, android: { margin: 0, elevation: 0 } }) },
	sslv_nameText: { flex: 1, margin: 7 },
	sslv_cancelButton: { justifyContent: 'center', alignItems: 'center', width: 50, height: 50 },
	sslv_addNoticeText: { lineHeight: 28, fontSize: 15, color: COLOR.DGREY, textAlign: 'center' },
	ssl_nextText: { fontSize: 20, fontWeight: '300', padding: 8 },
	ssl_rowContainer: { flexDirection: 'row', marginBottom: 8, marginHorizontal: 8, alignItems: 'center', justifyContent: 'flex-start' },
	ssl_circle: { borderRadius: 18, width: 36, height: 36, justifyContent: 'center', overflow: 'hidden' },
	ssl_shortNameText: { textAlign: 'center', fontWeight: '600', fontSize: 19, backgroundColor: 'transparent' },
	ssl_nameText: { flex: 4, fontSize: 15, marginLeft: 10 },
	ssl_etaText: { flex: 1.2, fontSize: 15, marginLeft: 10, textAlign: 'right' },
	ssl_listContainer: { width: LAYOUT.MAX_CARD_WIDTH, overflow: 'hidden' },
	ss_shuttlestop_image: { width: LAYOUT.WINDOW_WIDTH, height: round(LAYOUT.WINDOW_WIDTH * 0.533) },
	ss_nameText: { flex: 1, flexDirection: 'row', alignItems: 'center', width: LAYOUT.WINDOW_WIDTH, paddingVertical: 10, paddingHorizontal: 14, backgroundColor: COLOR.PRIMARY, color: COLOR.WHITE, fontSize: 24, fontWeight: '300' },
	ss_arrivalsText: { width: LAYOUT.WINDOW_WIDTH, padding: 16, fontSize: 20, fontWeight: '300', color: COLOR.DGRAY },
	ss_mapContainer: { margin: 1 },
	ss_map: { margin: 1, width: LAYOUT.WINDOW_WIDTH, height: round(LAYOUT.WINDOW_WIDTH * 0.8) },
	sslv_icon: { alignSelf: 'flex-end', color: COLOR.DGREY },
	sslv_row_name: { flex: 1, paddingRight: 10 },
	sslv_row_name_disabled: { color: COLOR.MGREY, flex: 1, paddingRight: 10 },
	sslv_list_row: { flex: 1, flexDirection: 'row', alignItems: 'center', height: 60, padding: 7, paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: COLOR.MGREY, overflow: 'hidden' },

	/**
	 *  07 - Dining
	 */
	dl_row: { flexDirection: 'row', padding: 10, borderTopWidth: 1, borderTopColor: COLOR.MGREY },
	dl_row_container_left: { flex: 4, flexDirection: 'column', justifyContent: 'flex-start', paddingRight: 8 },
	dl_row_container_right: { flex: 1, alignItems: 'center', justifyContent: 'flex-end' },
	dl_title_row: { flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', flexWrap: 'wrap' },
	dl_title_text: { fontSize: 20, color: COLOR.PRIMARY },
	dl_status_row: { flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingTop: 8 },
	dl_hours_row: { flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingTop: 8 },
	dl_hours_text: { flexGrow: 1, paddingRight: 8 },
	dl_status_icon: { paddingRight: 8 },
	dl_status_text: { fontWeight: '700', paddingRight: 8 },
	dl_status_disclaimer: { color: COLOR.DORANGE },
	dl_status_soon_text: { paddingRight: 8 },
	dl_dir_traveltype_container: { flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' },
	dl_dir_eta: { color: COLOR.PRIMARY, fontSize: 11, fontWeight: '600' },
	dd_description_container: { padding: 10 },
	dd_description_nametext: { fontSize: 26, color: COLOR.PRIMARY },
	dd_description_text: { paddingTop: 4 },
	dd_description_subtext: { paddingTop: 8, color: COLOR.BLACK, fontWeight: '700' },
	dd_hours_text_container: { flexDirection: 'row', alignItems: 'center' },
	dd_hours_text_disclaimer: { color: COLOR.DORANGE, paddingVertical: 8 },
	dd_hours_row: { flexDirection: 'row', paddingBottom: 8, flexWrap: 'wrap', alignItems: 'flex-start' },
	dd_hours_text_title: { width: '35%', paddingRight: 8, color: COLOR.BLACK },
	dd_status_icon: { paddingLeft: 8 },
	dd_special_hours_text_title: { color: COLOR.BLACK, width: '50%', paddingRight: 8 },
	dd_hours_text_hours: { flexGrow: 1, color: COLOR.BLACK },
	dd_hours_text_special_hours: { paddingBottom: 8, color: COLOR.BLACK },
	dd_images_scrollview: { height: 140 },
	dd_images_image: { width: 140, height: 140, borderRadius: 5, marginHorizontal: 7 },
	dd_directions_button_container: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: COLOR.MGREY, margin: 6, padding: 6 },
	dd_directions_text: { flex: 5, fontSize: 22, color: COLOR.PRIMARY },
	dd_directions_icon_container: { flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' },
	dd_directions_distance_text: { color: COLOR.PRIMARY, fontSize: 11, fontWeight: '600' },
	dd_menu_link_container: { justifyContent: 'center', alignItems: 'center', backgroundColor: COLOR.PRIMARY, borderRadius: 3, margin: 20, padding: 10 },
	dd_menu_container: { marginHorizontal: 8 },
	dd_menu_link_text: { fontSize: 16, color: COLOR.WHITE },
	dd_menu_food_type: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 8 },
	dd_menu_meal_type: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderTopWidth: 1, borderTopColor: COLOR.MGREY },
	dd_menu_meal_type_text: { fontSize: 20, color: COLOR.DGREY },
	dd_menu_meal_type_text_active: { fontSize: 20, color: COLOR.PRIMARY },
	dd_menu_filter_button: { paddingVertical: 8, paddingHorizontal: 14, fontSize: 14, color: COLOR.DGREY, borderWidth: 1, borderColor: COLOR.DGREY, borderRadius: 3, backgroundColor: COLOR.MGREY, textAlign: 'center', marginHorizontal: 8 },
	dd_menu_filter_button_active: { paddingVertical: 8, paddingHorizontal: 14, fontSize: 14, color: COLOR.WHITE, borderWidth: 1, borderColor: COLOR.DGREY, borderRadius: 3, backgroundColor: COLOR.PRIMARY, textAlign: 'center', marginHorizontal: 8, overflow: 'hidden' },
	dd_menu_circle: { borderWidth: 1, borderColor: COLOR.MGREY, borderRadius: 8, width: 16, height: 16, backgroundColor: COLOR.MGREY, marginRight: 5 },
	dd_menu_circle_active: { borderWidth: 1, borderColor: COLOR.MGREY, borderRadius: 8, width: 16, height: 16, backgroundColor: COLOR.PRIMARY, marginRight: 5 },
	dd_menu_row: { flexDirection: 'row', paddingBottom: 8 },
	dd_menu_item_name_text: { fontSize: 15, color: COLOR.PRIMARY },
	dd_menu_item_price_text: { color: COLOR.BLACK, paddingLeft: 26, marginLeft: 30 },
	dd_menu_meal_button: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 40 },
	dd_description_po: { color: COLOR.BLACK },
	dn_container: { paddingHorizontal: 10, paddingTop: 10 },
	dn_title: { fontSize: 26, color: COLOR.PRIMARY },
	dn_market: { fontSize: 16 },
	dn_nf_container: { borderWidth: 2, borderColor: COLOR.BLACK, padding: 3, marginTop: 10 },
	dn_header: { fontSize: 42, fontWeight: '700', backgroundColor: COLOR.TRANSPARENT },
	dn_servingsize: { fontSize: 18 },
	dn_nf_bold: { fontWeight: '700' },
	dn_amountperserving: { fontSize: 14, fontWeight: '700' },
	dn_dv: { fontSize: 14, fontWeight: '700', textAlign: 'right', paddingVertical: 2 },
	dn_font: { fontSize: 18 },
	dn_disclaimer_font: { fontSize: 14 },
	dn_row_main: { flex: 5, flexDirection: 'row', borderTopWidth: 1, borderTopColor: COLOR.DMGREY, paddingVertical: 2 },
	dn_row_sub: { flex: 5, flexDirection: 'row', borderTopWidth: 1, borderTopColor: COLOR.DMGREY, paddingVertical: 2, paddingLeft: 20 },
	dn_percent: { flex: 1, fontSize: 18, fontWeight: '700', textAlign: 'right' },
	dn_dv_amountperserving: { fontSize: 13 },
	dn_topborder1: { borderTopWidth: 8, borderTopColor: COLOR.BLACK, paddingVertical: 2, marginTop: 2 },
	dn_topborder2: { borderTopWidth: 4, borderTopColor: COLOR.BLACK },
	dn_info_container: { paddingTop: 10 },
	dn_bold: { fontWeight: '700' },

	/**
	 *  08 - Student ID Card
	 */
	// Student ID Card
	sid_container: { flexDirection: 'row', margin: 12 },
	sid_left: { flex: 1 },
	sid_photo: { height: 100 },
	sid_affiliation: { textAlign: 'center', fontSize: 15, paddingTop: 8 },
	sid_right: { flex: 3, marginLeft: 16 },
	sid_name: { color: COLOR.BLACK, fontSize: 16 },
	sid_college: { color: COLOR.DGREY, fontSize: 16, paddingTop: 2 },
	sid_major: { color: COLOR.BLACK, fontSize: 16, paddingTop: 2 },
	sid_barcode: { flexGrow: 1, marginTop: 8, justifyContent: 'center' },
	sid_barcode_tip: { textAlign: 'center', fontSize: 11, color: COLOR.DGREY, zIndex: 2 },
	sid_barcode_inner: { marginTop: -6 },
	sid_barcode_id: { textAlign: 'center', fontSize: 14, zIndex: 2, marginTop: -8, letterSpacing: 4 },
	sid_loadingContainer: { alignItems: 'center', justifyContent: 'center', paddingHorizontal: 10, paddingVertical: 40 },
	sid_errorContainer: { alignItems: 'center', justifyContent: 'center', paddingHorizontal: 10, paddingVertical: 40 },
	// Barcode Modal
	sid_modal: { margin: 40, backgroundColor: COLOR.WHITE },
	sid_modal_close: { position: 'absolute', bottom: 16, right: 16 },
	sid_modal_close_icon: { color: COLOR.PRIMARY },
	sid_avatar_icon_container: { justifyContent: 'center', alignItems: 'center' },
	sid_avatar_icon: { color: COLOR.DGREY },
	sid_modal_barcode: { justifyContent: 'center', transform: [{ rotate: '90deg' }] },
	sid_modal_barcode_id: { textAlign: 'center', fontSize: 20, zIndex: 2, marginTop: -8, letterSpacing: 4 },

	/**
	 *  10 - Links
	 */
	links_row_container: { paddingVertical: 8, paddingHorizontal: 16, borderTopWidth: 1, borderTopColor: COLOR.MGREY },
	links_row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
	links_icon: { height: 28, width: 28 },
	links_icon_fa: { paddingLeft: 8, paddingRight: 5, color: COLOR.PRIMARY },
	links_name: { flex: 1, color: COLOR.VDGREY, fontSize: 18, paddingLeft: 16 },
	links_arrow_icon: { color: COLOR.CCC },

	/**
	 *  11 - Weather
	 */
	wc_topRowContainer: { flexDirection: 'row', borderBottomWidth: 1, borderColor: COLOR.MGREY, justifyContent: 'center', alignItems: 'center', width: LAYOUT.MAX_CARD_WIDTH, paddingHorizontal: 14 },
	wc_topLeftContainer: { flex: 4 },
	wc_tempText: { fontSize: 22, fontWeight: '300' },
	wc_summaryText: { fontSize: 15, color: COLOR.DGREY, paddingTop: 10, fontWeight: '300' },
	wc_topRightContainer: { flex: 1 },
	wc_topIcon: { width: 68, height: 68 },
	wc_loadingContainer: { alignItems: 'center', justifyContent: 'center', width: LAYOUT.MAX_CARD_WIDTH },
	wd_dayContainer: { flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' },
	wd_dayText: { fontSize: 14, fontWeight: '300', paddingBottom: 10 },
	wd_icon: { height: 33, width: 33 },
	wd_minText: { fontSize: 14, fontWeight: '300', color: COLOR.DGREY, paddingTop: 10 },
	wd_maxText: { fontSize: 14, fontWeight: '300', paddingTop: 10 },
	ww_weekContainer: { flexDirection: 'row', padding: 20 },
	sr_headerImage: { width: LAYOUT.WINDOW_WIDTH, height: round(LAYOUT.WINDOW_WIDTH * 0.361) },
	sr_container: { paddingHorizontal: 10, paddingTop: 10 },
	sr_beach_list: { marginTop: 20 },
	sr_surf_row: { marginBottom: 15 },
	sr_title: { fontSize: 22, fontWeight: '400', color: COLOR.PRIMARY },
	sr_desc: { fontSize: 16, marginTop: 5 },
	sr_beach_name: { fontSize: 18 },
	sr_beach_surf: { fontSize: 16, paddingTop: 4, paddingLeft: 8 },
	surf_touchable: { borderTopWidth: 1, borderTopColor: COLOR.MGREY },
	surf_text: { textAlign: 'center', fontSize: 20, fontWeight: '300', color: COLOR.PRIMARY, paddingHorizontal: 14, paddingVertical: 10 },

	/**
	 *  12 - Map
	 */
	map_container: { ...StyleSheet.absoluteFillObject },
	map_nogoogleplay: { padding: 16 },
	map_section: { height: LAYOUT.MAP_HEIGHT },
	snb_container: { zIndex: 2, justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: 44, right: 6, width: 50, height: 50, borderRadius: 25, backgroundColor: COLOR.MBLUE },
	snb_container_nav: { bottom: 100 },
	srb_bottomBarContainer: { zIndex: 5, alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: 0, width: LAYOUT.WINDOW_WIDTH, padding: 10, backgroundColor: COLOR.WHITE },
	srb_bottomBarContent: { flex: 1, justifyContent: 'center', alignSelf: 'stretch' },
	srb_bottomBarText: { textAlign: 'center' },
	// SearchSuggest
	ss_card_main: { top: 50, backgroundColor: 'white', marginTop: 6, marginHorizontal: 6, borderRadius: 3, alignItems: 'center', justifyContent: 'center' },
	ss_list_container: { width: LAYOUT.MAX_CARD_WIDTH, height: 90 },
	ss_list_row: { flex: 1, alignItems: 'center', flexDirection: 'column', paddingVertical: 14, width: Math.round((LAYOUT.WINDOW_WIDTH - 12) / 4) },
	ss_icon_container: { justifyContent: 'center', alignItems: 'center', width: 50, height: 50, borderRadius: 25, backgroundColor: COLOR.MRED },
	ss_icon_label: { fontSize: 12, marginTop: 4, color: COLOR.VDGREY2 },
	// SearchResults
	ms_container: { top: 50, backgroundColor: COLOR.WHITE, width: LAYOUT.MAX_CARD_WIDTH, margin: 6, marginBottom: deviceIphoneX() ? (92 + LAYOUT.STATUS_BAR_HEIGHT + LAYOUT.TAB_BAR_HEIGHT) : (36 + LAYOUT.STATUS_BAR_HEIGHT + LAYOUT.TAB_BAR_HEIGHT), borderRadius: 3 },
	ms_result_row: { flexDirection: 'row', paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: COLOR.MGREY, overflow: 'hidden', paddingLeft: 8, paddingRight: 8, alignItems: 'center' },
	ms_result_icon: { color: COLOR.VDGREY },
	ms_result_title: { flex: 4, fontSize: 16, paddingLeft: 12, paddingTop: 0, color: COLOR.VDGREY },
	ms_result_dist: { flex: 1, textAlign: 'right', fontSize: 16, paddingLeft: 8, paddingTop: 0, color: COLOR.PRIMARY },
	// SearchHistoryCard
	shc_list_container: { width: LAYOUT.MAX_CARD_WIDTH, top: 50, backgroundColor: COLOR.WHITE, margin: 6, maxHeight: (LAYOUT.WINDOW_HEIGHT / 2), borderRadius: 3 },
	shc_list_row: { flexDirection: 'row', paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: COLOR.LGREY },
	shc_row_icon: { alignSelf: 'center', marginHorizontal: 6, color: COLOR.DMGREY },
	shc_row_text: { flex: 1, fontSize: 16, alignSelf: 'center', color: COLOR.VDGREY2 },
	shc_row_remove: { justifyContent: 'center' },
	// SearchBar
	map_searchbar_container: { zIndex: 2, margin: 6, flexDirection: 'row', position: 'absolute', width: LAYOUT.WINDOW_WIDTH - 12, height: 44, borderWidth: 0, borderRadius: 3, backgroundColor: COLOR.WHITE },
	map_searchbar_input: { flex: 1, height: 44, paddingHorizontal: 4, color: COLOR.VDGREY, fontSize: 20 },
	map_searchbar_icon: { top: 9, left: 8 },
	map_searchbar_ai: { position: 'absolute', top: 12, left: 8 },
	map_searchbar_icon_container: { height: 44, justifyContent: 'center', alignSelf: 'center', margin: 8 },

	/**
	 *  13 - Feedback
	 */
	feedback_container: { flex: 1, flexDirection: 'column', marginHorizontal: 8, marginTop: 8, marginBottom: 8 },
	feedback_label: { flexWrap: 'wrap', fontSize: 18, paddingBottom: 16, lineHeight: 24 },
	feedback_comments_text_container: { flexDirection: 'row', borderColor: COLOR.MGREY, borderBottomWidth: 1, marginBottom: 8, backgroundColor: 'white' },
	feedback_email_text_container: { borderColor: COLOR.MGREY, borderBottomWidth: 1, marginBottom: 8 },
	feedback_text_input: { flex: 1, backgroundColor: COLOR.WHITE, fontSize: 18, alignItems: 'center', padding: 8 },
	feedback_submit_container: { justifyContent: 'center', alignItems: 'center', backgroundColor: COLOR.PRIMARY, borderRadius: 3, padding: 10 },
	feedback_submit_text: { fontSize: 16, color: 'white' },
	feedback_submitting_container: { flex: 1, flexDirection: 'column', padding: 16, alignItems: 'center', justifyContent: 'center' },
	feedback_loading_icon: { paddingBottom: 16 },
	feedback_submitting_text: { fontSize: 18, textAlign: 'center' },

	/**
	 *  14 - User Profile
	 */
	// User Account
	ua_accountinfo: { flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 14, alignItems: 'center' },
	ua_loggedin: { flex: 3, flexDirection: 'row', alignItems: 'center' },
	ua_username_checkmark: { color: COLOR.GREEN },
	ua_username_text: { flex: 1, fontSize: 18, color: COLOR.VDGREY, paddingLeft: 4 },
	ua_logout: { flex: 1 },
	ua_loutout_text: { textAlign: 'right', fontSize: 18, fontWeight: '600', color: COLOR.SECONDARY },
	ua_loginContainer: { flexGrow: 1, margin: 7 },
	ua_input: { flexGrow: 1, height: 40, paddingVertical: 4, paddingHorizontal: 8, borderWidth: 1, borderColor: COLOR.MGREY, marginBottom: 8, fontSize: 16, backgroundColor: 'white' },
	ua_spacedRow: { flexDirection: 'row', justifyContent: 'space-between' },
	ua_accountText: { textAlign: 'center', fontSize: 16, color: COLOR.DGREY },
	ua_forgotButton: { flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 16 },
	ua_loginButton: { flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: COLOR.PRIMARY, borderRadius: 3, padding: 10, marginTop: 10 },
	ua_loading_icon: { paddingLeft: 8 },
	ua_loginButtonDisabled: { backgroundColor: COLOR.DGREY },
	ua_forgotText: { fontSize: 14, color: COLOR.PRIMARY, padding: 4 },
	ua_panicIcon: { fontSize: 36, paddingTop: 8, alignSelf: 'center', color: COLOR.WARNING },
	ua_panicText: { fontSize: 16, padding: 8, textAlign: 'center' },
	ua_loginText: { fontSize: 16, color: COLOR.WHITE },
	ua_errorText: { flex: 1, fontSize: 18, color: COLOR.MRED },
	pi_container: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: COLOR.WHITE, marginBottom: 16, paddingVertical: 8, paddingHorizontal: 20, borderTopWidth: 1, borderTopColor: COLOR.MGREY, borderBottomWidth: 1, borderBottomColor: COLOR.MGREY },
	pi_icon: { color: COLOR.PRIMARY },
	pi_title: { flexGrow: 1, fontSize: 18, color: COLOR.VDGREY, paddingLeft: 16 },
	pi_arrow: { color: COLOR.CCC },
	// Profile Notification Topics
	pnt_header_row: { borderBottomColor: COLOR.MGREY0, borderBottomWidth: 1 },
	pnt_header_text: { paddingVertical: 12, paddingHorizontal: 8, fontSize: 26, color: COLOR.VDGREY },
	pnt_row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 6, borderBottomColor: COLOR.MGREY, borderBottomWidth: 1 },
	pnt_row_text: { flex: 1, paddingLeft: 20, fontSize: 22, color: COLOR.VDGREY },
	pnt_switch: { marginHorizontal: 12, justifyContent: 'center', alignItems: 'center' },

	/**
	 *  15 - Onboarding
	 */
	ob_container: { flexGrow: 1, backgroundColor: COLOR.PRIMARY, alignItems: 'center' },
	ob_logo: { width: round(LAYOUT.WINDOW_WIDTH * 0.8), height: round(LAYOUT.WINDOW_WIDTH * 0.8) * 0.19, marginTop: round(LAYOUT.WINDOW_HEIGHT * 0.15) },
	ob_introtext: { color: COLOR.WHITE, fontSize: 22, textAlign: 'center' },
	ob_intro1: { marginTop: 60 },
	ob_intro2: { marginTop: 30, width: round(LAYOUT.WINDOW_WIDTH * 0.8) },
	ob_continue: { textDecorationLine: 'underline', marginTop: 80 },
	ob_skip: { textDecorationLine: 'underline', marginTop: 24 },
	ob_logincontainer: { width: round(LAYOUT.WINDOW_WIDTH * 0.8) },
	ob_input: { height: 40, backgroundColor: COLOR.WHITE, borderWidth: 1, borderColor: COLOR.BLACK, paddingLeft: 10 },
	ob_inputplaceholder: { color: COLOR.DGREY },
	ob_login: { marginTop: 60 },
	ob_pass: { marginTop: 20 },
	ob_actionscontainer: { flexDirection: 'row', marginTop: 20 },
	ob_help_button: { flex: 2 },
	ob_cancel_button: { flex: 1 },
	ob_forgotpass: { color: COLOR.WHITE, fontSize: 14, textAlign: 'left' },
	ob_cancel: { color: COLOR.WHITE, fontSize: 14, textAlign: 'right' },
	ob_loading_icon: { paddingTop: round(LAYOUT.WINDOW_HEIGHT * 0.25) },
	ob_loginButton: { borderWidth: 1, borderColor: COLOR.WHITE, padding: 6, marginTop: 20, backgroundColor: COLOR.PRIMARY },
	ob_loginText: { fontSize: 16, color: COLOR.WHITE, textAlign: 'center' },

	/**
	 *	16 - Parking
	 */
	pst_elevated_row_view: { flexDirection: 'row', flex: 1, paddingLeft: 15, backgroundColor: COLOR.MGREY, alignItems: 'center', justifyContent: 'center', height: round(LAYOUT.MAX_CONTENT_HEIGHT / 13), margin: 3 },
	pst_unelevated_row_view: { flexDirection: 'row', flex: 1, paddingLeft: 15, backgroundColor: COLOR.WHITE, alignItems: 'center', justifyContent: 'center', height: round(LAYOUT.MAX_CONTENT_HEIGHT / 13), margin: 3 },
	pst_warning_elevated_view: { flex: 1, flexDirection: 'row', backgroundColor: 'white' , alignItems: 'center', justifyContent: 'center', marginHorizontal: 30, bottom: 25 },
	pst_warning_container_view: { alignItems: 'center', justifyContent: 'center', flex: 1 },
	pst_warning_header_text: { fontSize: 18, top: -20, alignItems: 'center' },
	pst_full_container: { flex: 1, backgroundColor: COLOR.WHITE },
	pst_flat_list: { backgroundColor: COLOR.WHITE, flex: 1 },
	pst_flat_list_separator: { height: 1, backgroundColor: COLOR.MGREY },
	pst_flat_list_empty_separator: { height: 1, backgroundColor: COLOR.WHITE },
	pst_circle: { borderRadius: 18, width: 36, height: 36, justifyContent: 'center', overflow: 'hidden' },
	pst_character: { textAlign: 'center', fontWeight: '600', fontSize: 19, backgroundColor: 'transparent' },
	pst_row_text: { flex: 1, paddingRight: 10, paddingLeft: 10, fontSize: 19 },

	po_container: { width: LAYOUT.MAX_CARD_WIDTH, alignItems: 'center' },
	po_structure_name: { fontSize: 32, marginTop: 4, color: COLOR.VDGREY },
	po_structure_context: { fontSize: 18, marginTop: 4, color: COLOR.DGREY },
	po_structure_spots_available: {  alignSelf: 'center', fontSize: 18, marginTop: 8 },
	po_circle: { justifyContent: 'space-around', overflow: 'hidden', backgroundColor: COLOR.GREEN },
	po_character: { textAlign: 'center', fontWeight: '600', backgroundColor: 'transparent' },
	po_circle_number: { fontWeight: 'bold' },
	po_circle_number_na: { color: COLOR.DGREY },
	po_circle_percent: {  textAlign: 'center' },
	po_fill_info: { flexDirection: 'row', alignItems: 'center' },
	po_one_spot_selected: { flexDirection: 'row', justifyContent: 'space-around', width: LAYOUT.MAX_CARD_WIDTH, marginTop: 16, paddingBottom: 20 },
	po_two_spots_selected: { flexDirection: 'row', justifyContent: 'center', width: LAYOUT.MAX_CARD_WIDTH, marginTop: 16, paddingBottom: 20 },
	po_three_spots_selected: { flexDirection: 'row', justifyContent: 'center', width: LAYOUT.MAX_CARD_WIDTH, marginTop: 16, paddingBottom: 20 },
	po_structure_comingsoon: { textAlign: 'center', fontSize: 17, color: COLOR.DGREY, fontStyle: 'italic', marginBottom: 10 },
	po_acp: { marginBottom: 15 },
	po_acp_gap_1: { paddingHorizontal: 20 },
	po_acp_gap_2: { paddingHorizontal: 10 },
	// ParkingCard
	pc_nolots_container: { paddingHorizontal: 20, paddingVertical: 40 },
	pc_nolots_text: {  alignSelf: 'center', fontSize: 18 },

	mpl_row_view: { flexDirection: 'row', flex: 1, padding: 12, alignItems: 'center', justifyContent: 'center' },
	mpl_row_text_unselected: { flex: 1, fontSize: 20, justifyContent: 'flex-start', color: COLOR.VDGREY2 },
	mpl_row_text_selected: { flex: 1, fontSize: 20, justifyContent: 'flex-start', color: COLOR.PRIMARY },
	mpl_row_add_remove_btn: {  },
	mpl_message_view: { position: 'absolute', bottom: 0, zIndex: -1, width: LAYOUT.WINDOW_WIDTH, padding: 30 },
	mpl_message_text: { fontSize: 19, textAlign: 'center' },

	/**
	 *	17 - Notifications
	 */
	notifications_row: { paddingVertical: 10, paddingRight: 10, flexDirection: 'row', justifyContent: 'flex-start', borderBottomWidth: 1, borderBottomColor: COLOR.MGREY },
	notifications_vector_icon: { justifyContent: 'center', alignItems: 'center', marginLeft: 10, marginRight: 16 },
	notifications_timestamp_text: { color: COLOR.TIME, fontWeight: 'bold', fontSize: 10 },
	notifications_title_text: { color: COLOR.BLACK, fontWeight: '400', fontSize: platformAndroid() ? 16 : 20 },
	notifications_body_text_container: { paddingTop: 10 },
	notifications_body_text: { color: COLOR.VDGREY, fontSize: 14 },
	notifications_section_list_separator: { height: 1, backgroundColor: COLOR.MGREY },
	notifications_status: { fontSize: 16, padding: 20 },
	notifications_err: { textAlign: 'center', fontSize: 16, padding: 30 },

	/**
	 *	18 - Occupsace
	 */
	occuspace_view: { flexGrow: 1, padding: 8, width: LAYOUT.MAX_CARD_WIDTH, height: 200 },
	occuspace_location_title: { fontSize: 20, color: COLOR.PRIMARY },
	occuspace_status_text: { flexDirection: 'row', paddingBottom: 10, fontSize: 12 },
	occuspace_sublocation_text: { fontSize: 15 },
	occusapce_status_dot: { paddingLeft: 8, paddingTop: 4 },
	occusapce_item_separator: { padding: 5 },
	occuspace_busyness_text: { fontSize: 12 },
	occuspace_busyness_row: { flexDirection: 'row', justifyContent: 'space-between', fontSize: 12 },
	occuspace_estimated_text: { fontWeight: 'bold' },
	occuspace_units_text: { fontWeight: 'normal', color: COLOR.DGREY },
	occuspace_no_locations_container: { paddingHorizontal: 20, paddingVertical: 40 },
	occuspace_no_loocations_text: {  alignSelf: 'center', fontSize: 18 },

	/**
	 *  99 - Misc
	 */
	// Banner Card
	bc_image: { height: ((LAYOUT.MAX_CARD_WIDTH / 1242) * 440), width: LAYOUT.MAX_CARD_WIDTH },
	bc_cardTitle: { color: COLOR.PRIMARY, width: LAYOUT.MAX_CARD_WIDTH, textAlign: 'center', fontSize: 50, fontWeight: '600', paddingVertical: 30 },
	bc_closeContainer: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', zIndex: 10, position: 'absolute', top: 3, right: 3 },
	bc_closeText: { color: COLOR.MGREY, fontSize: 10, marginBottom: 2, backgroundColor: 'transparent' },
	bc_closeIcon: { color: COLOR.MGREY, marginLeft: 2, backgroundColor: 'transparent' },
	bc_more: { alignSelf: 'stretch', justifyContent: 'center', padding: 6, borderTopWidth: 1, borderTopColor: COLOR.MGREY },
	bc_more_label: { fontSize: 20, color: COLOR.PRIMARY, textAlign: 'center', fontWeight: '300' },
	// LocationRequiredContent
	lrc_icon: { color: COLOR.DGREY },
	lrc_container: { flex: 1, alignItems: 'center', padding: 8, width: LAYOUT.WINDOW_WIDTH },
	lrc_textRow: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingTop: 10 },
	lrc_promptText: { fontSize: 14, color: COLOR.DGREY, paddingLeft: 6 },
	lrc_button: { justifyContent: 'center', alignItems: 'center', backgroundColor: COLOR.PRIMARY, borderRadius: 3, marginTop: 14, padding: 10 },
	lrc_buttonText: { color: COLOR.WHITE },
})

module.exports = css
