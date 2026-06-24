import { useCallback, useState } from 'react';

interface UseSupportHelpReturn {
  sendMessage: (name: string, message: string) => Promise<void>;
  sending: boolean;
  error: string | null;
}

export function useSupportHelp(): UseSupportHelpReturn {
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // POST /api/support/message
  const sendMessage = useCallback(async (_name: string, message: string) => {
    setSending(true);
    setError(null);
    try {
      // TODO: replace with real fetch
      // await fetch('/api/support/message', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ name, message }),
      // });

      // Mock: simulate network delay
      await new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          if (!message.trim()) { reject(new Error('Message cannot be empty.')); return; }
          resolve();
        }, 600);
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message.');
      throw err;
    } finally {
      setSending(false);
    }
  }, []);

  return { sendMessage, sending, error };
}
