import './single.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Chart from '../../components/chart/Chart'
import Tables from '../../components/table/Tables'

const Single = () => {
  return (
  <div className="single">
    <Sidebar/>
    <div className="singleContainer">
      <Navbar/>
      <div className="top">
        <div className="left">
          <p className="title">Information</p>
          <div className="item">
            <img src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1021&q=80" alt="" className="itemImg" />
            <div className="details">
            <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+1 2345 67 89</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Elton St. 234 Garden Yd. NewYork
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">USA</span>
                </div>
            </div>
          </div>
        </div>
        <div className="right">
          <Chart aspect={3/1}/>
        </div>
      </div>
      <div className="bottom">
        <Tables/>
      </div>
  </div>
    

    </div>
  )
}

export default Single