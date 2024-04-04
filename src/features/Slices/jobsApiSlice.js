import { JOBS_URL } from "../../url/baseUrl";
import { apiSlice } from "../Api/apiSlice";

const jobsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //
    getJobs: builder.query({
      query: () => JOBS_URL,
      providesTags: ["Job"],
    }),
    //
    getJob: builder.query({
      query: (id) => `/api/jobs/${id}`,
      providesTags: ["Job"],
    }),
    //
    addJob: builder.mutation({
      query: (data) => ({
        url: JOBS_URL,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Job"],
    }),
    //
    editJob: builder.mutation({
      query: (data) => ({
        url: `/api/jobs/${data.id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Job"],
    }),
    deleteJob: builder.mutation({
      query: (id) => ({
        url: `${JOBS_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Job"],
    }),
  }),
});

export const {
  useGetJobsQuery,
  useGetJobQuery,
  useAddJobMutation,
  useEditJobMutation,
  useDeleteJobMutation,
} = jobsApiSlice;
