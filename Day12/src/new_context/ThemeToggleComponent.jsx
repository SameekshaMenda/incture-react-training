import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function ThemeToggleComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const style = {
    backgroundColor : theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    padding: '500px',
    textAllign: 'center',
    minheight: '100vh',
  }

  return (
    <div style={style}>
      <h3>Current Theme: {theme.toUpperCase()}</h3>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
}
export default ThemeToggleComponent;