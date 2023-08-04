import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import "./home.scss"
import Widget from "../../components/widgets/Widget"
import Featured from "../../components/featured/Featured"
import Chart from "../../components/chart/Chart"
import Tables from "../../components/table/Tables"

const Home = () =>{
    return(
        <div className='home'>
            <Sidebar/>
            <div className='homeContainer'>
                <Navbar/>
                 <div className="widgets">
                    <Widget type='user'/>
                    <Widget type='order'/>
                    <Widget type='earning'/>
                    <Widget type='balance'/>
                 </div>
                 <div className="charts">
                    <Featured/>
                    <Chart aspect={2/1}/>
                 </div>
                 <div className="listContainer">
                    <div className="listTitle">Latest Transactions</div>
                    <Tables/>
                 </div>
            </div>
        </div>
        
    )
}

export default Home