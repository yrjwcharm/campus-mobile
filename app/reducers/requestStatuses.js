/* Credit for this reducer goes to StashAway! Incredibly helpful post:
* https://medium.com/stashaway-engineering/react-redux-tips-better-way
* -to-handle-loading-flags-in-your-reducers-afda42a804c6
*/

function requestStatuses(state = {}, action) {
	const { type } = action
	const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type)

	// not a *_REQUEST, *_SUCCESS, or *_FAILURE action, ignore
	if (!matches) return state

	const [, requestName, requestState] = matches
	// Store whether a request is happening at the moment or not
	// e.g. will be true when receiving REQUEST
	// and false when receiving FAILURE / SUCCESS
	// Also includes timestamp for REQUEST
	return {
		...state,
		[requestName]: requestState === 'REQUEST' ? { timeRequested: new Date() } : null
	}
}

module.exports = requestStatuses
