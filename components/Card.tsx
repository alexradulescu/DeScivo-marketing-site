import { ReactNode } from 'react'
import { styled } from 'stitches.config'

interface CardProps {
  header?: ReactNode | string
  footer?: ReactNode | string
  children: ReactNode
  className?: string
}

export const Card = ({ header, footer, children, className }: CardProps) => {
  return (
    <CardWrapper className={className}>
      {header ? <CardHeader>{header}</CardHeader> : null}

      <CardBody withHeader={Boolean(header)} withFooter={Boolean(footer)}>
        {children}
      </CardBody>

      {footer ? <CardFooter>{footer}</CardFooter> : null}
    </CardWrapper>
  )
}

const CardWrapper = styled('section', {
  backgroundColor: 'rgba(15, 23, 42, .4)',
  backdropFilter: 'blur( 5px )',
  borderRadius: '4px',
  color: '#cbd5e1'
})

const CardHeader = styled('div', {
  padding: '32px 32px 16px 32px'
})

const CardBody = styled('div', {
  padding: '32px',
  variants: {
    withHeader: {
      true: {
        paddingTop: '16px'
      }
    },
    withFooter: {
      true: {
        paddingBottom: '16px'
      }
    }
  }
})

const CardFooter = styled('div', {
  padding: '16px 32px 32px 32px'
})
