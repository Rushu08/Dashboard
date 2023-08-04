import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ReorderIcon from '@mui/icons-material/Reorder';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';

const Sidebar = () => {
    const {dispatch}=useContext(DarkModeContext)

  return (
    <div className="sidebar">
        <div className='top'>
            <Link to='/' style={{textDecoration:"none"}}>
            <span className='logo'>MyAdmin</span>
            </Link>
        </div>
        <hr/>
        <div className='center'>
            <ul>
                <p className="title">MAIN</p>
                <li><DashboardIcon className='icons'/>Dashboard</li>
                <p className="title">LIST</p>
                <Link to='/users' style={{textDecoration:"none"}}>
                <li><PersonOutlineOutlinedIcon className='icons'/>Users</li>
                </Link>
                <Link to='/products' style={{textDecoration:"none"}}>
                <li><StorefrontIcon className='icons'/>Products</li>
                </Link>
                <li><ReorderIcon className='icons'/>Orders</li>
                <li><LocalShippingOutlinedIcon className='icons'/>Delivery</li>
                <p className="title">USEFUL</p>
                <li><EqualizerOutlinedIcon className='icons'/>Stats</li>
                <li><NotificationsActiveIcon className='icons'/>Notifications</li>
                <p className="title">SERVUICES</p>
                <li><HealthAndSafetyIcon className='icons'/>System Health</li>
                <li><PsychologyOutlinedIcon className='icons'/>Logs</li>
                <li><SettingsIcon className='icons'/>Settings</li>
                <p className="title">USER</p>
                <li><AccountCircleOutlinedIcon className='icons'/>Profile</li>
                <li><LoginOutlinedIcon className='icons'/>Logout</li>
            </ul>
        </div>
        <div className='bottom'>
            <div className="colorOptions" onClick={()=> dispatch({type:"LIGHT"})}></div>
            <div className="colorOptions" onClick={()=> dispatch({type:"DARK"})}></div>
        </div>
    </div>
  )
}

export default Sidebar