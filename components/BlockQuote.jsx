export const BlockQuote = ({ quote, from }) => (
  <blockquote class="text-center p-4 sm:px-7">
    <p class="text-xl font-medium text-gray-800 md:text-2xl md:leading-normal xl:text-2xl xl:leading-normal dark:text-gray-200">
      {quote}
    </p>
    {
      from ? (
        <p class="mt-5 text-gray-800 dark:text-gray-200">
          {from}
        </p>
      ) : null
    } 
  </blockquote>
)
