import {api} from "./axiosInstance.ts";
import {apiFile} from "./axiosInstance.ts";
export async function getHomeData() {
  const response = await api.get("/api/product/?limit=10"); 
  return response.data;
}

export async function getReviews() {
  const response = await api.get("/api/review/?limit=4"); 
  console.log("response",response);
  
  return response.data;
}

export async function CreateInquiryData(data : any) {
  const response = await api.post("/api/inquiries/",data);     
  return response.data;
}

export const loginUser = async (email: string, password: string) => {
  const response = await api.post("/api/auth/login", { email, password });
  return response.data;
};

export const signupUser = async (email: string, password: string, name:string) => {
  const response = await api.post("/api/auth/signup", { email, password,name });
  return response.data;
};

export const checkLoginAPI = async () => {
  const response = await api.get("/api/auth/me");
  return response.data;
};

export const checkLogOutAPI = async () => {
  const response = await api.post("/api/auth/logout");
  return response.data;
};

export async function getUsersData() {
  const response = await api.get("/api/auth/admin/users"); 
  return response.data;
}

export async function deleteUserAPI(id:string) {
  const response = await api.get(`/api/auth/admin/users/${id}`); 
  return response.data;
}

export async function updateUserAPI(
  name: string,
  email: string,
  role: string,
  id: string
) {
  const response = await api.put(`/api/auth/admin/${id}`, { name, email, role });
  return response.data;
}

export async function getInquiryData() {
  const response = await api.get("/api/inquiries/admin/"); // adjust endpoint
  return response.data.data; // extract data array
}

export async function deleteInquiryAPI(id:string) {
  const response = await api.delete(`/api/inquiries/admin/${id}`); 
  return response.data;
}

export async function getDashboardAPI() {
  const response = await api.get(`/api/admin/dashboard`); 
  return response.data;
}


export async function getReviewData() {
  const response = await api.get("/api/review"); 
  return response.data.reviews; 
}

export async function deleteReviewAPI(id:string) {
  const response = await api.delete(`/api/review/admin/${id}`); 
  return response.data;
}


export async function CreateforgetPasswordData(data: any) {
  const response = await api.post("/api/auth/forgot-password",data); 
  return response.data; 
}

export async function ResetPasswordData(data: any) {
  const response = await api.post("/api/auth/reset-password",data); 
  return response.data; 
}

export async function CreateReviewData(data: any) {
  const response = await apiFile.post("/api/review/admin",data); 
  return response.data.reviews; 
}

export async function getPackagesData() {
  const response = await api.get("/api/product"); 
  return response.data; 
}

export async function getTagData() {
  const response = await api.get("/api/productGroup/tags/all"); 
  return response.data.tags; 
}

export async function getTagImages() {
  const response = await api.get("/api/productGroup/tags/images"); 
  return response.data.images; 
}

export async function getTagWiseData(tag:string) {
  const response = await api.get(`/api/productGroup/Tag?q=${tag}`); 
  return response.data; 
}

export async function deletePackageAPI(id:string) {
  const response = await api.delete(`/api/product/admin/${id}`); 
  return response.data;
}

export async function createPackageData(data: any) {
  const response = await apiFile.post("/api/product/admin/",data); 
  return response.data; 
}

export async function getPackageData(id:string) {
  const response = await api.get(`/api/product/${id}`); 
  return response.data; 
}

export async function editPackageData(updateData: FormData) {
  const id = updateData.get("_id"); 
  const response = await apiFile.put(`/api/product/admin/${id}`, updateData);
  return response.data;
}

export async function getPackageGroupsData() {
  const response = await api.get(`/api/productGroup/`); 
  return response.data; 
}

export async function getFilterPackageGroupsData(data:any) {
  const response = await api.post(`/api/productGroup/Tag`,data); 
  return response.data; 
}

export async function getPackages(){
  const response = await api.get(`api/product`)
    return response.data; 
}

export async function searchPackageApi(search:string){
  const response = await api.get(`api/product/search?q=${search}`)
    return response.data; 
}

export async function getPackageDetailsData(id:string){
  const response = await api.get(`api/product/${id}`)
    return response.data; 
}

export async function getPackageGroupData(id:string) {
  const response = await api.get(`/api/productGroup/${id}`); 
  return response.data; 
}

export async function createPackageGroupData(data: any) {
  const response = await apiFile.post("/api/productGroup/admin/",data); 
  return response.data; 
}

export async function deletePackageGroupAPI(id:string) {
  const response = await api.delete(`/api/productGroup/admin/${id}`); 
  return response.data;
}

export async function editPackageGroupData(updateData: FormData) {
const id = updateData.get("packageIds") as string;
updateData.delete("packageIds");


  // Send request with ID in URL
  const response = await apiFile.put(`/api/productGroup/admin/${id}`, updateData);

  return response.data;
}



export async function createOrder(data:any) {
  const response = await api.post(`/api/order/createOrder`,data); 
  return response.data;
}

export async function confirmOrder(data:any) {
  const response = await api.post(`/api/order/confirmPayment`,data); 
  return response.data;
}

export async function getMyOrdersData(id:any){
  const response = await api.get(`/api/order/${id}`)
    return response.data; 
}

export async function payRemaining(data:any) {
  const response = await api.post(`/api/order/remainPayment/${data}`); 
  return response.data;
}

export async function getAdminOrdersData(){
  const response = await api.get(`/api/order/admin/get`)
    return response.data; 
}

export async function CancelRequest(data:any) {
  const response = await api.post(`/api/order/cancelRequest`,data); 
  return response.data;
}

export async function confirmCancel(data:any) {
  const response = await api.post(`/api/order/cancelConfirm`,data); 
  return response.data;
}

export const getBannersAPI = async () => {
  const res = await api.get("/api/banners");
  return res.data;
};

export const createBannerAPI = async (formData: FormData) => {
  const res = await api.post("/api/banners", formData);
  return res.data;
};

export const updateBannerAPI = async (id: string, formData: FormData) => {
  const res = await api.put(`/api/banners/${id}`, formData);
  return res.data;
};

export const deleteBannerAPI = async (id: string) => {
  const res = await api.delete(`/api/banners/${id}`);
  return res.data;
};
