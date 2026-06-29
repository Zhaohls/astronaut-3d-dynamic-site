function App() {
  return (
    <main className="bg-black">
      <Hero />
      <Capabilities />
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

window.App = App;
