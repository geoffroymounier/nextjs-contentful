import React from 'react'
import styled from 'styled-components';
import { Form, Field } from 'react-final-form'
import Input from './Input'
import Button from './Button'
import Textarea from './Textarea'

const WrappedForm = styled.form`
position : ${props => props.hasBackground ? 'relative' : 'initial'};
${props => props.styled}`

const WrappedDiv = styled.form`
position : ${props => props.hasBackground ? 'relative' : 'initial'};
${props => props.styled}`

enum Fields {
  INPUT = 'input',
  TEXTAREA = 'textarea',
  BUTTON = 'button'

}

const validBlocks = {
  [Fields.INPUT]: Input,
  [Fields.TEXTAREA]: Textarea,
  [Fields.BUTTON]: Button

};

const Blog = (props) => {


  const onSubmit = (e) => {
    // e.preventDefault()
    console.log('did submit')
  }
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <WrappedForm onSubmit={handleSubmit} className={`${props.classes}`} styled={`${props.style}`} >
          {props.fields.map((field, id) => {
            const Component = validBlocks[field._type];
            if (!Component) return null
            if (field._type == Fields.BUTTON) return <Component key={id.toString()} {...field} />
            return (

              <Field name={field.id}
                placeholder={field.placeholder}
                {...field}
              >{(props) => (

                <WrappedDiv styled={field.style} key={id.toString()}>
                  <label>{field.label}</label>
                  <Component {...props} />
                </WrappedDiv>
              )}</Field>

            )
          })}
        </WrappedForm>
      )} />
  );
}

export default Blog
