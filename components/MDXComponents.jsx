import { CodeBlock } from "./CodeBlock"
import { BlockQuote } from "./BlockQuote"
import { Figure } from "./Figure"

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  CodeBlock,
  BlockQuote,
  Figure,
  h1: ({children}) => <h1 className="text-2xl font-bold md:text-3xl">{children}</h1>,
  h2: ({children}) => <h2 className="text-2xl font-bold md:text-3xl">{children}</h2>,
  h3: ({children}) => <h3 className="text-xl font-bold md:text-2xl">{children}</h3>,
  p: ({children}) => <p className="text-lg text-gray-800">{children}</p>,
  ul: ({children}) => <ul className="list-disc list-outside space-y-5 ps-5 text-lg text-gray-800">{children}</ul>,
  li: ({children}) => <li className="ps-2">{children}</li>,
  a: ({children, href}) => <a className="text-blue-600 decoration-2 hover:underline font-medium" href={href}>{children}</a>
}
