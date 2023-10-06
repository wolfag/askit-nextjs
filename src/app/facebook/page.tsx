'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import style from '@/styles/app.module.css';

import Button from 'react-bootstrap/Button';

type Props = {};

export default function Facebook({}: Props) {
  const router = useRouter();

  function handleClick() {
    router.back();
  }

  return (
    <div className={style.red}>
      Facebook
      <Button variant='danger' onClick={handleClick}>
        back
      </Button>
    </div>
  );
}
