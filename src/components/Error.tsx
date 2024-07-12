function Error() {
  return (
    <div className="flex flex-col h-screen justify-center items-center gap-4">
      <p className="text-2xl font-semibold">Something Went Wrong!!</p>
      <button
        onClick={() => window.location.reload()}
        className="py-2 px-4 rounded-lg bg-secondary text-white"
      >
        Reload
      </button>
    </div>
  );
}

export default Error;
