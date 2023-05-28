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
import { useMemo, useState } from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import MainContext from "./components/Context/MainContext";
import Protected from "./components/Protected/Protected";
import Sidebar from "./components/Dashboard/Sidebar/Sidebar";
import Sidebar2 from "./components/Dashboard/Sidebar/Sidebar2";

function App() {
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
        </Routes>
      </MainContext.Provider>
    </div>
  );
}

export default App;
