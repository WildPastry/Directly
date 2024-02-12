/* eslint-disable */
/* eslint-disable no-console */
import { AppState } from '../../redux/store';
import DropzoneArea from '../../components/dropzone/Dropzone';
import { FileWithPath } from '@mantine/dropzone';
import { ISortableItem } from '../../models/data.model';
import { notifications } from '@mantine/notifications';
import { removeFile, setFiles } from '../../redux/slices/fileSlice';
import { useAppDispatch } from '../../redux/hooks';
import { useSelector } from 'react-redux';
import { Grid } from '@mantine/core';
import CardWithStats from '../../components/card-with-stats/CardWithStats';
import { UniqueIdentifier } from '@dnd-kit/core';
import { useNavigate } from 'react-router-dom';

const Library: React.FC = (): JSX.Element => {
  // Set up dispatch and states
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const storedFiles: ISortableItem[] = useSelector(
    (state: AppState): ISortableItem[] => state.files
  );

  // Convert files
  const convertFiles = async (
    files: FileWithPath[]
  ): Promise<ISortableItem[]> => {
    const convertedFiles: ISortableItem[] = [];

    for (const file of files) {
      const arrayBuffer = await readFileAsArrayBuffer(file);

      const sortableItem: ISortableItem = {
        id: self.crypto.randomUUID(),
        arrayBuffer: arrayBuffer,
        name: file.name || 'Not available',
        data: {
          size: file.size || 0,
          type: file.type || 'Not available',
          lastModified: file.lastModified || 0
        },
        children: [],
        collapsed: false
      };
      convertedFiles.push(sortableItem);
    }

    return convertedFiles;
  };

  const readFileAsArrayBuffer = (file: Blob): Promise<ArrayBuffer> => {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = () => {
        resolve(reader.result as ArrayBuffer);
      };
      reader.onerror = (error) => {
        reject(error);
      };
    });
  }

  const readFileAsBlob = (file: ISortableItem): Blob | undefined => {
    if (file.arrayBuffer) {
      return new Blob([file.arrayBuffer], { type: file.data.type });
    }
  }

  // Handle files
  const handleFiles = (files: FileWithPath[]): void => {
    console.log(files);
    convertFiles(files).then((currentFiles: ISortableItem[]) => {
      console.log(currentFiles);
      dispatch(setFiles(currentFiles));
      showNotification(currentFiles);
    });
  };

  // Notification
  const showNotification = (items: ISortableItem[]): void => {
    notifications.show({
      title: `Success`,
      message: `Added ${items.length} files`
    });
  };

  // Remove file
  const handleRemove = (id: UniqueIdentifier): void => {
    console.log('handleRemove', id);
    dispatch(removeFile(id));
  };

  // View file
  const handleView = (file: ISortableItem): void => {
    console.log('handleView', file);
    navigate('/viewer', { state: { file: readFileAsBlob(file) } });
  };

  return (
    <section aria-label='Library Section'>
      {/* Dropzone */}
      <DropzoneArea onFileUploaded={handleFiles} className='mb-3' />
      {/* Stored files */}
      <Grid className='mb-3'>
        {storedFiles.map((file: ISortableItem) => (
          <Grid.Col span={{ base: 12, md: 6, lg: 4 }} key={file.id}>
            <CardWithStats
              {...file}
              handleRemove={handleRemove}
              handleView={handleView}
            />
          </Grid.Col>
        ))}
      </Grid>
    </section>
  );
};

// EXPORT Library
Library.displayName = 'DIRECTLY | Library';
export default Library;
