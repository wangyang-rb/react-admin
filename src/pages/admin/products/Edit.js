import React from 'react'
import {Form,Card,Button,Input, message} from 'antd'
function Edit(props) {
    const { getFieldDecorator } = props.form;

    const priceValidate = (rule,value,callback)=>{
        if(value*1>100){
            callback("Price can't over 100");
        }else{
            callback();
        }
    }

    const handleSubmit = e => {
        // editorState.toHTML()获取当前富文本的内容
        // console.log(editorState.toHTML());
        // 阻止表单默认行为
        e.preventDefault();
    
        //  验证
        props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            console.log(values);
            console.log("提交");
            //  此处需要调用api接口
            // if (props.match.params.id) {
            //   modifyOne(props.match.params.id, {
            //     ...values,
            //     coverImg: imageUrl,
            //     content: editorState.toHTML()
            //   })
            //     .then(res => {
            //       // console.log(res);
            //       props.history.push("/admin/products");
            //     })
            //     .catch(err => {
            //       // console.log(err);
            //     });
            // } else {
            //   createApi({
            //     ...values,
            //     coverImg: imageUrl,
            //     content: editorState.toHTML()
            //   })
            //     .then(res => {
            //       // console.log(res);
            //       props.history.push("/admin/products");
            //     })
            //     .catch(err => {
            //       // console.log(err);
            //     });
            // }
          } else {
            message.error("Please input right content");
          }
        });
      };
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    }
    return (
       <Card title='edit product'>
           <Form onFinish={onFinish} onSubmit={e => handleSubmit(e)}>
            <Form.Item label="name">
            {getFieldDecorator("name", {
                rules: [
                {
                    required: true,
                    message: "Please input name of product!"
                }],
            })(<Input placeholder="Please input name of product" />)}
            </Form.Item>
            <Form.Item label="price">
            {getFieldDecorator("price", {
                rules: [
                {
                    required: true,
                    message: "Please input price of product!"
                },
                {
                    validator:priceValidate
                }
                ],
            })(<Input placeholder="Please input price of product" />)}
            </Form.Item>
               {/* <Form.Item label="name" name='name'
                rules={[
                    {
                    required: true,
                    message: 'Please input name of product!',
                    },
                ]}
                >
                <Input placeholder="please input name of product" />
                </Form.Item>

                <Form.Item label="price" name='price'
                rules={[
                    {
                    required: true,
                    message: 'Please input price of product!',
                    },
                ]}
                >
                <Input placeholder="please input price of product" />
                </Form.Item> */}

               <Form.Item><Button htmlType='submit' type='primary'>Save</Button></Form.Item>
           </Form>
       </Card>
    )
}

// export default Edit;
export default Form.create({ name: "productEdit" })(Edit);