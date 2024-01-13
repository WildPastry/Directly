const Books: React.FC = (): JSX.Element => {
  return (
    <section aria-label='Books Section'>
      <h1 className='text-6xl'>BOOKS</h1>
    </section>
  );
};

// EXPORT Books
Books.displayName = 'DIRECTLY | Books';
export default Books;
