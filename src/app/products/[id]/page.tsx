'use client';

import { useProductDetail } from '@/hooks/useProductDetail';
import { Metadata, ResolvingMetadata } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function ProductDetail({ params }: Props) {
  const router = useRouter();
  const { data, isLoading } = useProductDetail({ id: params.id });

  return (
    <Container>
      <div>
        <Button onClick={router.back} variant='info'>
          Back
        </Button>
      </div>
      {isLoading ? (
        'Loading...'
      ) : (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant='top' src={data?.image} />
          <Card.Body>
            <Card.Title>{data?.title}</Card.Title>
            <Card.Text>{data?.description}</Card.Text>
            <Button variant='primary'>Go somewhere</Button>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
}
