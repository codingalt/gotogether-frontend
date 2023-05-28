import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userApi } from "./services/api/userApi";
import userSlice from "./services/redux/userSlice";
import { driverCampaignApi } from "./services/api/driverCampaign";

export const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
        [driverCampaignApi.reducerPath]: driverCampaignApi.reducer,
        user: userSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([userApi.middleware,driverCampaignApi.middleware]),
});

setupListeners(store.dispatch);