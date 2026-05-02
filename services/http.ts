type HttpMethod = "GET" | "POST" | "PATCH" | "DELETE" | "PUT";

const baseUrl: string = "https://api.naring.ir";

export const request = async (url: string, method: HttpMethod, body?: any) => {
  const token: string | null = localStorage.getItem("token");

  const bodyFormat: string =
    method !== "GET" && body ? JSON.stringify(body) : "";

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  try {
    const requestResponse = await fetch(`${baseUrl}/${url}`, {
      method: method,
      body: method !== "GET" ? bodyFormat : undefined,
      headers,
    });
    if (requestResponse.status === 422 || requestResponse.status === 401) {
      return { success: false };
    }
    if (requestResponse.status === 200) {
      return requestResponse.json();
    }
  } catch (err) {
    console.error("Http Request Error . . .", err);
  }
};

export const Get = (url: string) => {
  return request(url, "GET");
};

export const Post = (url: string, body: any) => {
  return request(url, "POST", body);
};
