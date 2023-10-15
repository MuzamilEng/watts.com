import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const storeApi = createApi({
    reducerPath: 'storeApi',
    baseQuery: fetchBaseQuery({ baseUrl: ' http://localhost:5000/api/v1' }),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => `/auth/login`,
        }),
        // addUser: builder.mutation({
        //     query: (data) => ({
        //         url: '/products/uploads',
        //         method: 'POST',
        //         body: data,
        //     }),
        // }),
        addUser: builder.mutation({
            query: (data) => ({
                url: '/auth/register',
                method: 'POST',
                body: data,
            }),
        }),
        loginUser: builder.mutation({
            query: (data) => ({
                url: '/auth/login',
                method: 'POST',
                body: data,
            }),
        }),
        editUser: builder.mutation({
            query: ({ userID, data }) => ({
                url: `/uploads${userID}`,
                method: 'PUT',
                body: data,
            })
        }),
        deleteUser: builder.mutation({
            query: (userID) => ({
                url: `/uploads${userID}`,
                method: 'DELETE',                
            })
        })
    })
})

export const {
    useGetUsersQuery,
    useAddUserMutation,
    useEditUserMutation,
    useDeleteUserMutation,
    useLoginUserMutation
} = storeApi