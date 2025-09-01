import React from 'react'

const NewsCard = ({ article }) => {
  const { source, author, title, description, url, urlToImage, publishedAt } = article

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-900 hover:scale-105 transition-all rounded-xl shadow-md overflow-hidden hover:shadow-lg duration-300">
      <img
        src={urlToImage}
        alt={title}
        className="w-full h-48 object-cover bg-gray-400"
      />
      <div className="p-4">
        {/* External link */}
        <a href={url} target="_blank" rel="noopener noreferrer">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 hover:text-blue-600">
            {title}
          </h2>
        </a>

        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
          {description?.length > 100
            ? description.slice(0, 100) + "..."
            : description}
        </p>

        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400 flex flex-col">
          <span>By {author || "Unknown"}</span>
          <span>{new Date(publishedAt).toLocaleDateString()}</span>
        </div>

        <div className="mt-1 text-xs text-blue-500 font-medium">
          Source: {source?.name}
        </div>
      </div>
    </div>
  )
}

export default NewsCard
