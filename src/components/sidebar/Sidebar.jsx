import React from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
          <span className="logo">BinaryLeo</span>
      </div>
      <hr/>
      <div className="center">
          <ul>
                <li>
                <DashboardIcon />
                <span>Dashboard</span>
                </li>
                <li>
                <PersonOutlineIcon />
                <span>Users</span>
                </li>
                <li>
                <LocalShippingIcon />
                <span>Products</span>
                </li>
                <li>
                <CreditCardIcon />
                <span>Orders</span>
                </li>
                <li>
                <StoreIcon />
                <span>Delivery</span>
                </li>
                <li>
                <InsertChartIcon />
                <span>Stats</span>
                </li>
                <li>
                <SettingsApplicationsIcon />
                <span>Notifications</span>
                </li>
                <li>
                <ExitToAppIcon />
                <span>System Health</span>
                </li>
                <li>
                <NotificationsNoneIcon />
                <span>Logs</span>
                </li>
                <li>
                <SettingsSystemDaydreamOutlinedIcon />
                <span>Settings</span>
                </li>
                <li>
                <PsychologyOutlinedIcon />
                <span>Profile</span>
                </li>
                <li>
                <AccountCircleOutlinedIcon />
                <span>Logout</span>
                </li>

          </ul>
      </div>
      <div className="bottom">Color Options</div>
    </div>
  )
}

export default Sidebar
