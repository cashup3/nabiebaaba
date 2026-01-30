"use client";

import { useEffect, useState } from "react";

export default function AdminPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isAuthed, setIsAuthed] = useState(false);

  const loadSubmissions = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/admin/submissions");
      if (response.status === 401) {
        setIsAuthed(false);
        setLoading(false);
        return;
      }
      const bodyText = await response.text();
      let data = {};
      if (bodyText) {
        try {
          data = JSON.parse(bodyText);
        } catch {
          data = { error: bodyText };
        }
      }
      if (!response.ok) {
        throw new Error(
          data.error ||
            `Failed to load submissions. (HTTP ${response.status})`
        );
      }
      setSubmissions(data.submissions || []);
      setIsAuthed(true);
    } catch (err) {
      setError(err.message || "Failed to load submissions.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSubmissions();
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);
    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const bodyText = await response.text();
      let data = {};
      if (bodyText) {
        try {
          data = JSON.parse(bodyText);
        } catch {
          data = { error: bodyText };
        }
      }
      if (!response.ok) {
        throw new Error(
          data.error || `Login failed. (HTTP ${response.status})`
        );
      }
      await loadSubmissions();
    } catch (err) {
      setError(err.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    setLoading(true);
    await fetch("/api/admin/logout", { method: "POST" });
    setSubmissions([]);
    setIsAuthed(false);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#F0F1FA] dark:bg-black text-gray-900 dark:text-white px-4 sm:px-6 lg:px-8 xl:px-20 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-6">Admin</h1>

        {error && (
          <div className="mb-4 rounded-lg border border-red-200 bg-red-50 text-red-700 px-4 py-3 dark:border-red-500/40 dark:bg-red-500/10 dark:text-red-300">
            {error}
          </div>
        )}

        {!isAuthed && (
          <form
            onSubmit={handleLogin}
            className="max-w-md space-y-4 rounded-2xl border border-gray-200/70 dark:border-gray-800/80 bg-white/70 dark:bg-white/5 backdrop-blur p-6 shadow-lg"
          >
            <div>
              <label className="block text-sm font-medium mb-2">Username</label>
              <input
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2"
                type="text"
                autoComplete="username"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2"
                type="password"
                autoComplete="current-password"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-gray-900 text-white py-2 font-semibold hover:bg-gray-800 disabled:opacity-60"
            >
              {loading ? "Loading..." : "Sign in"}
            </button>
          </form>
        )}

        {isAuthed && (
          <div className="space-y-4">
            <div className="flex justify-end">
              <button
                onClick={handleLogout}
                className="rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm font-medium hover:border-gray-900 dark:hover:border-white"
              >
                Log out
              </button>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-gray-200/70 dark:border-gray-800/80 bg-white/70 dark:bg-white/5">
              <table className="min-w-full text-left text-sm">
                <thead className="border-b border-gray-200/70 dark:border-gray-800/80 text-xs uppercase tracking-wider text-gray-600 dark:text-gray-400">
                  <tr>
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">Email</th>
                    <th className="px-4 py-3">Location</th>
                    <th className="px-4 py-3">Message</th>
                    <th className="px-4 py-3">IP</th>
                    <th className="px-4 py-3">Created</th>
                  </tr>
                </thead>
                <tbody>
                  {submissions.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b border-gray-200/50 dark:border-gray-800/60"
                    >
                      <td className="px-4 py-3">{item.name}</td>
                      <td className="px-4 py-3">{item.email}</td>
                      <td className="px-4 py-3">{item.location}</td>
                      <td className="px-4 py-3">{item.message}</td>
                      <td className="px-4 py-3">{item.ip || "N/A"}</td>
                      <td className="px-4 py-3">
                        {new Date(item.createdAt).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                  {!submissions.length && !loading && (
                    <tr>
                      <td className="px-4 py-6 text-center text-gray-500" colSpan={6}>
                        No submissions yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
