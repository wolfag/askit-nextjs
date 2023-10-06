'use client';
import AppTable from '@/components/app.table';
import CreateModal from '@/components/create.modal';
import { useProductList } from '@/hooks/useProductList';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { toast } from 'react-toastify';

export default function Products() {
  const router = useRouter();

  const { data, isLoading, mutate } = useProductList({
    revalidateIfStale: false,
    revalidateOnFocus: false,
    refreshInterval: undefined,
  });

  const [visibleCreateModal, setVisibleCreateModal] = useState(false);
  function toggleCreateModal() {
    setVisibleCreateModal((prev) => !prev);
  }

  function handleSubmit(payload: ProductPayload) {
    fetch('https://fakestoreapi.com/products', {
      method: 'POST',
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log({ res });

        mutate();

        toggleCreateModal();
        toast('Ok');
      });
  }

  return (
    <div>
      {isLoading ? (
        <ProgressBar animated variant='info' now={100} />
      ) : (
        <>
          <AppTable data={data} toggleCreateModal={toggleCreateModal} />
          <CreateModal
            visible={visibleCreateModal}
            onHide={toggleCreateModal}
            onSubmit={handleSubmit}
          />
        </>
      )}
    </div>
  );
}
