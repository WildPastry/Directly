import { DropzoneArea } from '../../components/features/dropzone/Dropzone';

const Books: React.FC = (): JSX.Element => {
  return (
    <section aria-label='Books Section'>
      <h1 className='text-6xl mb-3'>BOOKS</h1>
      <DropzoneArea />
    </section>
  );
};

// EXPORT Books
Books.displayName = 'DIRECTLY | Books';
export default Books;
