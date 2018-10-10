import axios from "axios";
const api = "http://rest.learncode.academy/api";

const createChartType = data => {
  console.log('data', data);
  return 'created successfully';
  // return axios({
  //   method: 'post',
  //   url: '/create-chart',
  //   data
  // });
};

export {
  createChartType
};
