import React, { useState } from 'react';
import Button from '@/components/ui/button/button';
import { Check } from '@/components/icons/check';
import { Copy } from '@/components/icons/copy';
import { useCopyToClipboard } from 'react-use';
import { Refresh } from '@/components/icons/refresh';

interface PortfolioCreatorProps {
  isGenerated: boolean;
}

const PortfolioCreator: React.FC<PortfolioCreatorProps> = ({ isGenerated }) => {
  const [generatedLink, setGeneratedLink] = useState('');
  const [copyButtonStatus, setCopyButtonStatus] = useState(false);
  const [_, copyToClipboard] = useCopyToClipboard();
  function handleCopyToClipboard() {
    copyToClipboard(generatedLink);
    setCopyButtonStatus(true);
    setTimeout(() => {
      setCopyButtonStatus(copyButtonStatus);
    }, 2500);
  }
  const [status, setStatus] = useState(isGenerated);
  return (
    <>
      {!status && (
        <Button
          onClick={() => {
            setGeneratedLink('https://defi-os.com');
            setStatus(true);
          }}
          shape="rounded"
          size="small"
          className="mt-5 w-full"
        >
          Generate
        </Button>
      )}
      {status && (
        <div className="mt-5 flex flex-row items-center justify-center">
          <div className="flex h-9 w-[90%] items-center rounded-full bg-light-dark shadow-card">
            <div className="text truncate text-ellipsis bg-center pl-4 text-xs text-gray-300 sm:text-sm">
              {generatedLink}
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
          <Refresh
            onClick={() => {
              setGeneratedLink(
                generatedLink === 'https://github.com/AbhisekBasu1/DefiOS'
                  ? 'https://defi-os.com'
                  : 'https://github.com/AbhisekBasu1/DefiOS'
              );
              setStatus(true);
            }}
            className="ml-2 h-5 w-5"
          />
        </div>
      )}
    </>
  );
};

export default PortfolioCreator;