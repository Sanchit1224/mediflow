import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function NotFoundPage() {
  return <main className="grid min-h-screen place-items-center p-6 text-center"><div><p className="text-sm font-medium text-brand-400">404</p><h1 className="mt-3 text-3xl font-semibold">This view does not exist.</h1><p className="mt-2 text-slate-400">Return to MediFlow to continue.</p><Link to="/" className="mt-6 inline-block"><Button>Return home</Button></Link></div></main>;
}
