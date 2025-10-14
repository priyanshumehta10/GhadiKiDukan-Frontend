// features/Banner/slice.ts
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


interface BannerState {
  data: any[];
  loading: boolean;
  error: string | null;
  created: boolean;
}

const initialState: BannerState = {
  data: [],
  loading: false,
  error: null,
  created: false,
};

const BannerSlice = createSlice({
  name: "banner",
  initialState,
  reducers: {
    fetchBannerRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchBannerSuccess: (state, action: PayloadAction<any[]>) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchBannerFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    createBannerRequest: (state, _action: PayloadAction<FormData>) => {
      state.loading = true;
      state.error = null;
      state.created = false;
    },
    createBannerSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.data = [action.payload, ...state.data];
      state.created = true;
    },
    createBannerFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
      state.created = false;
    },

    updateBannerRequest: (state, _action: PayloadAction<{ id: string; formData: FormData }>) => {
      state.loading = true;
      state.error = null;
    },
    updateBannerSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.data = state.data.map(b => b._id === action.payload._id ? action.payload : b);
    },
    updateBannerFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    deleteBannerRequest: (state, _action: PayloadAction<string>) => {
      state.loading = true;
      state.error = null;
    },
    deleteBannerSuccess: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.data = state.data.filter(b => b._id !== action.payload);
    },
    deleteBannerFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    resetCreated: (state) => {
      state.created = false;
    }
  }
});

export const {
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
  deleteBannerFailure,
  resetCreated
} = BannerSlice.actions;

export default BannerSlice.reducer;
