import { useState, useEffect } from "react";
import axiosInstance from "../utils/axisoInstance";
import { useSelector } from "react-redux";

const UrlForm = () => {
  const [url, setUrl] = useState("");
  const [slug, setSlug] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(false);
  const [copiedId, setCopiedId] = useState(null);

  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      fetchUserUrls();
    }
  }, [isAuthenticated]);

  const fetchUserUrls = async () => {
    try {
      setLoading(true);
      const { data } = await axiosInstance.get("/api/user/urls");
      setUrls(data.urls || data || []);
    } catch (err) {
      console.error("Error fetching URLs:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    const payload = { url };

    if (isAuthenticated && slug.trim()) {
      payload.slug = slug.trim();
    }

    const { data } = await axiosInstance.post("/api/create", payload);
    setShortUrl(data.short_url);

    // Refresh the list after creating new URL
    if (isAuthenticated) {
      fetchUserUrls();
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyFromList = (shortUrl, id) => {
    const fullShortUrl = `http://localhost:5000/${shortUrl}`;
    navigator.clipboard.writeText(fullShortUrl);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/api/delete/${id}`);
      setUrls(urls.filter((url) => url._id !== id && url.id !== id));
    } catch (err) {
      alert(err.response?.data?.message || "Failed to delete URL");
    }
  };



  return (
    <div >
      <div>
        <label
          htmlFor="url"
          className="block text-md font-medium text-gray-600 h-8"
        >
          Enter your URL
        </label>
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          id="url"
          placeholder="https://example.com"
          required
          className="w-full mb-2 px-4 py-2 border border-gray-300 rounded-md focus"
        />
      </div>

      {isAuthenticated && (
        <div className="mb-4">
          <label
            htmlFor="customSlug"
            className="block text-md font-medium text-gray-600 mb-2"
          >
            Custom Slug (Optional)
          </label>
          <input
            type="text"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            id="customSlug"
            placeholder="my-custom-link"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus"
          />
          <p className="text-sm text-gray-500 mt-1">
            Leave empty for auto-generated slug
          </p>
        </div>
      )}

      <button
        type="submit"
        onClick={handleSubmit}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
      >
        Shorten URL
      </button>

      {shortUrl && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Your shortened URL</h2>
          <div className="flex items-center">
            <input
              type="text"
              readOnly
              value={shortUrl}
              className="flex-1 p-2 border border-gray-300 rounded-l-md bg-amber-100"
            />
            <button
              onClick={handleCopy}
              className={`px-4 py-2 rounded-r-md transition-colors duration-200 ${
                copied
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      )}

      {isAuthenticated && (
        <div className="mt-12 max-h-75 overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">My URLs</h2>
            <span className="text-sm text-gray-500">
              {urls.length} {urls.length === 1 ? "URL" : "URLs"}
            </span>
          </div>

          {loading ? (
            <div className="flex justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            </div>
          ) : urls.length === 0 ? (
            <div className="text-center py-8 bg-gray-50 rounded-lg">
              <p className="text-gray-500">No URLs yet</p>
              <p className="text-gray-400 text-sm mt-1">
                Your shortened URLs will appear here
              </p>
            </div>
          ) : (
            <div className="space-y-3  h-14">
              {urls.map((item) => {
                const itemId = item._id || item.id;
                const shortUrlItem = item.short_url || item.shortUrl;
                const originalUrl = item.full_url || item.fullUrl || item.url;
                // const clicks = item.clicks || item.clickCount || 0;

                return (
                  <div
                    key={itemId}
                    className="bg-white border border-gray-200 rounded-lg p-1 hover:bg-gray-300 hover:shadow- hover:shadow-black transition-shadow"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <a
                            href={`http://localhost:5000/${shortUrlItem}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 font-medium break-all"
                          >
                            {`localhost:5000/${shortUrlItem}`}
                          </a>
                          <button
                            onClick={() =>
                              handleCopyFromList(shortUrlItem, itemId)
                            }
                            className={`px-2 py-1 text-xs rounded transition-colors ${
                              copiedId === itemId
                                ? "bg-green-600 text-white"
                                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                            }`}
                          >
                            {copiedId === itemId ? "✓" : "Copy"}
                          </button>
                        </div>

                        <p className="text-sm text-gray-600 break-all mb-2">
                          {originalUrl}
                        </p>
                      </div>

                      <button
                        onClick={() => handleDelete(itemId)}
                        className="px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UrlForm;
