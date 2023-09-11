const Shimmer = () => {
  return (
    <div className="flex flex-wrap m-10" data-testid="shimmer">
      {Array(100)
        .fill("")
        .map((e, index) => (
          <div
            className="w-56 p-2 m-2 shadow-lg bg-purple-50 h-56"
            key={index}
          ></div>
        ))}
    </div>
  );
  // return Array(10).map(() => {
  //   <div className="card"></div>;
  // });
};

export default Shimmer;
