const PageTitle = () => {
  return (
    <section className="container d-sm-flex align-items-center justify-content-between pb-4 mb-2 mb-lg-3">
      <h1 className="mb-sm-0 me-sm-3">Portfolio List</h1>
      <select className="form-select" style={{ width: '240px' }}>
        <option value="All categories">All categories</option>
        <option value="Web Design">Web Design</option>
        <option value="Graphic Design">Graphic Design</option>
        <option value="Branding">Branding</option>
        <option value="UI / UX">UI / UX</option>
        <option value="Motion Design">Motion Design</option>
      </select>
    </section>
  );
};

export default PageTitle;
