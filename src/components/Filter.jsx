export default function Filter({ tagsList }) {
  return (
    <>
      <section className="text-center my-5">
        {tagsList.map((tag, index) => (
          <span key={index} className={`badge-${tag} px-3 cursor-pointer`}>
            {tag}
          </span>
        ))}
      </section>
    </>
  );
}
