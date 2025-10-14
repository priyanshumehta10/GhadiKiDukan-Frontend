import { put, takeLatest, call } from "redux-saga/effects";
import type { SagaIterator } from "redux-saga";
import {
  fetchHomeDataRequest,
  fetchHomeDataSuccess,
  fetchHomeDataFailure,
  fetchReviewsRequest,
  fetchReviewsSuccess,
  fetchReviewsFailure,
  fetchHomeImageRequest,
  fetchHomeImageSuccess,
  fetchHomeImageFailure,
  fetchByTagRequest,
  fetchByTagSuccess,
  fetchByTagFailure,
} from "./slice";
import { getHomeData, getReviews, getTagImages, getTagWiseData } from "../../service/api";

function* fetchHomeDataSaga(): SagaIterator {
  // ✅ return type
  try {
    const data: any = yield call(getHomeData);
    yield put(fetchHomeDataSuccess(data));
  } catch (error: any) {
    yield put(fetchHomeDataFailure(error.message || "Something went wrong"));
  }
}

function* fetchHomeImageSaga(): SagaIterator {
  // ✅ return type
  try {
    const data: any = yield call(getTagImages);
    yield put(fetchHomeImageSuccess(data));
  } catch (error: any) {
    yield put(fetchHomeImageFailure(error.message || "Something went wrong"));
  }
}

function* fetchByTagSaga(action: {
  type: string;
  payload: string;
}): SagaIterator {
  // ✅ return type
  try {
    const data: any = yield call(getTagWiseData,action.payload);
    yield put(fetchByTagSuccess(data));
  } catch (error: any) {
    yield put(fetchByTagFailure(error.message || "Something went wrong"));
  }
}

function* fetchReviewsSaga(): SagaIterator {
  // ✅ return type
  try {
    const data: any = yield call(getReviews);
    console.log("data in saga", data);

    yield put(fetchReviewsSuccess(data));
  } catch (error: any) {
    yield put(fetchReviewsFailure(error.message || "Something went wrong"));
  }
}

export default function* homeSaga(): SagaIterator {
  yield takeLatest(fetchHomeDataRequest.type, fetchHomeDataSaga);
  yield takeLatest(fetchHomeImageRequest.type, fetchHomeImageSaga);
  yield takeLatest(fetchReviewsRequest.type, fetchReviewsSaga);
  yield takeLatest(fetchByTagRequest.type, fetchByTagSaga);
}
