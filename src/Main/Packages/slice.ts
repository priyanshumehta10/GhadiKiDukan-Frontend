import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PackageGroupState {
  data: any;
  loadingPck: boolean;
  error: string | null;
  PackageGroupLoading: boolean;
  PackageGroupError: any;
  PackageGroupdata: any;
  PackagesLoading: boolean;
  PackagesError: string | null;
  Packagesdata: any;
  PackageDetailsLoading: boolean;
  PackageDetailsError: string | null;
  PackageDetailsdata: any;
  createOrderLoading: boolean;
  createOrderError: string | null;
  createOrderdata: any;
  confirmOrderLoading: boolean;
  confirmOrderError: string | null;
  confirmOrderdata: any;
  filterPackageGroupLoading: boolean;
  filterPackageGroupError: string | null;
  filterPackageGroupdata: any;
  confirmedOrder: boolean;
  searchPackageLoading: boolean;
  searchPackageError: string | null;
  searchPackagedata: any;
}

const initialState: PackageGroupState = {
  data: null,
  loadingPck: false,
  error: null,
  PackageGroupLoading: false,
  PackageGroupError: null,
  PackageGroupdata: null,
  PackagesLoading: false,
  PackagesError: null,
  Packagesdata: null,
  PackageDetailsLoading: false,
  PackageDetailsError: null,
  PackageDetailsdata: null,
  createOrderLoading: false,
  createOrderError: null,
  createOrderdata: null,
  confirmOrderLoading: false,
  confirmOrderError: null,
  confirmOrderdata: null,
  filterPackageGroupLoading: false,
  filterPackageGroupError: null,
  filterPackageGroupdata: null,
  confirmedOrder: false,
  searchPackageLoading: false,
  searchPackageError: null,
  searchPackagedata: null,
};

const PackageGroupSlice = createSlice({
  name: "home",
  initialState,
  reducers: {

    fetchPackagesRequest: (state) => {
      state.PackagesLoading = true;
      state.PackagesError = null;
      state.Packagesdata = null;
    },
    fetchPackagesRequestSuccess: (state, action: PayloadAction<any>) => {
      state.PackagesLoading = false;
      state.PackagesError = null;
      state.Packagesdata = action.payload;
    },
    fetchPackagesRequestFailure: (
      state,
      action: PayloadAction<string>
    ) => {
      state.PackagesLoading = false;
      state.PackagesError = action.payload;
      state.Packagesdata = null;
    },
    fetchPackageDetailsRequest: (state, _action: PayloadAction<string>) => {
      state.PackageDetailsLoading = true;
      state.PackageDetailsError = null;
      state.PackageDetailsdata = null;
    },
    fetchPackageDetailsSuccess: (state, action: PayloadAction<any>) => {
      state.PackageDetailsLoading = false;
      state.PackageDetailsError = null;
      state.PackageDetailsdata = action.payload;
    },
    fetchPackageDetailsFailure: (state, action: PayloadAction<string>) => {
      state.PackageDetailsLoading = false;
      state.PackageDetailsError = action.payload;
      state.PackageDetailsdata = null;
    },
    searchPackageRequest: (state, _action: PayloadAction<string>) => {
      state.searchPackageLoading = true;
      state.searchPackageError = null;
      state.searchPackagedata = null;
    },
    searchPackageRequestSuccess: (state, action: PayloadAction<any>) => {
      state.searchPackageLoading = false;
      state.searchPackageError = null;
      state.searchPackagedata = action.payload;
    },
    searchPackageRequestFailure: (state, action: PayloadAction<string>) => {
      state.searchPackageLoading = false;
      state.searchPackageError = action.payload;
      state.searchPackagedata = null;
    },
  },
});

export const {
  fetchPackagesRequest,
  fetchPackagesRequestSuccess,
  fetchPackagesRequestFailure,
  fetchPackageDetailsRequest,
  fetchPackageDetailsSuccess,
  fetchPackageDetailsFailure,
  searchPackageRequest,
  searchPackageRequestSuccess,
  searchPackageRequestFailure,
} = PackageGroupSlice.actions;

export default PackageGroupSlice.reducer;
