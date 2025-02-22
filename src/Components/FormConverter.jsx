function FormConverter({ children }) {
  return (
    <section className="shadow-lg rounded-3xl bg-white">
      <form className="gap-2 grid lg:grid-cols-3 grid-cols-1 lg:p-5">
        {children}
      </form>
    </section>
  );
}

export default FormConverter;
