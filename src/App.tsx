import CardSkeleton from '@components/CardSkeleton';
import NavBar from '@components/NavBar';

import { useStoreContext } from 'context/storeContext';

const App = () => {
  const { loading, planetData } = useStoreContext();

  console.log('planetData', planetData);

  return (
    <>
      <NavBar />
      <main className="my-5 px-2">{loading ? <CardSkeleton /> : null}</main>
    </>
  );
};

export default App;
