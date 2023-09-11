import ReactDOM from 'react-dom/client';
function App() {
  return <hi>Test Statement</hi>
}
const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App />);