import 'react-native'
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

// Component to be tested
import { Map } from '../../../app/views/map/Map'

Enzyme.configure({ adapter: new Adapter() })

// Mock props passed down from state
const initialState = {
	location: {
		coords: {
			latitude: 32.88,
			longitude: -117.234
		}
	}
}

// Set up component to be rendered
function setup(props) {
	return shallow(<Map {...props} />)
}

test('renders without crashing', () => {
	const tree = setup(initialState)
	expect(tree).toMatchSnapshot()
})
