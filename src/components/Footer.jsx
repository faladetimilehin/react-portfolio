function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="navbar fixed-bottom bg-body-tertiary">
      <div className="container">
        <p>
          Copyright &copy; {currentYear} Falade Timmy
        </p >
      </div >
    </footer >

  );
}

export default Footer;
