import { ApiResponse } from '../api/request';
import { call } from 'redux-saga/effects';
import { refreshTokenAPI } from '../api/provider/auth/auth-provider';
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  getStringFromStorageGenerator,
  writeStringToStorageGenerator,
} from './local-storage';

export function* authenticatedCall(api: any, ...apiParams: any) {
  try {
    const apiResult: ApiResponse = yield call(api, ...apiParams);
    return apiResult;
  } catch (firstCallError: any) {
    if (firstCallError.statusCode === 401) {
      const refreshToken: string | null = getStringFromStorageGenerator(REFRESH_TOKEN_KEY);
      if (refreshToken) {
        try {
          const refreshTokenAPIResponse: ApiResponse = yield call(
            refreshTokenAPI,
            refreshToken,
          );
          writeStringToStorageGenerator(
            ACCESS_TOKEN_KEY,
            refreshTokenAPIResponse?.data.access_token,
          );
          writeStringToStorageGenerator(
            REFRESH_TOKEN_KEY,
            refreshTokenAPIResponse?.data.refresh_token,
          );
          const apiResult: ApiResponse = yield call(api, ...apiParams);
          return apiResult;
        } catch (secondCallError) {
          throw secondCallError;
        }
      } else {
        throw firstCallError;
      }
    } else {
      throw firstCallError;
    }
  }
}
