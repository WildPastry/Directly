import { DropzoneArea } from '../../components/features/dropzone/Dropzone';

const Books: React.FC = (): JSX.Element => {
  return (
    <section aria-label='Books Section'>
      <h1 className='text-4xl mb-3'>Books</h1>
      <DropzoneArea />
    </section>
  );
};

// EXPORT Books
Books.displayName = 'DIRECTLY | Books';
export default Books;
