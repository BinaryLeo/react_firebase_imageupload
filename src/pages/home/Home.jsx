import './home.scss'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widgets  from '../../components/widget/Widgets';
import Featured from '../../components/featured/Featured';
import Chart from '../../components/chart/Chart';
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widgets type="user"/>
          <Widgets type="order"/>
          <Widgets type="earning"/>
          <Widgets type="balance"/>
        </div>
        <div className="charts">
          <Featured/>
          <Chart/>
        </div>
      </div>
    </div>
  )
}

export default Home;
