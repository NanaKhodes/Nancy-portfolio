import styles from "./ProjectsStyles.module.css";
import Quotely from "../../assets/quotely.png";
import Counter from "../../assets/counter.png";
import Note from "../../assets/note.png";
import Toodles from "../../assets/Toodles.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Quotely}
          link="https://github.com/NanaKhodes/quote-generator"
          h3="Quotely"
          p="Quote Generator"
        />
        <ProjectCard
          src={Counter}
          link="https://github.com/NanaKhodes/counter-app"
          h3="The Counter Widget"
          p="Counter App"
        />
        <ProjectCard
          src={Toodles}
          link="https://github.com/NanaKhodes/Todo-App"
          h3="Toodles"
          p="Todo App"
        />
        <ProjectCard
          src={Note}
          link="https://github.com/NanaKhodes/Nancy-notes"
          h3="Notely"
          p="Notes App"
        />
      </div>
    </section>
  );
}

export default Projects;
