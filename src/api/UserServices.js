import axios from "../config/axios";
import { API_ENDPOINT_URL } from "../config/env";

const fetchList = async (url, resource) => {
  try {
    const res = await axios.get(url, resource);
    const { data } = res.data;
    if (resource === "users") {
      const provideObject = { data: data[resource], total: data.totalUsers };
      return provideObject;
    } else {
      console.log(data);
      return { data: data, total: data.length };
    }
  } catch (error) {
    console.log(error);
  }
};

export const getList = (resource, params) => {
  const { page: pageNumber, perPage: pageSize } = params.pagination;
  const { field, order } = params.sort;
  //   const query = {
  //     sort: JSON.stringify([field, order]),
  //     range: JSON.stringify([
  //       (pageNumber - 1) * pageSize,
  //       pageNumber * pageSize - 1,
  //     ]),
  //     filter: JSON.stringify(params.filter),
  //   };
  console.log(params.filter);
  const listType = resource.charAt(0).toUpperCase() + resource.slice(1);
  console.log(listType);
  const url = `${API_ENDPOINT_URL}/${listType}?pageNumber=${pageNumber}&pageSize=${pageSize}`;
  return fetchList(url, resource);
};
