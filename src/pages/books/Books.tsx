import { DropzoneArea } from '../../components/features/dropzone/Dropzone';
import { FileWithPath } from '@mantine/dropzone';
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
      <h1 className='text-4xl mb-3'>Books</h1>
      <DropzoneArea fileUploaded={handleFiles} />
      {display ? (
        <ul>
          <li>Name: {files[0].name ? files[0].name : 'Not available'}</li>
          <li>Size: {files[0].size ? files[0].size : 'Not available'}</li>
          <li>Type: {files[0].type ? files[0].type : 'Not available'}</li>
          <li>
            Mod:{' '}
            {files[0].lastModified ? files[0].lastModified : 'Not available'}
          </li>
          <li>
            Path:{' '}
            {files[0].webkitRelativePath
              ? files[0].webkitRelativePath
              : 'Not available'}
          </li>
        </ul>
      ) : null}
    </section>
  );
};

// EXPORT Books
Books.displayName = 'DIRECTLY | Books';
export default Books;
