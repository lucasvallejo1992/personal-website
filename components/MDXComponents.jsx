import { CodeBlock } from "./CodeBlock"
import { BlockQuote } from "./BlockQuote"
import { Figure } from "./Figure"

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  CodeBlock,
  BlockQuote,
  Figure,
  h1: ({children}) => <h1 className="text-2xl font-bold md:text-3xl dark:text-white">{children}</h1>,
  h2: ({children}) => <h2 className="text-2xl font-bold md:text-3xl dark:text-white">{children}</h2>,
  p: ({children}) => <p className="text-lg text-gray-800 dark:text-gray-200">{children}</p>,
  ul: ({children}) => <ul className="list-disc list-outside space-y-5 ps-5 text-lg text-gray-800 dark:text-gray-200">{children}</ul>,
  li: ({children}) => <li className="ps-2">{children}</li>,
  a: ({children, href}) => <a class="text-blue-600 decoration-2 hover:underline font-medium" href={href}>{children}</a>
}
