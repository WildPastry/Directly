import { Button, Group } from '@mantine/core';
import DropzoneArea from '../../components/features/dropzone/Dropzone';
import { FileWithPath } from '@mantine/dropzone';
import { ISortableItem } from '../../models/data.model';
import { IconLiveView } from '@tabler/icons-react';
// import SortableList from '../../components/layout/list/List';
import { setFiles } from '../../redux/slices/fileSlice';
import { useAppDispatch } from '../../redux/hooks';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/store';
import { SortableTree } from '../../components/layout/list/List';

const Books: React.FC = (): JSX.Element => {
  // Set up dispatch and states
  const dispatch = useAppDispatch();
  const [display, setDisplay] = useState(false);

  const storedFiles: ISortableItem[] = useSelector(
    (state: AppState): ISortableItem[] => state.files
  );

  const convertFiles = (files: FileWithPath[]): ISortableItem[] => {
    return files.map((file, index) => ({
      id: index + 1,
      name: file.name || 'Not available',
      size: file.size || 0,
      type: file.type || 'Not available',
      lastModified: file.lastModified || 0
    }));
  };

  // Handle files
  const handleFiles = (files: FileWithPath[]): void => {
    const currentFiles: ISortableItem[] = convertFiles(files);
    dispatch(setFiles(currentFiles));
    setDisplay(true);
    console.log('currentFiles', currentFiles);
    console.log('state', storedFiles);
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
      </Group>
      <SortableTree />
    </section>
  );
};

// EXPORT Books
Books.displayName = 'DIRECTLY | Books';
export default Books;
