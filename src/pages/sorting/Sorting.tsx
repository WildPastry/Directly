import { SortableTree } from '../../components/layout/list/List';

const Sorting: React.FC = (): JSX.Element => {
  return (
    <section aria-label='Sorting Section'>
      <SortableTree />
    </section>
  );
};

// EXPORT Sorting
Sorting.displayName = 'DIRECTLY | Sorting';
export default Sorting;
