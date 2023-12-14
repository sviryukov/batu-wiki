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
        <Link href="https://airtable.com/app4KDYT6oXxPnrSL" target="_blank">
          Корпоративная база данных
        </Link>
      </Typography>
      <Header variant="h5">Добавление данных в базу</Header>
      <Typography>
        <Link
          href="https://airtable.com/app4KDYT6oXxPnrSL/shrRwXIMOfABYcpnx"
          target="_blank"
        >
          Форма "Новый клиент"
        </Link>
      </Typography>
      <Typography>
        <Link
          href="https://airtable.com/app4KDYT6oXxPnrSL/shr6n3QYRVn288LCs"
          target="_blank"
        >
          Форма "Новый контракт"
        </Link>
      </Typography>
      <Typography>
        <Link
          href="https://airtable.com/app4KDYT6oXxPnrSL/shrCANLA0tS3DMCjW"
          target="_blank"
        >
          Форма "Новая поставка"
        </Link>
      </Typography>
      <Typography>
        <Link
          href="https://airtable.com/app4KDYT6oXxPnrSL/shrQaFxVHlVG8Mo6E"
          target="_blank"
        >
          Форма "Новая закупка"
        </Link>
      </Typography>
      <Typography>
        <Link
          href="https://airtable.com/app4KDYT6oXxPnrSL/shrWa4tpEontKIxyr"
          target="_blank"
        >
          Форма "Новое крестьянское хозяйство"
        </Link>
      </Typography>
      <Typography>
        <Link
          href="https://airtable.com/app4KDYT6oXxPnrSL/shrRSJSVqIamMGdxi"
          target="_blank"
        >
          Форма "Новый план"
        </Link>
      </Typography>
    </Container>
  );
}
