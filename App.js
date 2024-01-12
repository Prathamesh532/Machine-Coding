import React from 'react'
import ReactDOM  from 'react-dom/client'
import ProgressBar from './src/machineCoding/ProgressBar/ProgressBar'
import Pagination from './src/machineCoding/Pagination/Pagination'

const App = () => {
  return (
    <React.Fragment>
        {/* <h1>Hello</h1> */}
        {/* <ProgressBar /> */}
        <Pagination />
    </React.Fragment>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)