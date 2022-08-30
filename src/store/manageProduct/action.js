import { httpService } from "../../core/http-service";

export const RsetStrSearch = (strSearch) => {
  return {
    type: "SEARCH",
    strSearch: strSearch,
  };
};
export const RsetType = (typeProduct) => {
  return {
    type: "TYPE_PRODUCT",
    typeProduct: typeProduct,
  };
};
export const RsetSort = (sort) => {
  return {
    type: "SORT",
    sort: sort,
  };
};
export const RsetIdProduct = (proId) => {
  return {
    type: "ID_PRODUCT",
    proId: proId,
  };
};

