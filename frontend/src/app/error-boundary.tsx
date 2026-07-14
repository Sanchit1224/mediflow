import { Component, type ErrorInfo, type ReactNode } from 'react';
import { Button } from '@/components/ui/button';

export class AppErrorBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch(error: Error, info: ErrorInfo) { console.error('Unhandled UI error', error, info); }
  render() { return this.state.failed ? <main className="grid min-h-screen place-items-center p-6 text-center"><div><h1 className="text-2xl font-semibold">Something went wrong.</h1><p className="mt-2 text-slate-400">The incident has been recorded. Please reload the application.</p><Button className="mt-5" onClick={() => window.location.reload()}>Reload MediFlow</Button></div></main> : this.props.children; }
}
