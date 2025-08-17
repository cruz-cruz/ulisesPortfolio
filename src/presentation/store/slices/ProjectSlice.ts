import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { Project } from "../../../core/entities/Project";
import { MockProjectRepository } from "../../../infrastructure/repositories/MockProjectsRepository";

export const fetchProjects = createAsyncThunk("projects/fetch", async()=>{
    const repo = new MockProjectRepository();
    return await repo.getAllProjects();
})

interface ProjectState{
    items: Project[];
    loading: boolean;
}

const initialState: ProjectState = {
    items: [],
    loading: false,
}

const projectSlice = createSlice({
    name: "projects",
    initialState,
    extraReducers(builder) {
        builder.addCase(fetchProjects.pending, state => {
            state.loading = true;
        }).addCase(fetchProjects.fulfilled, (state, action)=>{
            state.loading = false;
            state.items = action.payload;
        }) .addCase(fetchProjects.rejected, state => {
        state.loading = false
      })
    },
    reducers: {}
})

export default projectSlice.reducer;