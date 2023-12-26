export const Avatar = ({ name, src, date, readTime }) => (
  <div className="flex justify-between items-center mb-6">
    <div className="flex w-full sm:items-center gap-x-5 sm:gap-x-3">
      <div className="flex-shrink-0">
        <img className="h-12 w-12 rounded-full" src={src} alt={`Profile picture of ${name}`} />
      </div>
      <div className="grow">
        <div className="flex justify-between items-center gap-x-2">
          <div>
            <div class="sm:mb-1 block text-start">
              <span class="font-semibold text-gray-800 dark:text-gray-200">
                {name}
              </span>
            </div>
            <ul className="text-xs text-gray-500">
              <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-gray-300 before:rounded-full dark:text-gray-400 dark:before:bg-gray-600">
                {date}
              </li>
              <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-gray-300 before:rounded-full dark:text-gray-400 dark:before:bg-gray-600">
                {`${readTime} min read`}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);