import request from "../../request";

export function loginRequestAPI(data: any) {
  console.log("login request api");
  console.log("data = ", data);
  return request({
    url: "/login",
    method: "POST",
    data,
  });
}
