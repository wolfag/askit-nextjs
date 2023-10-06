'use client';

import Link from 'next/link';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import {
  BsFillEyeFill,
  BsFillPencilFill,
  BsFillPlusSquareFill,
  BsFillTrashFill,
} from 'react-icons/bs';

interface Props {
  data?: Product[];
  toggleCreateModal?: VoidFunction;
}

function AppTable({ data, toggleCreateModal }: Props) {
  return (
    <Container>
      <div
        className='my-3'
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <h3>Products</h3>
        <Button onClick={toggleCreateModal}>
          <BsFillPlusSquareFill />
        </Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>title</th>
            <th>category</th>
            <th>description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.category}</td>
                <td>{item.description}</td>
                <td>
                  <Button variant='info'>
                    <Link href={`/products/${item.id}`}>
                      <BsFillEyeFill />
                    </Link>
                  </Button>
                  <Button variant='primary'>
                    <BsFillPencilFill />
                  </Button>
                  <Button variant='danger'>
                    <BsFillTrashFill />
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}

export default AppTable;
