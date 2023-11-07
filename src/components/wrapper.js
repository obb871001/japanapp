import Header from "./header";

const Wrapper = ({ children }) => {
  return (
    <div className="pt-[60px]">
      <Header />
      {children}
    </div>
  );
};

export default Wrapper;
