import Header from "./components/Header";
import PostList from "./components/PostList";
import "./styles/App.css";

function App() {
  return (
    <>
      <Header />

      <main>
        <h2>Latest Insights</h2>
        <PostList />
      </main>
    </>
  );
}

export default App;