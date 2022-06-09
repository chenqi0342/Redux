import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import MyUseReducer from './MyUseReducer'
import MyUseContext from './MyUseContext'
import MyUseEffect from './MyUseEffect'

const root = ReactDOM.createRoot(document.getElementById('root'))
	root.render(
		<React.StrictMode>
			<MyUseEffect />
		</React.StrictMode>
	)

