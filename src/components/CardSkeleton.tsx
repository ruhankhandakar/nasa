import React from 'react';

interface Props {
  size?: number;
}

const CardSkeleton: React.FC<Props> = ({ size = 5 }) => {
  const totalCards = Array(size).fill(1);

  return (
    <div className="flex gap-3 flex-wrap justify-center md:justify-between">
      {React.Children.toArray(
        totalCards.map((_) => (
          <div className="border border-slate-700 shadow rounded-md p-4 w-[200px]">
            <div className="animate-pulse flex space-x-4">
              <div className="flex-1 space-y-6 py-1">
                <div className="bg-slate-700 h-20 w-full"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CardSkeleton;
