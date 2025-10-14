import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface HomeState {
  data: any;
  loadingPck: boolean;
  error: string | null; 
  ReviewsLoading: boolean;
  ReviewsError: any; 
  Reviewsdata: any;  
  dataImage?: any; 
  dataFilter?: any;
  loadingFilter?: boolean;
}

const initialState: HomeState = {
  data: null,
  loadingPck: false,
  error: null,
    ReviewsLoading: false,
  ReviewsError: null,
  Reviewsdata: null,
  dataImage: null,
  dataFilter: null,
  loadingFilter: false,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    fetchHomeDataRequest: (state) => {
      state.loadingPck = true;
      state.error = null; 
      state.data = null; 
    },
    fetchHomeDataSuccess: (state, action: PayloadAction<any>) => {
      state.loadingPck = false;
      state.data = action.payload;
      state.error = null;
    },
    fetchHomeDataFailure: (state, action: PayloadAction<string>) => {
      state.loadingPck = false;
      state.error = action.payload;  
      state.data = null; 
    },
    fetchHomeImageRequest: (state) => {
      state.loadingPck = true;
      state.error = null; 
      state.dataImage = null; 
    },
    fetchHomeImageSuccess: (state, action: PayloadAction<any>) => {
      state.loadingPck = false;
      state.dataImage = action.payload;
      state.error = null;
    },
    fetchHomeImageFailure: (state, action: PayloadAction<string>) => {
      state.loadingPck = false;
      state.error = action.payload;  
      state.dataImage = null; 
    },
    fetchByTagRequest: (state, _action: PayloadAction<any>) => {
      state.loadingFilter = true;
      state.error = null; 
      state.dataFilter = null; 
    },
    fetchByTagSuccess: (state, action: PayloadAction<any>) => {
      state.loadingFilter = false;
      state.dataFilter = action.payload;
      state.error = null;
    },
    fetchByTagFailure: (state, action: PayloadAction<string>) => {
      state.loadingFilter = false;
      state.error = action.payload;  
      state.dataFilter = null; 
    },
     fetchReviewsRequest: (state) => {
      state.ReviewsLoading = true;
      state.ReviewsError = null; 
      state.Reviewsdata = null; 
    },
    fetchReviewsSuccess: (state, action: PayloadAction<any>) => {
      state.ReviewsLoading = false;
      state.Reviewsdata = action.payload.reviews;
      state.ReviewsError = null;
    },
    fetchReviewsFailure: (state, action: PayloadAction<string>) => {
      state.ReviewsLoading = false;
      state.ReviewsError = action.payload;  
      state.Reviewsdata = null; 
    },
  },
});

export const {
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
} = homeSlice.actions;

export default homeSlice.reducer;
