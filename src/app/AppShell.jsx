import PageGlow from '../components/layout/PageGlow';
import ScrollProgressBar from '../components/layout/ScrollProgressBar';

export default function AppShell({ children }) {
  return (
    <div className="app-shell relative isolate overflow-x-hidden">
      <div className="app-shell-underlay" />
      <ScrollProgressBar />
      <PageGlow />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
