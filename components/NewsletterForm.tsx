import React, { ChangeEvent, FormEvent, useState, useEffect } from 'react'
import { styled } from 'stitches.config'

export const NewsletterForm = ({ status, message, onValidated }: any) => {
  const [email, setEmail] = useState('')

  useEffect(() => {
    setEmail('')
  }, [status])

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setEmail(event.target.value)
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (email) {
      onValidated({
        EMAIL: email
      })
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      {status === 'error' ? (
        <Alert color="error">Error: {message}</Alert>
      ) : null}
      {status === 'success' ? (
        <Alert>Success: {message}</Alert>
      ) : (
        <>
          <Input
            onChange={handleEmailChange}
            type="email"
            placeholder="Your email address"
            required
          />
          <Button type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Subscribe'}
          </Button>
        </>
      )}
    </Form>
  )
}

const Form = styled('form', {
  width: '100%',
  display: 'flex',
  marginBlockStart: 32,

  '@media all and (max-width: 480px)': {
    flexDirection: 'column'
  }
})

const Input = styled('input', {
  color: '#fff',
  backgroundColor: 'transparent',
  appearance: 'none',
  border: '1px solid #94a3b8',
  borderRadius: '6px 0 0 6px',
  fontSize: 20,
  lineHeight: '40px',
  padding: '4px 16px',
  outline: 'none',
  flex: 1,
  cursor: 'pointer',
  transition: 'border .3s',

  '&:hover, &:focus': {
    borderColor: '#00937d'
  },

  '@media all and (max-width: 480px)': {
    borderRadius: '6px 6px 0 0'
  }
})

const Button = styled('button', {
  color: '#fff',
  backgroundColor: 'rgba(0, 147, 125, .5)',
  border: 'none',
  appearance: 'none',
  borderRadius: '0 6px 6px 0',
  fontSize: 20,
  lineHeight: '40px',
  padding: '4px 16px',
  outline: 'none',
  cursor: 'pointer',
  transition: 'background-color .3s, border .3s',

  '&:hover, &:focus, &:active': {
    backgroundColor: '#00806c',
    borderColor: '#00806c'
  },

  '@media all and (max-width: 480px)': {
    borderRadius: '0 0 6px 6px'
  }
})

const Alert = styled('p', {
  color: '#fff',
  backgroundColor: 'rgba(0, 147, 125, .5)',
  borderRadius: '6px',
  width: '100%',
  padding: 16,

  variants: {
    color: {
      success: {
        backgroundColor: 'rgba(0, 147, 125, .5)'
      },
      error: {
        backgroundColor: 'rgb(156 22 22 / 50%)'
      }
    }
  }
})
