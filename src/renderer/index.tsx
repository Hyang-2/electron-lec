import { createRoot } from 'react-dom/client';
import App from './App';
import 'tailwindcss/tailwind.css';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<App />);

// calling IPC exposed from preload script
window.electron?.ipcRenderer.once('ipc-example', (arg) => {
  // eslint-disable-next-line no-console
  console.log(arg);
});
window.electron?.ipcRenderer.sendMessage('ipc-example', ['ping']);

window.electron?.invoke('INVOKE_EXAMPLE', 'ping').then((res) => {
  console.log(res);
})
