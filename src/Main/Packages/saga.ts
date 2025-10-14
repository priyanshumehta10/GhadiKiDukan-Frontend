import { put, takeLatest, call } from "redux-saga/effects";
import type { SagaIterator } from "redux-saga";
import {
  fetchPackagesRequest,
  fetchPackagesRequestSuccess,
  fetchPackagesRequestFailure,
  fetchPackageDetailsRequest,
  fetchPackageDetailsSuccess,
  fetchPackageDetailsFailure,
  searchPackageRequest,
  searchPackageRequestSuccess,
  searchPackageRequestFailure,
} from "./slice";
import {
  getPackages,
  getPackageDetailsData,
  searchPackageApi
} from "../../service/api";



function* fetchPackagesSaga(): SagaIterator {
  try {

    const data: any = yield call(getPackages);
    console.log("data in saga", data);

    yield put(fetchPackagesRequestSuccess(data));
  } catch (error: any) {
    yield put(
      fetchPackagesRequestFailure(
        error.message || "Something went wrong"
      )
    );
  }
}

function* fetchPackagesDetailsSaga(action: {
  type: string;
  payload: string;
}): SagaIterator {
  try {
    const id = action.payload;

    const data: any = yield call(getPackageDetailsData, id);
    console.log("data in saga", data);

    yield put(fetchPackageDetailsSuccess(data));
  } catch (error: any) {
    yield put(
      fetchPackageDetailsFailure(error.message || "Something went wrong")
    );
  }
}

function* searchPackage(action: {
  type: string;
  payload: string;
}): SagaIterator {
  try {
    const search = action.payload;

    const data: any = yield call(searchPackageApi, search);
    console.log("data in saga", data);

    yield put(searchPackageRequestSuccess(data));
  } catch (error: any) {
    yield put(
      searchPackageRequestFailure(error.message || "Something went wrong")
    );
  }
}


export default function* homeSaga(): SagaIterator {
  yield takeLatest(fetchPackagesRequest.type, fetchPackagesSaga);
  yield takeLatest(fetchPackageDetailsRequest.type, fetchPackagesDetailsSaga);
  yield takeLatest(searchPackageRequest.type, searchPackage);
}
