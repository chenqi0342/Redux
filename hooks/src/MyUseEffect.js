import React, { useState,useEffect} from 'react'
import ReactDOM from 'react-dom'
function MyUseEffect (props) {
    const [count, setCount] = useState(0)
    //组件挂载完成之后执行 组件数据更新完成之后执行
    // useEffect(() => {
    //     console.log('1')
    // })
    // useEffect(() => {
    //     console.log('1')
    // },[])
    useEffect(() => {
        return () => {
            console.log('组件被卸载了')
        }
    },[])
	return (
		<div>
            <span>{count}</span>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => ReactDOM.unmountComponentAtNode(document.getElementById('root'))}>卸载组件</button>
		</div>
	)
}

export default MyUseEffect
