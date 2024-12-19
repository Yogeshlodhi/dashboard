import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { DataTable } from './components/Table'
import './index.css'

function App() {

  return (
    <div className="flex max-h-[50rem] overflow-hidden">
      <Sidebar />
      <div className="flex-1 bg-gray-100">
        <Header />
        {/* <div className="px-8 py-4 overflow-auto max-h-[calc(100vh-8rem)]"> */}
        <div className="px-8 py-4 overflow-hidden max-h-[42rem]">
          <DataTable />
        </div>
      </div>
    </div>

  )
}

export default App
