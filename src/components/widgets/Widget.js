import './widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';

const Widget = ({type}) => {
    let data;

    let amount=2000
    let diff=30

    switch(type){
        case 'user':
            data={
                title:'USERS',
                isMoney: false,
                link: "see all users",
                icon: <PersonIcon className='icon'  style={{
                    backgroundColor:"darkblue",
                    color:'lightblue',
                }}/>
            };
            break;
        case 'order':
            data={
                title:"ORDERS",
                isMoney:false,
                link:"see all orders",
                icon:<ShoppingCartOutlinedIcon className='icon' style={{
                    backgroundColor:"yellow",
                    color:'goldenrod',
                }}/>
            }
            break;
        case 'earning':
            data={
                title:"EARNINGS",
                isMoney:true,
                link:"see all earningss",
                icon:<MonetizationOnIcon className='icon' style={{
                    backgroundColor:"lightgreen",
                    color:'darkgreen'
                }}/>
            }
            break;
        case 'balance':
            data={
                title:"BALANCE",
                isMoney:true,
                link:"see details",
                icon:<AccountBalanceOutlinedIcon className='icon' style={{
                    backgroundColor:"gray",
                    color:'block',
                }}/>
            }
            break;
        
        default:
            break;

    }
  return (
    <div className='widget'>
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && <CurrencyRupeeOutlinedIcon className='icon'/> }{amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive"><KeyboardArrowUpIcon/>{diff}%</div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget