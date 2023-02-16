const Shimmer = () => {
  return (
    <div className="restaurant-list">
      {Array(100)
        .fill("")
        .map((e, index) => (
          <div className="shimmer-card" key={index}></div>
        ))}
    </div>
  );
  // return Array(10).map(() => {
  //   <div className="card"></div>;
  // });
};

export default Shimmer;
