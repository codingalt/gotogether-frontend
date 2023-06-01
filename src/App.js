import "./App.css";
import "./styles/global.scss";
import HomePage from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./components/Signup/Signup";
import { Route, Routes } from "react-router-dom";
import VerifyOtp from "./components/VerifyOtp/VerifyOtp";
import UserInfo from "./components/UserInfo/UserInfo";
import RegisterDriver from "./components/RegisterDriver/RegisterDriver";
import Main from "./components/Dashboard/Main/Main";
import AddCampaign from "./components/Dashboard/AddCampaign/AddCampaign";
import { useEffect, useMemo, useState } from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import MainContext from "./components/Context/MainContext";
import Protected from "./components/Protected/Protected";
import Sidebar from "./components/Dashboard/Sidebar/Sidebar";
import Sidebar2 from "./components/Dashboard/Sidebar/Sidebar2";
import Profile from "./components/Dashboard/Profile/Profile";
import 'boxicons';
import Campaigns from "./components/Dashboard/Campaigns/Campaigns";
import { useDispatch } from "react-redux";
import { setProfileData } from "./services/redux/userSlice";
import { useGetDriverQuery, useGetUserQuery } from "./services/api/userApi";
import WaitingTimer from "./components/Dashboard/WaitingTimer/WaitingTimer";

function App() {
  const dispatch = useDispatch();
  const userId = localStorage.getItem("userId");
  const {data,isLoading,isSuccess} = useGetUserQuery(userId);
  const [campaign, setCampaign] = useState(false);
  const [renderDirection, setRenderDirection] = useState(null);
  const libraries = useMemo(() => ["places"], []);
  const [confirmLocation, setConfirmLocation] = useState(false);
  const [startingLocation, setStartingLocation] = useState("");
  const [finalLocation, setFinalLocation] = useState("");
  const [pinIcon, setPinIcon] = useState(false);
  const [origin, setOrigin] = useState(null);
  const [sidebar,setSidebar] = useState(false);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API,
    libraries,
  });

  if(isSuccess){
    dispatch(setProfileData({isDriver: data?.data[0]?.isDriver,profileImg: data?.data[0]?.profileImg,phone: data?.data[0]?.phone, totalRating: data?.data[0]?.totalRating, totalReviewsGiven: data?.data[0]?.totalReviewsGiven}))
  }

  return (
    <div className="App">
      <MainContext.Provider
        value={{
          isLoaded,
          campaign,
          setCampaign,
          renderDirection,
          setRenderDirection,
          confirmLocation,
          setConfirmLocation,
          startingLocation,
          setStartingLocation,
          finalLocation,
          setFinalLocation,
          pinIcon,
          setPinIcon,
          origin,
          setOrigin,
          sidebar,
          setSidebar
        }}
      >
        <wc-toast theme="light"></wc-toast>
        <AddCampaign />
        <Sidebar /> 
        {/* <Sidebar2 /> */}
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/verify" element={<VerifyOtp />} />
          <Route
            exact
            path="/info"
            element={<Protected Component={UserInfo} />}
          />
          <Route
            exact
            path="/driverinfo"
            element={<Protected Component={RegisterDriver} />}
          />
          <Route exact path="/home" element={<Protected Component={Main} />} />
          <Route exact path="/profile" element={<Protected Component={Profile} />} />
          <Route exact path="/campaigns" element={<Protected Component={Campaigns} />} />
          <Route exact path="/waiting" element={<Protected Component={WaitingTimer} />} />
        </Routes>
      </MainContext.Provider>
    </div>
  );
}

export default App;
