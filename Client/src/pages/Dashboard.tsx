import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { DataTable } from '../components/Table';;


const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100">
        <Header />
        <div className="px-8 py-4"><DataTable/></div>
      </div>
    </div>
  );
};

export default Dashboard;
