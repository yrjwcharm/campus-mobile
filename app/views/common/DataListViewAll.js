import React from 'react'
import DataListView from './DataListView'
import logger from '../../util/logger'
import css from '../../styles/css'

const DataListViewAll = ({ navigation }) => {
	const { params } = navigation.state
	const { title, data, item, card } = params
	logger.ga('View Loaded: ' + title + ' (View All)')
	return (
		<DataListView
			style={card ? css.DataList_card_list : css.DataList_full_list}
			data={data}
			scrollEnabled={true}
			item={item}
			card={card}
		/>
	)
}

export default DataListViewAll
