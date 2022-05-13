const Footer = () => {
  const now = new Date();
  const year = now.getFullYear();

  return (
    <footer className="footer">
      <p> @Todos los derechos reservados - {year}</p>
      <code>Codigo creado en el curso de capacitación de React</code>
    </footer>
  );
};

export default Footer;
