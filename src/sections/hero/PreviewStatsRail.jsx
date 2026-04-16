import StatCard from '../../components/ui/StatCard';

export default function PreviewStatsRail({ stats = [] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {stats.map((stat) => (
        <StatCard
          key={stat.label}
          className="h-full"
          label={stat.label}
          value={stat.value}
          description={stat.description}
          suffix={stat.suffix ?? ''}
        />
      ))}
    </div>
  );
}
