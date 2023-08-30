import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate = ({name, message, email}: EmailTemplateProps) => (
  <div>
    <h1>Name: {name}</h1>
    <h1>Email: {email}</h1>
    <h1>Message: {message}</h1>
  </div>
);