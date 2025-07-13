export default function Login() {
  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold">SteamStatSync</h1>
      <a href="http://localhost:5000/api/auth/steam">
        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded">
          Login with Steam
        </button>
      </a>
    </div>
  );
}
