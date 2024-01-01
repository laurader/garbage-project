import request from "../../request";

export function registrationRequestAPI(data: any) {
  console.log("registration request api");
  console.log("data = ", data);
  return request({
    url: "/posts",
    method: "POST",
    data,
  });
}
