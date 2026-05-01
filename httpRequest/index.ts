type HttpMethod = "GET" | "POST" | "PATCH" | "DELETE" | "PUT";

const baseUrl: string = "https://naring.ir";

export const request = async (url: string, method: HttpMethod, body?: any) => {
  const token: string | null = localStorage.getItem("token");
  const bodyFormat: string = body ? JSON.stringify(body) : "";

  try {
    const requestResponse = await fetch(`${baseUrl}/${url}`, {
      method: method,
      body: bodyFormat,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return requestResponse;
  } catch (err) {
    console.error("Http Request Error . . .", err);
  }
};

export const Get = (url: string): Promise<T> => {
  return request(url, "GET");
};
