/* eslint-disable no-console */
import { useEffect, useRef } from 'react';
import WebViewer from '@pdftron/webviewer';
import { useSelector } from 'react-redux';
import { ISortableItem } from '../../models/data.model';
import { AppState } from '../../redux/store';

const Library: React.FC = (): JSX.Element => {
  const licenseKey: string = import.meta.env.ASPYRE_KEY;
  const webViewerRef: React.RefObject<HTMLDivElement> =
    useRef<HTMLDivElement>(null);
  const storedFiles: ISortableItem[] = useSelector(
    (state: AppState): ISortableItem[] => state.files
  );

  const viewPdf = (file: ISortableItem): void => {
    console.log(file);
    WebViewer(
      {
        path: 'lib',
        fullAPI: true,
        licenseKey: licenseKey,
        config: '../../../config.js'
      },
      webViewerRef.current as HTMLDivElement
    ).then((instance: any) => {
      instance.loadDocument(file);
    });
    // WebViewer(
    //   {
    //     path: 'lib',
    //     fullAPI: true,
    //     licenseKey: licenseKey,
    //     config: '../../../config.js'
    //   },
    //   webViewerRef.current as HTMLDivElement
    // ).then((instance) => {
    //   console.log(instance.UI.contextMenuPopup);
    //   instance.loadDocument(file);
    // });
  };

  return (
    <section aria-label='Library Section' className='h-[calc(100vh-92px)]'>
      {storedFiles.map((file) => (
        <div key={file.id} onClick={() => viewPdf(file)}>
          {file.name}
        </div>
      ))}
      {/* <div className='h-full' ref={webViewerRef} /> */}
    </section>
  );
};

// EXPORT Library
Library.displayName = 'DIRECTLY | Library';
export default Library;
