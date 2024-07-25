import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_GLOBAL_CONFIG, API_METHOD } from '../constants/api.ts';
import {
  UserLoginReguest,
  UserLoginResponse,
  UserRegisterReguest,
  UserRegisterResponse,
  UserForgetPasswordReguest,
  UserForgetPasswordResponse
} from '../../types/apis/user.types.ts';

const USER_URLS = {
  login: 'auth/login/',
  profile: 'auth/profile/',
  register: 'auth/register/',
  googleAuth: 'auth/google/',
  forgetPassword: 'auth/forget-password/'
};

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery(API_GLOBAL_CONFIG),
  endpoints: (builder) => ({
    login: builder.mutation<UserLoginResponse, UserLoginReguest>({
      query: (requestBody) => ({
        url: USER_URLS.login,
        method: API_METHOD.post,
        body: requestBody
      })
    }),
    register: builder.mutation<UserRegisterResponse, UserRegisterReguest>({
      query: (requestBody) => ({
        url: USER_URLS.register,
        method: API_METHOD.post,
        body: requestBody
      })
    }),
    googleRegister: builder.mutation<UserRegisterResponse, UserRegisterReguest>({
      query: (requestBody) => ({
        url: USER_URLS.googleAuth,
        method: API_METHOD.post,
        body: requestBody
      })
    }),
    forgetPassword: builder.mutation<
      UserForgetPasswordResponse,
      UserForgetPasswordReguest
    >({
      query: (requestBody) => ({
        url: USER_URLS.forgetPassword,
        method: API_METHOD.post,
        body: requestBody
      })
    })
  })
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGoogleRegisterMutation,
  useForgetPasswordMutation
} = userApi;
