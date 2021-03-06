import {apiAsync, apiSync} from "@/api/axioscommon";

export const getProblem = (params, callback) =>{
    return apiAsync("get", "/api/v1/problems", params, callback)
}

export const getProblemDetail = (params, callback) => {
    return apiAsync("get", "/api/v1/problems/"+params, {}, callback)
}

export const getTotal = (params, callback) => {
    return apiAsync("get", "/api/v1/data/count", {}, callback)
}

export const AddProblem = (param, callback) => {
    return apiAsync("post", "/api/v1/problems", param, callback)

}