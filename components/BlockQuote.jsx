export const BlockQuote = ({ quote, from }) => (
  <blockquote className="text-center p-4 sm:px-7">
    <p className="text-xl font-medium text-gray-800 md:text-2xl md:leading-normal xl:text-2xl xl:leading-normal">
      {quote}
    </p>
    {
      from ? (
        <p className="mt-5 text-gray-800">
          {from}
        </p>
      ) : null
    } 
  </blockquote>
)
