import styles from "./ProjectsStyles.module.css";
import Quotely from "../../assets/quotely.png";
import Counter from "../../assets/counter.png";
import Zeus from "../../assets/thunderboolt.jpg"
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
          src={Zeus}
          link="https://github.com/NanaKhodes/movie_app"
          h3="Zeus"
          p="Zeus Movie App"
        />
      </div>
    </section>
  );
}

export default Projects;
