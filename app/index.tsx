import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { LoaderScreen } from '@/components/common/Loader';

const LOADER_DURATION_MS = 2500;

export default function LoaderRoute() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/auth/onboarding');
    }, LOADER_DURATION_MS);

    return () => clearTimeout(timer);
  }, [router]);

  return <LoaderScreen />;
}
