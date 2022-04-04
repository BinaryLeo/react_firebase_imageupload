import React from 'react';
import './featured.scss';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Featured = () => {
  //**! Temporary value */
  let genericValue = Math.floor(Math.random() * 100);
  let genericAmount = genericValue * 5;
  let genericResult = Math.floor(Math.random() * 1000) * 10;
  let lastMonth = genericResult * 12;
  let lastYear = genericResult * 12 * 12;
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
            <div className="itemTitle">Last Week</div>
            <div className="ItemResult">
              <KeyboardArrowDownIcon className="icon" />
              <div className="resultAmount">{`${genericResult}K`}</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="ItemResult">
              <KeyboardArrowDownIcon className="icon" />
              <div className="resultAmount">{`${lastMonth}K`}</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Year</div>
            <div className="ItemResult">
              <KeyboardArrowDownIcon className="icon" />
              <div className="resultAmount">{`${lastYear}K`}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured;
