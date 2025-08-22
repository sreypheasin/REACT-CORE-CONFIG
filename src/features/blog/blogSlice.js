import { apiSlice } from "../api/apiSlice";

const blogSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getAllBlog: build.query({
      query: () => ({
        url: "/blogs"
      })
    })
  })
});

export const { useGetAllBlogQuery } = blogSlice;
