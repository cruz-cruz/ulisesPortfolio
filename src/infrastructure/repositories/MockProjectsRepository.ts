// src/infrastructure/repositories/MockProjectRepository.ts

import type { Project } from "../../core/entities/Project";
import type { IProjectRepository } from "../../core/interfaces/IProjectRepository";

export class MockProjectRepository implements IProjectRepository {
  async getAllProjects(): Promise<Project[]> {
    return [
     {
         id: "1",
         title: "Go Go Academy",
         description: "Description",
         technologies: ['React', 'Angular', 'Firebase'],
         url: "https://gogoacademysv.com",
         imageUrl: "https://image.com"
     }
    ];
  }
}
