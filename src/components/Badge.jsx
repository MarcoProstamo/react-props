export default function Badge({ badgeLabel, children }) {
  return (
    <>
      <span className={`badge-${badgeLabel} px-3`}>{children}</span>
    </>
  );
}
