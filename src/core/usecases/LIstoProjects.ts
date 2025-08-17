import { type IProjectRepository } from "../interfaces/IProjectRepository";
import type { Project } from "../entities/Project";

export class ListProjects{
    constructor(private repository: IProjectRepository){}

    async execute(): Promise<Project[]>{
        return await this.repository.getAllProjects();
    }
}