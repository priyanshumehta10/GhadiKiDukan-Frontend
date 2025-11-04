import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPackagesRequest } from "./slice";
import type { RootState } from "../../redux/store";
import PackageGroupList from "./components/PackageGroupList";

export default function Packages() {
  const fetchData = useRef(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!fetchData.current) {
      fetchData.current = true;
      dispatch(fetchPackagesRequest());
    }
  }, [dispatch]);

  const { PackageGroupLoading, PackageGroupdata, Packagesdata, searchPackagedata, searchPackageLoading} = useSelector((state: RootState) => state.packageFront);
  const { dataFilter, loadingFilter} = useSelector((state: RootState) => state.home);
  console.log(PackageGroupLoading,"PackageGroupdata :", PackageGroupdata,"searchPackagedata :", searchPackagedata,"dataFilter :",dataFilter,"Packagesdata :", Packagesdata );

  let displayData;

  if (searchPackagedata) {
    displayData=searchPackagedata?.products;
  }else if (dataFilter) {
    displayData=dataFilter?.products;
  }else{
    displayData=Packagesdata;
  }

  return (
    <div>
       {(PackageGroupLoading || loadingFilter || searchPackageLoading) ? (
        <div className="h-screen flex items-center justify-center bg-gray-100">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        </div>
      ) : (
      <PackageGroupList data={displayData} />
      )}
    </div>
  )
}
