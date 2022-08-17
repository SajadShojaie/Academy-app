import _ from "lodash";

const PaginateMetode = (items, currentPage, pageSize) => {
  const starter = (currentPage - 1) * pageSize;
  return _(items).slice(starter).take(pageSize).value();
};

export default PaginateMetode;
