const fs = require('fs')
const os = require('os')

const REPLACEMENT_ENV = process.argv[2]
const ENV_TYPE = process.argv[3]

// Environment Setup
let myEnv
if (ENV_TYPE === 'ci') {
	const APP_CONFIG = JSON.parse(process.env.APP_CONFIG.replace(/\\\"/g,'"')) // eslint-disable-line
	Object.keys(APP_CONFIG).forEach((key) => {
		process.env[key] = APP_CONFIG[key]
	})
	myEnv = process.env
} else {
	const tempEnv = require(os.homedir() + '/.campusmobile/config.js') // eslint-disable-line
	myEnv = {}
	myEnv.APP_VERSION = tempEnv.APP_VERSION
	myEnv.BUILD_ENV = tempEnv.BUILD_ENV
	Object.keys(tempEnv.APP_CONFIG).forEach((key) => {
		myEnv[key] = tempEnv.APP_CONFIG[key]
	})
}

// File Paths
const MOBILE_AUTH_SAGA_PATH = './app/sagas/mobileAuthSaga.js'
const APP_SETTINGS_PATH = './app/AppSettings.js'
const SSO_SERVICE_PATH = './app/services/ssoService.js'
const IOS_INFO_PLIST_PATH = './ios/CampusMobile/Info.plist'
const IOS_GOOGLE_SERVICES_PATH = './ios/GoogleService-Info.plist'
const ANDROID_STRINGS_PATH = './android/app/src/main/res/values/strings.xml'
const ANDROID_MANIFEST_PATH = './android/app/src/main/AndroidManifest.xml'
const ANDROID_GOOGLE_SERVICES_PATH = './android/app/google-services.json'
const ANDROID_APP_BUILD_GRADLE_PATH = './android/app/build.gradle'

// Placeholder Values
const PH = {
	APP_NAME_PH: 'CampusMobile',
	APP_VERSION_PH: '1.0.0',
	GOOGLE_ANALYTICS_ID_PH: 'GOOGLE_ANALYTICS_ID_PH',
	GOOGLE_MAPS_API_KEY_PH: 'GOOGLE_MAPS_API_KEY_PH',
	FIREBASE_KEY_PH: 'FIREBASE_KEY_PH',
	BUGSNAG_KEY_PH: 'BUGSNAG_KEY_PH',
	AUTH_SERVICE_API_KEY_PH: 'AUTH_SERVICE_API_KEY_PH',
	GS_PROJECT_ID_PH: 'GS_PROJECT_ID_PH',
	GS_STORAGE_BUCKET_PH: 'GS_STORAGE_BUCKET_PH',
	GS_FIREBASE_URL_PH: 'GS_FIREBASE_URL_PH',
	GS_PROJECT_NUMBER_PH: 'GS_PROJECT_NUMBER_PH', // iOS: GCM_SENDER_ID, Android: project_info.project_number
	GS_IOS_CLIENT_ID_PH: 'GS_IOS_CLIENT_ID_PH',
	GS_IOS_REVERSED_CLIENT_ID_PH: 'GS_IOS_REVERSED_CLIENT_ID_PH',
	GS_IOS_API_KEY_PH: 'GS_IOS_API_KEY_PH',
	GS_IOS_BUNDLE_ID_PH: 'GS_IOS_BUNDLE_ID_PH',
	GS_IOS_STORAGE_BUCKET_PH: 'GS_IOS_STORAGE_BUCKET_PH',
	GS_IOS_APP_ID_PH: '1:1:ios:1',
	GS_ANDROID_CLIENT_ID_PH: 'GS_ANDROID_CLIENT_ID_PH',
	GS_ANDROID_API_KEY_PH: 'GS_ANDROID_API_KEY_PH',
	GS_ANDROID_APP_ID_PH: '1:1:android:1',
	GS_ANDROID_BUNDLE_ID_PH: 'edu.ucsd',
	MOBILE_PUBLIC_API_KEY_PH: 'MOBILE_PUBLIC_API_KEY_PH',
	MOBILE_PUBLIC_API_SECRET_PH: 'MOBILE_PUBLIC_API_SECRET_PH',

}

if (REPLACEMENT_ENV === 'prod' || REPLACEMENT_ENV === 'qa') {
	// AppSettings.js
	makeReplacements(APP_SETTINGS_PATH, REPLACEMENT_ENV, [
		{ prodVal: myEnv.APP_NAME, qaVal: myEnv.APP_NAME, phVal: PH.APP_NAME_PH },
		{ prodVal: myEnv.GOOGLE_ANALYTICS_ID_PROD, qaVal: myEnv.GOOGLE_ANALYTICS_ID_QA, phVal: PH.GOOGLE_ANALYTICS_ID_PH },
		{ prodVal: myEnv.AUTH_SERVICE_API_URL_PROD, qaVal: myEnv.AUTH_SERVICE_API_URL_QA },
		{ prodVal: myEnv.ACADEMIC_TERM_API_URL_PROD, qaVal: myEnv.ACADEMIC_TERM_API_URL_QA },
		{ prodVal: myEnv.ACADEMIC_TERM_FINALS_API_URL_PROD, qaVal: myEnv.ACADEMIC_TERM_FINALS_API_URL_QA },
		{ prodVal: myEnv.ACADEMIC_HISTORY_API_URL_PROD, qaVal: myEnv.ACADEMIC_HISTORY_API_URL_QA },
		{ prodVal: myEnv.TOPICS_API_URL_PROD, qaVal: myEnv.TOPICS_API_URL_QA },
		{ prodVal: myEnv.MYMESSAGES_API_URL_PROD, qaVal: myEnv.MYMESSAGES_API_URL_QA },
		{ prodVal: myEnv.MP_REGISTRATION_API_URL_PROD, qaVal: myEnv.MP_REGISTRATION_API_URL_QA },
		{ prodVal: myEnv.MESSAGES_TOPICS_URL_PROD, qaVal: myEnv.MESSAGES_TOPICS_URL_QA },
		{ prodVal: myEnv.PARKING_API_URL_PROD, qaVal: myEnv.PARKING_API_URL_QA },
		{ prodVal: myEnv.SPECIAL_EVENT_API_URL_PROD, qaVal: myEnv.SPECIAL_EVENT_API_URL_QA },
		{ prodVal: myEnv.SI_SESSIONS_API_URL_PROD, qaVal: myEnv.SI_SESSIONS_API_URL_QA },
		{ prodVal: myEnv.MY_STUDENT_CONTACT_API_URL_PROD, qaVal: myEnv.MY_STUDENT_CONTACT_API_URL_QA },
		{ prodVal: myEnv.MY_STUDENT_PROFILE_API_URL_PROD, qaVal: myEnv.MY_STUDENT_PROFILE_API_URL_QA },
		{ prodVal: myEnv.MOBILE_API_AUTH_URL_PROD, qaVal: myEnv.MOBILE_API_AUTH_URL_QA },
		{ prodVal: myEnv.OCCUSPACE_API_URL_PROD, qaVal: myEnv.OCCUSPACE_API_URL_QA },
	])

	// ssoService.js
	makeReplacements(SSO_SERVICE_PATH, REPLACEMENT_ENV, [
		{ prodVal: myEnv.AUTH_SERVICE_API_KEY_PROD, qaVal: myEnv.AUTH_SERVICE_API_KEY_QA, phVal: PH.AUTH_SERVICE_API_KEY_PH },
	])

	// Info.plist
	makeReplacements(IOS_INFO_PLIST_PATH, REPLACEMENT_ENV, [
		{ prodVal: myEnv.APP_NAME, qaVal: myEnv.APP_NAME, phVal: PH.APP_NAME_PH },
		{ prodVal: myEnv.APP_VERSION, qaVal: myEnv.APP_VERSION, phVal: PH.APP_VERSION_PH },
		{ prodVal: myEnv.BUGSNAG_KEY, qaVal: myEnv.BUGSNAG_KEY, phVal: PH.BUGSNAG_KEY_PH },
	])

	// build.gradle
	makeReplacements(ANDROID_APP_BUILD_GRADLE_PATH, REPLACEMENT_ENV, [
		{ prodVal: myEnv.APP_VERSION, qaVal: myEnv.APP_VERSION, phVal: PH.APP_VERSION_PH },
	])

	// strings.xml
	makeReplacements(ANDROID_STRINGS_PATH, REPLACEMENT_ENV, [
		{ prodVal: myEnv.APP_NAME, qaVal: myEnv.APP_NAME, phVal: PH.APP_NAME_PH },
	])

	// AndroidManifest.xml
	makeReplacements(ANDROID_MANIFEST_PATH, REPLACEMENT_ENV, [
		{ prodVal: myEnv.APP_VERSION, qaVal: myEnv.APP_VERSION, phVal: PH.APP_VERSION_PH },
		{ prodVal: myEnv.GOOGLE_MAPS_API_KEY, qaVal: myEnv.GOOGLE_MAPS_API_KEY, phVal: PH.GOOGLE_MAPS_API_KEY_PH },
		{ prodVal: myEnv.BUGSNAG_KEY, qaVal: myEnv.BUGSNAG_KEY, phVal: PH.BUGSNAG_KEY_PH },
	])

	// GoogleService-Info.plist
	makeReplacements(IOS_GOOGLE_SERVICES_PATH, REPLACEMENT_ENV, [
		{ prodVal: myEnv.GS_IOS_PROD_CLIENT_ID, 				qaVal: myEnv.GS_IOS_QA_CLIENT_ID, 				phVal: PH.GS_IOS_CLIENT_ID_PH },
		{ prodVal: myEnv.GS_IOS_PROD_REVERSED_CLIENT_ID,		qaVal: myEnv.GS_IOS_QA_REVERSED_CLIENT_ID, 		phVal: PH.GS_IOS_REVERSED_CLIENT_ID_PH },
		{ prodVal: myEnv.GS_IOS_PROD_API_KEY, 					qaVal: myEnv.GS_IOS_QA_API_KEY, 				phVal: PH.GS_IOS_API_KEY_PH },
		{ prodVal: myEnv.GS_IOS_BUNDLE_ID, 						qaVal: myEnv.GS_IOS_BUNDLE_ID, 					phVal: PH.GS_IOS_BUNDLE_ID_PH },
		{ prodVal: myEnv.GS_IOS_PROD_APP_ID, 					qaVal: myEnv.GS_IOS_QA_APP_ID, 					phVal: PH.GS_IOS_APP_ID_PH },
		{ prodVal: myEnv.GS_PROD_FIREBASE_URL, 					qaVal: myEnv.GS_QA_FIREBASE_URL, 				phVal: PH.GS_FIREBASE_URL_PH },
		{ prodVal: myEnv.GS_PROD_STORAGE_BUCKET, 				qaVal: myEnv.GS_QA_STORAGE_BUCKET, 				phVal: PH.GS_STORAGE_BUCKET_PH },
		{ prodVal: myEnv.GS_PROD_PROJECT_ID, 					qaVal: myEnv.GS_QA_PROJECT_ID, 					phVal: PH.GS_PROJECT_ID_PH },
		{ prodVal: myEnv.GS_PROD_PROJECT_NUMBER, 				qaVal: myEnv.GS_QA_PROJECT_NUMBER, 				phVal: PH.GS_PROJECT_NUMBER_PH },
	])

	// google-services.json
	makeReplacements(ANDROID_GOOGLE_SERVICES_PATH, REPLACEMENT_ENV, [
		{ prodVal: myEnv.GS_ANDROID_PROD_CLIENT_ID, 			qaVal: myEnv.GS_ANDROID_QA_CLIENT_ID, 			phVal: PH.GS_ANDROID_CLIENT_ID_PH },
		{ prodVal: myEnv.GS_ANDROID_PROD_API_KEY, 				qaVal: myEnv.GS_ANDROID_QA_API_KEY, 			phVal: PH.GS_ANDROID_API_KEY_PH },
		{ prodVal: myEnv.GS_ANDROID_PROD_APP_ID, 				qaVal: myEnv.GS_ANDROID_QA_APP_ID, 				phVal: PH.GS_ANDROID_APP_ID_PH },
		{ prodVal: myEnv.GS_ANDROID_BUNDLE_ID, 					qaVal: myEnv.GS_ANDROID_BUNDLE_ID, 				phVal: PH.GS_ANDROID_BUNDLE_ID_PH },
		{ prodVal: myEnv.GS_PROD_FIREBASE_URL, 					qaVal: myEnv.GS_QA_FIREBASE_URL, 				phVal: PH.GS_FIREBASE_URL_PH },
		{ prodVal: myEnv.GS_PROD_STORAGE_BUCKET, 				qaVal: myEnv.GS_QA_STORAGE_BUCKET, 				phVal: PH.GS_STORAGE_BUCKET_PH },
		{ prodVal: myEnv.GS_PROD_PROJECT_ID, 					qaVal: myEnv.GS_QA_PROJECT_ID, 					phVal: PH.GS_PROJECT_ID_PH },
		{ prodVal: myEnv.GS_PROD_PROJECT_NUMBER, 				qaVal: myEnv.GS_QA_PROJECT_NUMBER, 				phVal: PH.GS_PROJECT_NUMBER_PH },
	])

	// mobileAuthSaga.js
	makeReplacements(MOBILE_AUTH_SAGA_PATH, REPLACEMENT_ENV, [
		{ prodVal: myEnv.MOBILE_PUBLIC_API_KEY_PROD, qaVal: myEnv.MOBILE_PUBLIC_API_KEY_QA, phVal: PH.MOBILE_PUBLIC_API_KEY_PH },
		{ prodVal: myEnv.MOBILE_PUBLIC_API_SECRET_PROD, qaVal: myEnv.MOBILE_PUBLIC_API_SECRET_QA, phVal: PH.MOBILE_PUBLIC_API_SECRET_PH },
	])
} else {
	console.log('Error: Replacement type not specififed.')
}


function makeReplacements(FILE_PATH, ENV, REPLACEMENTS) {
	fs.readFile(FILE_PATH, 'utf8', (err, data) => {
		if (!err) {
			for (let i = 0; REPLACEMENTS.length > i; i++) {
				if (REPLACEMENTS[i].phVal) {
					if (ENV === 'prod') {
						data = data.replace(REPLACEMENTS[i].phVal, REPLACEMENTS[i].prodVal)
					} else if (ENV === 'qa') {
						data = data.replace(REPLACEMENTS[i].phVal, REPLACEMENTS[i].qaVal)
					}
				} else if (REPLACEMENT_ENV === 'qa') {
					data = data.replace(REPLACEMENTS[i].prodVal, REPLACEMENTS[i].qaVal)
				}
			}
			fs.writeFile(FILE_PATH, data, 'utf8', (writeErr) => {
				if (writeErr) {
					return console.log(err)
				} else {
					console.log('SUCCESS: File ' + FILE_PATH + ' updated with ' + ENV + ' values.')
				}
			})
		} else {
			return console.log('Error: ' + err)
		}
	})
}
