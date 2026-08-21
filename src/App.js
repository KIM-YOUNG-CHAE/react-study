import { ThemeProvider } from 'styled-components';
import './App.css';
import GlobalStyle from './style/globals/global';
import theme from './style/globals/theme';
import Icon01 from './style/Icon01';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Icon01/>
      </ThemeProvider>
      
    </>
  );
}

export default App;
