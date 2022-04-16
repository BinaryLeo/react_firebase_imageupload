import React from 'react';
import './featured.scss';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
const Featured = () => {
  //**! Temporary value */
  let genericValue = Math.floor(Math.random() * 100);
  let genericAmount = genericValue * 5;
  let target = Math.floor(Math.random() * 1000) * 120;
  let lastWeek = genericValue * 6;
  let lastMonth = lastWeek * 4;
  //.................................................
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar
            value={genericValue}
            text={`${genericValue}%`}
            strokeWidth={5}
          />
        </div>
        <p className="Title">Total sales made today</p>
        <p className="Amount">{`$${genericAmount}`}</p>
        <p className="Description">
          Previous transactions processing. Last payments may not be included
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon className="icon" />
              <div className="resultAmount">{`${target}K`}</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpIcon className="icon" />
              <div className="resultAmount">{`${lastMonth}K`}</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpIcon className="icon" />
              <div className="resultAmount">{`${lastMonth}K`}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured;
