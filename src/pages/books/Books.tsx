/* eslint-disable no-console */
import { DropzoneArea } from '../../components/features/dropzone/Dropzone';
import { FileWithPath } from '@mantine/dropzone';
import { useState } from 'react';
import SortableList from '../../components/layout/list/List';

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
      <SortableList />
      {display ? (
        <div className='flex'>
          {files.map((currentFile: FileWithPath) => (
            <div key={currentFile.name}>
              <p>{currentFile.name ? currentFile.name : 'Not available'}</p>
              <p>{currentFile.size ? currentFile.size : 'Not available'}</p>
              <p>{currentFile.type ? currentFile.type : 'Not available'}</p>
              <p>
                {currentFile.lastModified
                  ? currentFile.lastModified
                  : 'Not available'}
              </p>
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
};

// EXPORT Books
Books.displayName = 'DIRECTLY | Books';
export default Books;
