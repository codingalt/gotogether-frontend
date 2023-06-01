import React from 'react'
import css from './Campaigns.module.scss'
import * as md from 'react-icons/md';
import * as io from 'react-icons/io5';
import * as ai from 'react-icons/ai';
import profile from '../../../images/faheem1.jpg'
import user from '../../../images/user.jpg'
import user2 from '../../../images/profile3.jpg'
import time from '../../../images/time.png'
import Car from '../../../images/car.png'
import dateImg from '../../../images/date.png'
import Rupees from '../../../images/rupees.png'
import { useGetCampaignsQuery } from '../../../services/api/campaignsApi';
import Loader from '../../Loader/Loader';

const Campaigns = () => {
  const {data,isLoading,isError,error} = useGetCampaignsQuery();
  console.log(data);
  return (
    <div className={css.wrapper}>
      <div className={css.header}>
        <div className={css.left}>
          <span>Find your</span>
          <span>Destination</span>
        </div>
        <div className={css.right}>
        <md.MdOutlineNotificationsNone />
        </div>
      </div>

      <div className={css.searchBox}>
        <io.IoSearch />
        <input type="text" placeholder='Search places..' />
      </div>

      <div className={css.banner}>
        <div className={css.overlay}>
          <div className={css.text}>
            <span>Browse Rides</span>
            <span>Nearest you</span>
          </div>
        </div>
      </div>

      <div className={css.campaigns}>
        {
          isLoading ? (
            <div style={{minHeight:'50vh',width:'100vw',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Loader width={55} color={'#3784FB'} />
        </div>
          ) : (
              data?.campaigns?.map((item)=>(
                <div className={css.card} key={item._id}>
              <div className={css.top}>
                <div className={css.left}>
                  <img src={`http://localhost:5000/Uploads/profile/${item.profileImg}`} alt="" />
                </div>
                <div className={css.right}>
                  <span>{item.userName}</span>
                  <div className={css.rating}>
                    <ai.AiFillStar />
                    <span>{item.rating}/5</span>
                  </div>
                </div>
              </div>
              <div className={css.group}>
                <span>From</span>
                <span>{item.startLocation}</span>
              </div>
              <div className={css.divider}></div>
              <div className={css.group}>
                <span>Destination</span>
                <span>{item.endingLocation}</span>
              </div>
    
              <div className={css.rideDetails}>
                <div className={css.item}>
                  <img src={time} alt="" />
                  <span>{item.time}</span>
                </div>
                <div className={css.item}>
                  <img src={dateImg} alt="" />
                  <span>{item.date.split(',')[0]}</span>
                </div>
                <div className={css.item}>
                  <img src={Rupees} alt="" />
                  <span>{item.seatCostPerKm}RS</span>
                </div>
               
              </div>
              <div className={css.buttons}>
                <button className={css.msg}>Details</button>
                <button className={css.book}>Book Ride</button>
              </div>
            </div>
              ))
            
          )
        }
        

      </div>


    </div>
  )
}

export default Campaigns