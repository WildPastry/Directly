/* eslint-disable no-console */
import { DropzoneArea } from '../../components/features/dropzone/Dropzone';
import { FileWithPath } from '@mantine/dropzone';
import SortableList from '../../components/layout/list/List';
import { useState } from 'react';

const Books: React.FC = (): JSX.Element => {
  const [files, setFiles] = useState([] as FileWithPath[]);
  const [display, setDisplay] = useState(false);

  const handleFiles = (files: FileWithPath[]): void => {
    setFiles(files);
    setDisplay(true);
    console.log(files);
  };

  return (
    <section aria-label='Books Section'>
      <DropzoneArea fileUploaded={handleFiles} className='mb-3' />
      {display ? <SortableList files={files} /> : null}
    </section>
  );
};

// EXPORT Books
Books.displayName = 'DIRECTLY | Books';
export default Books;
