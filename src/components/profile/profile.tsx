import { useState } from 'react';
import { useCopyToClipboard } from 'react-use';
import { authorData } from '@/data/static/author';
import { Check } from '@/components/icons/check';
import { Copy } from '@/components/icons/copy';
import ProfileTab from '@/components/profile/profile-tab';
import ToggleBtn from '../ui/button/toggle';
import PortfolioCreator from './portfolio-creator';

export default function Profile() {
  const [copyButtonStatus, setCopyButtonStatus] = useState(false);
  const [_, copyToClipboard] = useCopyToClipboard();
  function handleCopyToClipboard() {
    copyToClipboard(authorData.wallet_key);
    setCopyButtonStatus(true);
    setTimeout(() => {
      setCopyButtonStatus(copyButtonStatus);
    }, 2500);
  }
  return (
    <div className="flex w-full flex-col pt-4 md:flex-row md:pt-10 lg:flex-row 3xl:pt-12">
      <div className="shrink-0 border-dashed border-gray-700 md:w-72 md:border-r md:pr-7 lg:pr-10 2xl:w-80 3xl:w-96 3xl:pr-14">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-medium tracking-tighter text-white xl:text-2xl">
            {authorData?.name}
          </h2>
          <div className="mt-1 text-sm font-medium tracking-tighter text-gray-400 xl:mt-3">
            @{authorData?.user_name}
          </div>
          <div className="md:max-w-auto mx-auto mt-5 flex h-9 max-w-sm items-center rounded-full bg-light-dark shadow-card md:mx-0 xl:mt-6">
            <div className="text truncate text-ellipsis bg-center pl-4 text-xs text-gray-300 sm:text-sm">
              {authorData?.wallet_key}
            </div>
            <div
              title="Copy Address"
              className="ml-auto flex cursor-pointer items-center px-4 text-gray-300 transition hover:text-white"
              onClick={() => handleCopyToClipboard()}
            >
              {copyButtonStatus ? (
                <Check className="h-auto w-3.5 text-green-500" />
              ) : (
                <Copy className="h-auto w-3.5" />
              )}
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 border-y border-dashed border-gray-700 py-5 text-center md:justify-start md:text-left xl:mt-12 xl:gap-8 xl:py-6">
          <div>
            <div className="mb-1.5 text-lg font-medium tracking-tighter text-white">
              {authorData?.issuesSolved}
            </div>
            <div className="text-sm tracking-tighter text-gray-400">
              # issues solved
            </div>
          </div>
          <div>
            <div className="mb-1.5 text-lg font-medium tracking-tighter text-white">
              {authorData?.issuesCreated}
            </div>
            <div className="text-sm tracking-tighter text-gray-400">
              # issues created
            </div>
          </div>
        </div>
        <div className="border-y border-dashed border-gray-700 py-5 text-center md:text-left xl:py-6">
          <div className="mb-2 text-sm font-medium uppercase tracking-wider text-white">
            Top Solves
          </div>
          <div className="flex justify-center md:justify-start">
            {authorData?.coins?.map((item) => (
              <div key={item?.id} className="-ml-1 first:ml-0">
                <div className=" rounded-full border border-gray-500">
                  {item.element}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-sm tracking-tighter text-gray-400">
            {authorData.totalAmount} USDC
          </div>
          <div className="mt-4 text-sm tracking-tighter text-gray-400">
            Last Synced Date : {authorData.syncDate}
          </div>
        </div>
        <div className="border-y border-dashed border-gray-700 py-5 text-center md:text-left xl:py-6">
          <div className="mb-4 text-sm font-medium uppercase tracking-wider text-white">
            Portfolio
          </div>
          <ToggleBtn label="Theme" option1={'Basic'} option2={'Advanced'} />
          <PortfolioCreator isGenerated={false} />
        </div>
      </div>
      <div className="grow pt-6 pb-9 md:-mt-2.5 md:pt-1.5 md:pb-0 md:pl-7 lg:pl-10 3xl:pl-14">
        <ProfileTab />
      </div>
    </div>
  );
}
