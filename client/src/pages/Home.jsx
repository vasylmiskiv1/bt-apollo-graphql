import Clients from '../components/Clients.jsx';
import AddClientModal from '../components/AddClientModal.jsx';
import Projects from '../components/Projects.jsx';

export default function Home() {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <AddClientModal />
      </div>
      <Projects />
      <hr />
      <Clients />
    </>
  );
}
