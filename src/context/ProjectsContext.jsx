import { createContext, useState, useContext } from "react";

const ProjectsContext = createContext();

export function ProjectsProvider({ children }) {
  const [visibleCount, setVisibleCount] = useState(4);

  return (
    <ProjectsContext.Provider value={{ visibleCount, setVisibleCount }}>
      {children}
    </ProjectsContext.Provider>
  );
}

export function useProjects() {
  return useContext(ProjectsContext);
}
