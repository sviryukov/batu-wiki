import styled from '@emotion/styled';
import { Link, Typography } from '@mui/material';
import React from 'react';
import { Helmet } from 'react-helmet';

const siteTitle = '';

const Container = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 0 20px 20px;
`;
const Header = styled(Typography)`
  margin: 30px 0 10px;
`;

export function App() {
  return (
    <Container>
      <Helmet defaultTitle={siteTitle} />
      <Header variant="h4">БатуАгро - полезные ссылки</Header>
      <Typography>
        <Link href="https://airtable.com/apppbGIRqGOxPbx7N">
          Корпоративная база данных
        </Link>
      </Typography>
      <Header variant="h5">Работа с клиентами</Header>
      <Typography>
        <Link href="https://airtable.com/apppbGIRqGOxPbx7N/shr70epZ7cge0MeDo">
          Форма для сохранения предварительных данных клиента
        </Link>
      </Typography>
    </Container>
  );
}
