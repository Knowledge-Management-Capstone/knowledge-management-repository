import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchFolderByDocumentId } from '../store/actions/repositoryActions';

import NavigationBar from '../components/common/NavigationBar';
import BaseBreadcrumbs from '../components/generic/breadcrumbs/BaseBreadcrumbs';
import DocViewer, { DocViewerRenderers } from 'react-doc-viewer';

function FileDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { folder, document, folderLoading } = useSelector(
    (state) => state.folder
  );

  console.log(document.url);

  useEffect(() => {
    dispatch(fetchFolderByDocumentId(id));
  }, [dispatch, id]);

  const docs = [
    {
      uri: folderLoading ? null : document.url,
    },
  ];

  return (
    <div>
      <NavigationBar />
      <div className='flex flex-col p-12'>
        <BaseBreadcrumbs />
        <div className='self-center w-[90%]'>
          <DocViewer pluginRenderers={DocViewerRenderers} documents={docs} />
        </div>
      </div>
    </div>
  );
}

export default FileDetail;
