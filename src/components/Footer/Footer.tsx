import React from 'react';
import { Linking } from 'react-native';
import { FooterContainer, LinkIcon, MailIcon } from './styles';

interface FooterProps {
  email: string | null;
  link: string | null;
}

function Footer({ email, link }: FooterProps) {
  const handleEmail = () =>
    Linking.openURL(`mailto:${email}?subject=SendMail&body=Description`);

  const handleLink = () => Linking.openURL(link || '');

  return (
    <FooterContainer>
      {!!email && <MailIcon icon="mail" size={40} onPress={handleEmail} />}
      {!!link && <LinkIcon icon="link" size={40} onPress={handleLink} />}
    </FooterContainer>
  );
}

export default Footer;
