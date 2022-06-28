import axios from "../config/axios";
import { API_ENDPOINT_URL } from "../config/env";

const modifyResource = (text) => text.charAt(0).toUpperCase() + text.slice(1);

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
  const listType = modifyResource(resource);
  console.log(listType);
  const url = `${API_ENDPOINT_URL}/${listType}?pageNumber=${pageNumber}&pageSize=${pageSize}`;
  return fetchList(url, resource);
};

// ////////////////////////////////////////////////
//////////////////// UPDATE

// export const updateOne = (resource, params) =>
//   httpClient(`${apiUrl}/${resource}/${params.id}`, {
//     method: "PUT",
//     body: JSON.stringify(params.data),
//   }).then(({ json }) => ({ data: json }));

const updateRecord = async (url, body) => {
  try {
    const res = await axios.put(url, body);

    console.log(res.status);
    return { data: body };
  } catch (error) {
    console.log(error);
  }
};

export const updateOne = (resource, params) => {
  const listType = modifyResource(resource);
  console.log(params.data);
  const body = params.data;
  body.updateBy = params.id;
  const url = `${API_ENDPOINT_URL}/${listType}/${params.id}`;
  return updateRecord(url, body);
};
