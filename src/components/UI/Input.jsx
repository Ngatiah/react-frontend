// export default function Input({ label, id }) {
export default function Input({ label, id, ...props }) {
  return (
    <p className="control">
      <label htmlFor={id}>{label}</label>
      <input name={id} id={id} required {...props} />
    </p>
  );
}
