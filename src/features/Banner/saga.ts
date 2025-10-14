// features/Banner/saga.ts
import { call, put, takeLatest } from "redux-saga/effects";
import type { SagaIterator } from "redux-saga";
import {
  fetchBannerRequest,
  fetchBannerSuccess,
  fetchBannerFailure,
  createBannerRequest,
  createBannerSuccess,
  createBannerFailure,
  updateBannerRequest,
  updateBannerSuccess,
  updateBannerFailure,
  deleteBannerRequest,
  deleteBannerSuccess,
  deleteBannerFailure
} from "./slice";

import { getBannersAPI, createBannerAPI, updateBannerAPI, deleteBannerAPI } from "../../service/api";

function* fetchBannerSaga(): SagaIterator {
  try {
    const data: any = yield call(getBannersAPI);
    yield put(fetchBannerSuccess(data));
  } catch (error: any) {
    yield put(fetchBannerFailure(error.message || "Something went wrong"));
  }
}

function* createBannerSaga(action: { payload: FormData; type: string }): SagaIterator {
  try {
    const data: any = yield call(createBannerAPI, action.payload);
    yield put(createBannerSuccess(data));
  } catch (error: any) {
    yield put(createBannerFailure(error.message || "Failed to create banner"));
  }
}

function* updateBannerSaga(action: { payload: { id: string; formData: FormData }; type: string }): SagaIterator {
  try {
    const data: any = yield call(updateBannerAPI, action.payload.id, action.payload.formData);
    yield put(updateBannerSuccess(data));
  } catch (error: any) {
    yield put(updateBannerFailure(error.message || "Failed to update banner"));
  }
}

function* deleteBannerSaga(action: { payload: string; type: string }): SagaIterator {
  try {
    yield call(deleteBannerAPI, action.payload);
    yield put(deleteBannerSuccess(action.payload));
  } catch (error: any) {
    yield put(deleteBannerFailure(error.message || "Failed to delete banner"));
  }
}

export default function* BannerSaga(): SagaIterator {
  yield takeLatest(fetchBannerRequest.type, fetchBannerSaga);
  yield takeLatest(createBannerRequest.type, createBannerSaga);
  yield takeLatest(updateBannerRequest.type, updateBannerSaga);
  yield takeLatest(deleteBannerRequest.type, deleteBannerSaga);
}
