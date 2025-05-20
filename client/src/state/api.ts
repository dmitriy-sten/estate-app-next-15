import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { fetchAuthSession, getCurrentUser } from "aws-amplify/auth";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  }),
  reducerPath: "api",
  tagTypes: [],
  endpoints: (build) => ({

    getAuthUser: build.query<User>({
      queryFn: async (_, _queryApi, _extraOptions, fetchWithBQ) => {
        try {

          const session = await fetchAuthSession()
          const { idToken } = session.tokens ?? {}
          const user = await getCurrentUser()
          const userRole = idToken?.payload['custom:role'] as string


          const endpoint =
            userRole === 'manager' ?
              `/manager/${user.userId}` :
              `/tenants/${user.userId}`
        }
        catch (error) {

        }
      }
    })

  }),
});

export const { } = api;
