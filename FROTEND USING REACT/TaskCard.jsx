export default function TaskCard({ task }) {
  return (
    <div className="card">
      <p>{task.text}</p>
    </div>
  );
}