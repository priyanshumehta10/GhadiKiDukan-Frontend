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

  const { PackageGroupLoading, PackageGroupdata, Packagesdata } = useSelector((state: RootState) => state.packageFront);
  console.log(PackageGroupLoading, PackageGroupdata);

  return (
    <div>
      <PackageGroupList data={Packagesdata} />
    </div>
  )
}
