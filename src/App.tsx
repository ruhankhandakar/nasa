import CardSkeleton from '@components/CardSkeleton';
import NavBar from '@components/NavBar';
import PlanetsContainer from '@components/PlanetsContainer';

import { useStoreContext } from 'context/storeContext';

const App = () => {
  const { loading, planetData } = useStoreContext();

  return (
    <>
      <NavBar />
      <main className="container mx-auto my-5 px-2">
        {loading ? <CardSkeleton /> : null}
        {!loading && planetData.length ? (
          <PlanetsContainer planetData={planetData} />
        ) : null}
      </main>
    </>
  );
};

export default App;
