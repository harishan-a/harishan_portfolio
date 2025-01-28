/**
 * Interface for project data structure
 */
export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  github: string;
}

/**
 * Interface for experience data structure
 */
export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  highlights?: string[];
}

/**
 * Interface for skills data structure
 */
export interface Skills {
  languages: string[];
  tools: string[];
  areas: string[];
} 