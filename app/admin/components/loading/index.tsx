import "./styles/index.css";

function Loading() {
  return (
    <div className="loading-container flex flex-column  justify-center">
      <h6 className="loading">Fetch Users Data</h6>
      <span className="loading">Fetching new users data</span>
    </div>
  );
}

export default Loading;
