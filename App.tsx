import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { Routes } from './src/routes';
import { theme } from './src/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <Routes />
    </ThemeProvider>
  );
}
