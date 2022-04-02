import React from 'react'
import MailchimpSubscribe, { EmailFormFields } from 'react-mailchimp-subscribe'

import { NewsletterForm } from './NewsletterForm'

const MAILCHIMP_URL = `https://gmail.us14.list-manage.com/subscribe/post?u=75f2487710b59836f8bc35a87&amp;id=ddb6a8b671`

export const NewsletterSubscribe = () => {
  console.info(MAILCHIMP_URL)

  return (
    <MailchimpSubscribe
      url={MAILCHIMP_URL}
      render={({ subscribe, status, message }) => (
        <NewsletterForm
          status={status}
          message={message}
          onValidated={(formData: EmailFormFields) => subscribe(formData)}
        />
      )}
    />
  )
}
