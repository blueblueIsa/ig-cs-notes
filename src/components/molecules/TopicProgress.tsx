import { CheckCircle2, Circle } from 'lucide-react';
import { calculateProgress } from '@/lib/utils';

interface TopicProgressProps {
  completed: number;
  total: number;
}

export function TopicProgress({ completed, total }: TopicProgressProps) {
  const progress = calculateProgress(completed, total);

  return (
    <div className="flex items-center space-x-2">
      <div className="flex-1">
        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary-600 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      <span className="text-sm text-gray-600 dark:text-gray-400">
        {completed}/{total}
      </span>
      {completed === total ? (
        <CheckCircle2 className="h-5 w-5 text-green-500" />
      ) : (
        <Circle className="h-5 w-5 text-gray-400" />
      )}
    </div>
  );
}