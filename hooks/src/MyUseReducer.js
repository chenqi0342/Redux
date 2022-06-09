import React, { createContext,useContext } from 'react'

const countContext = createContext()

function MyUseReducer(props) {
	return (
		<countContext.Provider value={100}>
			<Foo />
		</countContext.Provider>
	)
}

function Foo () {
    const value =useContext(countContext)
	return (
		// <countContext.Consumer>
		// 	{(value) => {
		// 		return <div>{value}</div>
		// 	}}
		// </countContext.Consumer>
        <div>{ value}</div>
	)
}
export default MyUseReducer
