import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
export const campaignsApi = createApi({
    reducerPath: 'campaignsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://gotogether1.vercel.app/',
        prepareHeaders: async (headers, query) => {
            const authToken = localStorage.getItem('jwtoken_auth');
            if (authToken) {
                headers.set('authorization', `Bearer ${authToken}`);
            }
            return headers;
        }
    }),
    tagTypes: ['Campaigns'],
    endpoints: (builder) => ({
        getCampaigns: builder.query({
            query: () => `campaigns`,
          }),
    }),
});

export const {useGetCampaignsQuery} = campaignsApi;