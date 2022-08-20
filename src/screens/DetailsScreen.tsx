import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import WebView from 'react-native-webview';
import { Footer, Layout } from '../components';
import { Container, Loading } from '../components/common';
import { ParamList } from '../routes';
import { theme } from '../styles/theme';
import { extractEmail, extractLink } from '../utils/formatters';

function Details() {
  const {
    params: { data },
  } = useRoute<RouteProp<ParamList, 'Details'>>();

  const email = extractEmail(data.body);
  const link = extractLink(data.body);

  return (
    <Layout title="Detalhes">
      <Container flex={1}>
        <Container flex={7}>
          <WebView
            source={{ uri: `https://remoto.vercel.app/app/${data.id}` }}
            startInLoadingState
            renderLoading={() => (
              <Container position="absolute" background={theme.colors.white}>
                <Loading />
              </Container>
            )}
          />
        </Container>

        <Footer email={email} link={link} />
      </Container>
    </Layout>
  );
}

export default Details;
