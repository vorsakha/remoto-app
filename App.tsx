import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { useFonts } from 'expo-font';
import { Routes } from './src/routes';
import { theme } from './src/styles/theme';
import nunito from './src/assets/fonts/Nunito.ttf';
import firaCode from './src/assets/fonts/FiraCode.ttf';

export default function App() {
  const [loaded] = useFonts({
    Nunito: nunito,
    FiraCode: firaCode,
  });

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <Routes />
    </ThemeProvider>
  );
}
