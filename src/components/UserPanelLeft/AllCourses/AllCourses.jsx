import React, { useEffect, useState } from "react";
import GetApi from "../../../core/Services/api/GetApi/GetApi";
import UserPanelTable from "../../UserPanelTable/UserPanelTable";

const AllCourses = ({ location, handelAddToMyCourses }) => {
  const [Datas, setDatas] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    //call api in this function
    const dataGetter = async () => {
      const res = await GetApi("http://localhost:5000/api/course/getall");
      setDatas(res);
      setTimeout(() => {
        setIsPending(false);
      }, 1000);
    };

    dataGetter();
  }, [isPending]);

  return (
    <UserPanelTable
      location={location}
      handelAddToMyCourses={handelAddToMyCourses}
      Datas={Datas}
      isPending={isPending}
      icon={"bi-plus-circle-fill"}
      popUpText='می خواهید این دوره را اضافه کنید؟'
      titleText='دوره های قابل ثبت نام در سایت : '
    />
  );
};

export default AllCourses;
