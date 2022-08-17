import { useEffect, useState } from "react";
import GetApi from "./GetApi";

const DataGetter = (url, dependency) => {
  const [datas, setDatas] = useState(null);
  //ispending

  useEffect(() => {
    const getter = async () => {
      const res = await GetApi(url);
      setDatas(res);
    };
    getter();
  }, [dependency]);

  return datas;
};

export default DataGetter;
