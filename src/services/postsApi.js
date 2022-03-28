import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({ query: () => "posts" }),
    getPost: builder.query({ query: (id) => `posts/${id}` }),
    addPost: builder.mutation({
      query: (newPost) => ({
        url: "posts",
        method: "POST",
        body: newPost,
      }),
    }),
    editPost: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `posts/${id}`,
        method: "PUT",
        body: rest,
      }),
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `posts/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostQuery,
  useAddPostMutation,
  useEditPostMutation,
  useDeletePostMutation,
} = postsApi;
