import { combineReducers } from "@reduxjs/toolkit";
import homeReducer from "../Main/Home/slice.ts";
import loginReducer from "../features/Login/slice.ts";
import authSlice from "../Auth/slice.ts";
import usersSlice from "../features/Users/slice.ts"
import inquirySlice from "../features/Inquiries/slice.ts"
import ReviewSlice from "../features/Review/slice.ts";
import PackagesSlice from "../features/Packages/slice.ts";
import SignupSlice from "../features/Signup/slice.ts";
import PackageGroupsSaga from "../features/PackagesGroup/slice.ts";
import InquirySlice from "../Main/Contact/slice.ts";
import forgetPasswordSlice from "../features/ResetPassword/slice.ts";
import PackageFrontSlice from "../Main/Packages/slice.ts";
import BannerSlice from "../features/Banner/slice.ts";

export default combineReducers({
  home: homeReducer,
  login: loginReducer,
  auth: authSlice,
  users: usersSlice,
  inquiry: inquirySlice,
  review: ReviewSlice,
  packages: PackagesSlice,
  signup: SignupSlice,
  packageGroups: PackageGroupsSaga,
  Inquiry : InquirySlice,
  forgetPassword : forgetPasswordSlice,
  packageFront : PackageFrontSlice,
  banner : BannerSlice,
});
