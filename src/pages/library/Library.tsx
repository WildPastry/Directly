/* eslint-disable no-console */
import { AppState } from '../../redux/store';
import DropzoneArea from '../../components/features/dropzone/Dropzone';
import { FileWithPath } from '@mantine/dropzone';
import { ISortableItem } from '../../models/data.model';
import { notifications } from '@mantine/notifications';
import { setFiles } from '../../redux/slices/fileSlice';
import { useAppDispatch } from '../../redux/hooks';
import { useSelector } from 'react-redux';

const Library: React.FC = (): JSX.Element => {
  // Set up dispatch and states
  const dispatch = useAppDispatch();

  const storedFiles: ISortableItem[] = useSelector(
    (state: AppState): ISortableItem[] => state.files
  );

  // Convert files
  const convertFiles = (files: FileWithPath[]): ISortableItem[] => {
    return files.map((file) => ({
      id: self.crypto.randomUUID(),
      name: file.name || 'Not available',
      data: {
        size: file.size || 0,
        type: file.type || 'Not available',
        lastModified: file.lastModified || 0
      },
      children: [],
      collapsed: false
    }));
  };

  // Handle files
  const handleFiles = (files: FileWithPath[]): void => {
    const currentFiles: ISortableItem[] = convertFiles(files);
    dispatch(setFiles(currentFiles));
    console.log(currentFiles);
    showNotification(currentFiles);
  };

  // Notification
  const showNotification = (items: ISortableItem[]): void => {
    notifications.show({
      title: `Success`,
      message: `Added ${items.length} files`
    });
  };

  // View PDF
  const viewPdf = (file: ISortableItem): void => {
    console.log(file);
  };

  return (
    <section aria-label='Library Section'>
      <DropzoneArea onFileUploaded={handleFiles} className='mb-3' />
      {storedFiles.map((file) => (
        <div key={file.id} onClick={() => viewPdf(file)}>
          {file.name}
        </div>
      ))}
    </section>
  );
};

// EXPORT Library
Library.displayName = 'DIRECTLY | Library';
export default Library;
