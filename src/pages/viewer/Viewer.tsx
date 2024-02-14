/* eslint-disable no-console */
import { useEffect, useRef } from 'react';
import WebViewer from '@pdftron/webviewer';
import { useLocation } from 'react-router-dom';

const Viewer: React.FC = (): JSX.Element => {
  const licenseKey: string = import.meta.env.ASPYRE_KEY;
  const webViewerRef: React.RefObject<HTMLDivElement> =
    useRef<HTMLDivElement>(null);

  const { state } = useLocation();

  useEffect(() => {
    console.log(state);
    WebViewer(
      {
        path: 'lib',
        fullAPI: true,
        licenseKey: licenseKey,
        config: '../../../config.js'
      },
      webViewerRef.current as HTMLDivElement
    ).then((instance) => {
      instance.UI.loadDocument(state.file, { filename: state.file.name });
      const { documentViewer } = instance.Core;
      documentViewer.addEventListener('documentLoaded', () => {
        console.log('documentLoaded');
      });
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
