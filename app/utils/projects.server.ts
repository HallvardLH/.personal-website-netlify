import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { Project } from "./ProjectType";

// Convert `import.meta.url` to a file path
const file = fileURLToPath(import.meta.url);
const dir = path.dirname(file);

// Define the path to the JSON file
const projectsFilePath = path.join(dir, "..", "data", "projects.json");

// Function to get all projects from the JSON file
export async function getProjects(): Promise<Project[]> {
    const fileContent = fs.readFileSync(projectsFilePath, "utf8");
    const projects: Project[] = JSON.parse(fileContent);
    return projects;
}
