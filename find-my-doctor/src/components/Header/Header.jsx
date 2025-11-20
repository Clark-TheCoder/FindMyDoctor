function Header({ title }) {
  return (
    <header className="bg-primary text-white py-3">
      <div className="container text-center">
        <h1 className="m-3">{title}</h1>
      </div>
    </header>
  );
}

export default Header;
