import React from 'react'
import { Card, Table, Button, Popconfirm } from 'antd'

const dataSource = [
    {
        id: 1,
        name: "soap",
        price: 5
    },
    {
        id: 2,
        name: "milk",
        price: 6
    },
    {
        id: 3,
        name: "coke",
        price: 1.5
    }
];
function List(props) {
    const columns = [{
        title: 'Number',
        key: 'id',
        width: 80,
        align: 'center',
        render: (txt, row, index) => index + 1
    }, {
        title: 'Name',
        dataIndex: 'name'
    }, {
        title: 'Price',
        dataIndex: 'price'
    }, {
        title: 'Operation',
        render: (txt, record, index) => {
            return (
                <div>
                    <Button type='primary' size="small" onClick={()=>props.history.push(`/admin/products/edit/${record.id}`)}>edit</Button>
                    <Popconfirm title='Are you sure you want to delete this item?'
                        onCancel={() => console.log('User cancel the deletion')}
                        onConfirm={() => {
                            console.log('User confirm the deletion')
                            // call the api of backend
                        }}>
                        <Button style={{ margin: '0 15px' }} type='danger' size="small">delete</Button>
                    </Popconfirm>
                </div>
            )
        }
    }];
    return (
        <Card title='Product List' extra={<Button type='primary' size='small' onClick={()=>props.history.push('/admin/products/edit')}>Add</Button>}>
            <Table rowKey="id" columns={columns} bordered dataSource={dataSource} />
        </Card>
    )
}

export default List
