import type { TodoFilter } from "@/entities/todo";

const filters: { value: TodoFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "active", label: "Active" },
  { value: "completed", label: "Completed" },
];

type Props = {
  value: TodoFilter;
  onChange: (value: TodoFilter) => void;
};

export function TodoFilterTabs({ value, onChange }: Props) {
  return (
    <div className="text-xl text-gray-500">
      {filters.map((f, i) => (
        <span key={f.value}>
          {i > 0 && " | "}
          <button
            onClick={() => onChange(f.value)}
            className={value === f.value ? "text-[#333] dark:text-white" : ""}
          >
            {f.label}
          </button>
        </span>
      ))}
    </div>
  );
}
