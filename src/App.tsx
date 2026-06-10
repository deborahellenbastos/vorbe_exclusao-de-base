import { Theme } from './settings/types';
import { LoadedItemList } from './components/generated/LoadedItemList';

let theme: Theme = 'light';

function App() {
  function setTheme(theme: Theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  setTheme(theme);

  return (
    <div className="flex min-h-screen w-full">
      <LoadedItemList />
    </div>
  );
}

export default App;
