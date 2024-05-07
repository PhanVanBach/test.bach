import axios from "axios";

const TOKEN =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImNXQjE0Zk40WGpxWm5UWVdFdnN2bCJ9.eyJnaXZlbl9uYW1lIjoiTmd1ecOqbiIsImZhbWlseV9uYW1lIjoiTmd1eeG7hW4iLCJuaWNrbmFtZSI6ImtoYWluZ3V5ZW4xMjAzIiwibmFtZSI6Ik5ndXnDqm4gTmd1eeG7hW4iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jSzdTb1E1bDJQZi1OSm9hTkpSMGRzNUtRcTdqbGwxNXQxdVhwNFdnZkw1VUtGZHp3PXM5Ni1jIiwibG9jYWxlIjoiZW4iLCJ1cGRhdGVkX2F0IjoiMjAyNC0wNS0wNFQwMzo0MjoxMi4wNjNaIiwiZW1haWwiOiJraGFpbmd1eWVuMTIwM0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6Ly9hdXRoMC5sb3ZpY29ncm91cC5jb20vIiwiYXVkIjoiamNuTDNGRXI0V1owU0w4RFNPbkFSdHFpTDFjaXAyYzQiLCJpYXQiOjE3MTQ3OTQxMzMsImV4cCI6MjA3Mzc5NDEzMywic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMDYyNTQzNDAwMTQ2MzM1NzM2MDEiLCJzaWQiOiJUbUJHWWstelBBNHhoV3NDSHNqMEVyTGp0aGxQQ1NBOCIsIm5vbmNlIjoiVWxKcVZVWmpZbms0Um5GdFRVTkxXamN4T1RaUFZ6UmxkRWRUU0VabkxtNU9jVmhNU0ZKS1VHUlpkZz09In0.DjT8Nix9UrVGSd9jKW68dg-Roqgb0nJKXHBhQapuyfIsiqg9KDv7jcz4gKD-gmV8rQ5AQExkeOjavzQcHJUavV-Z_a5Y21IlABtgYXudElGKCds_gUPHyijFjtx6xx6xKpmhHzFwNIhy93gidlS3jajbFEpKcnjSQLLAPlzwrtGT553LKs5qc1CNVJH3NmEnwljo_8CzmNavhVTUEUxh7RCpAkhppEUbF01uZouiCREpYUYoz8cN2urmWsRJHWnuY70Xf7rIjhRs4O9fSRpZWDjyaJDfDpA47JYDE2nNta6LYqYw6_YzVUPkWVwc9GNT1lhL3x408TN4z4VXcrkeQg";

export const getData = (searchString) => {
  const config = {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
    params: {
      search: searchString,
    },
  };

  return new Promise((resolve, reject) => {
    axios
      .get("https://dev-api.lovicogroup.com/api/v1/master-projects", config)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.error("Đã có lỗi khi fetch dữ liệu:", error);
        reject(error);
      });
  });
};
