import { Activity, Bell, Command, LayoutDashboard, LogOut, Settings, Sparkles } from 'lucide-react';
import { NavLink, Outlet } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navigation = [
  { label: 'Command center', to: '/app', icon: LayoutDashboard, end: true },
  { label: 'Live operations', to: '/app/operations', icon: Activity },
  { label: 'AI intelligence', to: '/app/intelligence', icon: Sparkles },
];

export function AppShell() {
  return <div className="min-h-screen lg:grid lg:grid-cols-[244px_1fr]">
    <aside className="hidden border-r border-line bg-slate-950/30 p-5 lg:block">
      <NavLink to="/" className="flex items-center gap-3 px-2 py-3"><span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-500 shadow-lg shadow-brand-500/30"><Command size={20} /></span><span className="font-semibold tracking-tight">MediFlow</span></NavLink>
      <p className="mb-7 mt-8 px-2 text-[11px] font-semibold uppercase tracking-[.18em] text-slate-500">Operations</p>
      <nav className="space-y-1">{navigation.map(({ label, to, icon: Icon, end }) => <NavLink key={to} to={to} end={end} className={({ isActive }) => cn('focus-ring flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition', isActive ? 'bg-brand-500/15 text-brand-400' : 'text-slate-400 hover:bg-white/5 hover:text-slate-100')}><Icon size={18} />{label}</NavLink>)}</nav>
      <div className="mt-auto pt-10"><NavLink to="/app/settings" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-400 hover:bg-white/5"><Settings size={18} />Settings</NavLink><Button variant="ghost" className="mt-1 w-full justify-start gap-3"><LogOut size={18} />Sign out</Button></div>
    </aside>
    <main className="min-w-0"><header className="flex h-20 items-center justify-between border-b border-line px-5 lg:px-8"><div><p className="text-xs font-medium text-brand-400">Hospital command center</p><h1 className="text-lg font-semibold">Good morning, Dr. Evans</h1></div><div className="flex items-center gap-3"><span className="hidden rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-300 sm:block">All systems nominal</span><button aria-label="Notifications" className="focus-ring relative grid h-10 w-10 place-items-center rounded-lg border border-line bg-white/5 text-slate-300 hover:bg-white/10"><Bell size={18}/><span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-cyan-300" /></button></div></header><Outlet /></main>
  </div>;
}
