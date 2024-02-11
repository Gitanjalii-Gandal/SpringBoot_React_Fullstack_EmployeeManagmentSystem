import axios from 'axios';
const REST_BASE_URI='http://localhost:8081/api/employees';
export const listEmployees=()=>{
    return axios.get(REST_BASE_URI);
}

export const createEmployee=(employee)=>{
    return axios.post(REST_BASE_URI, employee);
}
export const getEmployeeById=(empId)=>{
    return axios.get(REST_BASE_URI+'/'+empId);
}

export const updateEmployee=(empId,emp)=>{
    return axios.put(REST_BASE_URI+'/'+empId,emp);
}

export const deleteEmployee=(empId)=>{
    return axios.delete(REST_BASE_URI+'/'+empId);
}