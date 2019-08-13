import { authorizedFetch } from '../util/auth'

import AppSettings from '../AppSettings'
import logger from '../util/logger'

const ScheduleService = {
	* FetchSchedule(term) {
		const data = []
		const UN_API_URL = AppSettings.ACADEMIC_HISTORY_API_URL + '?academic_level=UN&term_code=' + term
		const GR_API_URL = AppSettings.ACADEMIC_HISTORY_API_URL + '?academic_level=GR&term_code=' + term
		// Query api for undergrad classes
		try {
			const undergrad = JSON.parse(yield authorizedFetch(UN_API_URL))
			if (undergrad.data && Array.isArray(undergrad.data)) {
				data.push(...undergrad.data)
			}
		} catch (err) {
			logger.trackException(err, false)
		}
		// Query api for graduate classes
		try {
			const grad = JSON.parse(yield authorizedFetch(GR_API_URL))
			if (grad.data && Array.isArray(grad.data)) {
				data.push(...grad.data)
			}
		} catch (err) {
			logger.trackException(err, false)
		}
		return { data }
	},

	FetchTerm() {
		return fetch(AppSettings.ACADEMIC_TERM_API_URL)
			.then(response => response.json())
			.then(responseData => responseData)
			.catch((err) => { throw err })
	},

	FetchFinals() {
		return fetch(AppSettings.ACADEMIC_TERM_FINALS_API_URL)
			.then(response => response.json())
			.then(responseData => responseData)
			.catch((err) => { throw err })
	}
}

export default ScheduleService
