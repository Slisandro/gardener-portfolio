import BookComponent from "../../components/book/book.component";
import PrincipalComponent from "../../components/principal/principal.component";
import RecentProjectsComponent from "../../components/recent-projects/recent-projects.component";
import ServicesComponent from "../../components/services/services.component";

function Home() {
  return (
    <>
      <PrincipalComponent />
      <ServicesComponent />
      <RecentProjectsComponent />
      <BookComponent />
    </>
  );
}

export default Home;
