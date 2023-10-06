'use client';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { toast } from 'react-toastify';

interface Props {
  visible?: boolean;
  onHide?: VoidFunction;
  onSubmit?: (payload: ProductPayload) => void;
}

function CreateModal({ visible, onHide, onSubmit }: Props) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  function isDisable() {
    return !title || !category || !description;
  }

  function submit() {
    onSubmit?.({ title, category, description });
    clear();
  }

  function handleHide() {
    clear();
    onHide?.();
  }

  function clear() {
    setTitle('');
    setCategory('');
    setDescription('');
  }

  return (
    <Form>
      <Modal
        show={visible}
        onHide={handleHide}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>New Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className='mb-3'>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder='Enter title'
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>category</Form.Label>
            <Form.Control
              type='text'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder='Enter category'
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>description</Form.Label>
            <Form.Control
              type='text'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder='Enter description'
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleHide}>
            Close
          </Button>
          <Button disabled={isDisable()} variant='primary' onClick={submit}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </Form>
  );
}

export default CreateModal;
