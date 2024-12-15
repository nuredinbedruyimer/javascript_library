export enum HtteRequesttatus {
  LOADING = "Loading",
  SUCCESS = "Success",
  ERROR = "Failure",
}

export interface Post {
  userId: string | number;
  id: string | number;
  title: string;
  body: string;
}
export type ApiResponse = {
  status: HtteRequesttatus;
  data?: Post[];
  error?: string;
};

export const fetchPosts = async (): Promise<ApiResponse> => {
  let apiResponse: ApiResponse = {
    status: HtteRequesttatus.LOADING,
  };

  try {
    let response = await fetch("https://jsonplaeholder.typicode.com/posts");
    let data = await response.json();

    apiResponse.data = data ? (data as Post[]) : [];
    apiResponse.status = response.ok
      ? HtteRequesttatus.SUCCESS
      : HtteRequesttatus.ERROR;

    return apiResponse;
  } catch (error) {
    apiResponse.error = `Error : ${error}`;
    apiResponse.data = [];
    apiResponse.status = HtteRequesttatus.ERROR;
    return apiResponse;
  }
};
export let add = (a: number, b: number): number => {
  return a + b;
};
