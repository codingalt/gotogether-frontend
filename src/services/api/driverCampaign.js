import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const driverCampaignApi = createApi({
    reducerPath: 'driverCampaignApi',
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
    tagTypes: ['DriverCampaign'],
    endpoints: (builder) => ({
        postCampaign: builder.mutation({
            query: (data) => ({
                url: `driver/campaign`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['DriverCampaign'],
        }),
    }),
});

export const {usePostCampaignMutation} = driverCampaignApi;