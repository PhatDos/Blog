import { SET, ADD, DELETE } from "./constants";

export const init = { job: "", jobs: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case SET:
      return { ...state, job: action.payload };
    case ADD:
      return {
        job: "",
        jobs: [...state.jobs, action.payload]
      };
    case DELETE:
      const newJobs = state.jobs.filter((value, i) => i != action.payload);
      return {
        jobs: newJobs,
        job: ""
      };
  }
  return state;
};

export default reducer;
