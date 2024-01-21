import { Button, Group } from '@mantine/core';
import { IconLiveView, IconPdf } from '@tabler/icons-react';
import DropzoneArea from '../../components/features/dropzone/Dropzone';
import { FileWithPath } from '@mantine/dropzone';
import SortableList from '../../components/layout/list/List';
import { useState } from 'react';

const Books: React.FC = (): JSX.Element => {
  const [files, setFiles] = useState([] as FileWithPath[]);
  const [display, setDisplay] = useState(false);

  // Handle files
  const handleFiles = (files: FileWithPath[]): void => {
    setFiles(files);
    setDisplay(true);
  };

  return (
    <section aria-label='Books Section'>
      <DropzoneArea onFileUploaded={handleFiles} className='mb-3' />
      <Group gap='md' className='mb-3'>
        <Button
          leftSection={<IconLiveView size={14} />}
          size='sm'
          variant='outline'>
          Preview
        </Button>
        <Button leftSection={<IconPdf size={14} />} size='sm' variant='outline'>
          Combine
        </Button>
      </Group>
      {display ? <SortableList files={files} /> : null}
    </section>
  );
};

// EXPORT Books
Books.displayName = 'DIRECTLY | Books';
export default Books;
