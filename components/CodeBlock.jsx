import { CopyBlock, atomOneDark } from 'react-code-blocks';

export const CodeBlock = ({code, language}) => (
  <CopyBlock
    text={code}
    language={language}
    theme={atomOneDark}
    showLineNumbers
    wrapLines
  />
)