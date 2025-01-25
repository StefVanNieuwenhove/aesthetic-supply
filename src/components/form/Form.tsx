import { Container, ContainerProps } from '@mui/material';
import { PropsWithChildren } from 'react';

type FormProps = PropsWithChildren<{
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  maxWidth?: ContainerProps['maxWidth'];
}>;

const Form = ({ handleSubmit, children, maxWidth = 'lg' }: FormProps) => {
  return (
    <Container
      maxWidth={maxWidth}
      component='form'
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        height: 'auto',
        border: '1px solid lightgray',
        borderRadius: 3,
        paddingY: '2rem',
        paddingX: '3rem',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      }}>
      {children}
    </Container>
  );
};

export default Form;
