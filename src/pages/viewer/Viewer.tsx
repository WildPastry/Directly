/* eslint-disable no-console */
import { useEffect, useRef } from 'react';
import WebViewer from '@pdftron/webviewer';

const Viewer: React.FC = (): JSX.Element => {
  const licenseKey: string = import.meta.env.ASPYRE_KEY;
  const webViewerRef: React.RefObject<HTMLDivElement> =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    WebViewer(
      {
        path: 'lib',
        fullAPI: true,
        licenseKey: licenseKey,
        enableFilePicker: true,
        config: '../../../config.js'
      },
      webViewerRef.current as HTMLDivElement
    ).then((instance) => {
      console.log(instance.UI.contextMenuPopup);
    });
  }, []);

  return (
    <section aria-label='Viewer Section' className='h-[calc(100vh-92px)]'>
      <div className='h-full' ref={webViewerRef} />
    </section>
  );
};

// EXPORT Viewer
Viewer.displayName = 'DIRECTLY | Viewer';
export default Viewer;
