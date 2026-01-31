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

  const totalSubmissions = submissions.length;
  const uniqueEmails = new Set(submissions.map((item) => item.email)).size;
  const latestSubmission = submissions[0];
  const latestTime = latestSubmission
    ? new Date(latestSubmission.createdAt).toLocaleString()
    : "—";

  return (
    <div className="min-h-screen bg-[#F0F1FA] dark:bg-black text-gray-900 dark:text-white px-4 sm:px-6 lg:px-8 xl:px-20 py-16">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
              Admin Dashboard
            </p>
            <h1 className="text-3xl sm:text-4xl font-semibold">Submissions</h1>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Review new project requests and follow up quickly.
            </p>
          </div>
          {isAuthed && (
            <button
              onClick={handleLogout}
              className="inline-flex items-center justify-center rounded-full border border-gray-200/70 dark:border-gray-700/80 bg-white/80 dark:bg-white/10 px-5 py-2 text-sm font-semibold text-gray-700 dark:text-gray-200 shadow-sm hover:border-gray-900/30 dark:hover:border-white/50 transition"
            >
              Log out
            </button>
          )}
        </div>

        {error && (
          <div className="mb-4 rounded-lg border border-red-200 bg-red-50 text-red-700 px-4 py-3 dark:border-red-500/40 dark:bg-red-500/10 dark:text-red-300">
            {error}
          </div>
        )}

        {!isAuthed && (
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
            <div className="rounded-3xl border border-gray-200/60 dark:border-gray-800/70 bg-white/70 dark:bg-white/5 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.12)] dark:shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
              <h2 className="text-2xl font-semibold">Welcome back</h2>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Sign in to access the latest client messages.
              </p>
              <form onSubmit={handleLogin} className="mt-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Username</label>
                  <input
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 text-sm shadow-inner"
                    type="text"
                    autoComplete="username"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Password</label>
                  <input
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 text-sm shadow-inner"
                    type="password"
                    autoComplete="current-password"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-gray-900 text-white py-3 text-sm font-semibold shadow-lg shadow-gray-900/20 hover:bg-gray-800 disabled:opacity-60"
                >
                  {loading ? "Signing in..." : "Sign in"}
                </button>
              </form>
            </div>
            <div className="rounded-3xl border border-gray-200/60 dark:border-gray-800/70 bg-gradient-to-br from-white/80 via-white/70 to-white/40 dark:from-white/10 dark:via-white/5 dark:to-black/10 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.12)] dark:shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
              <h3 className="text-lg font-semibold">At a glance</h3>
              <div className="mt-6 space-y-4 text-sm text-gray-600 dark:text-gray-300">
                <div className="rounded-2xl border border-gray-200/60 dark:border-gray-800/60 bg-white/70 dark:bg-white/5 px-4 py-4">
                  <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    Total submissions
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-gray-900 dark:text-white">
                    {totalSubmissions}
                  </p>
                </div>
                <div className="rounded-2xl border border-gray-200/60 dark:border-gray-800/60 bg-white/70 dark:bg-white/5 px-4 py-4">
                  <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    Unique emails
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-gray-900 dark:text-white">
                    {uniqueEmails}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {isAuthed && (
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-gray-200/60 dark:border-gray-800/70 bg-white/80 dark:bg-white/5 p-5 shadow-sm">
                <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  Total submissions
                </p>
                <p className="mt-3 text-2xl font-semibold">{totalSubmissions}</p>
              </div>
              <div className="rounded-2xl border border-gray-200/60 dark:border-gray-800/70 bg-white/80 dark:bg-white/5 p-5 shadow-sm">
                <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  Unique emails
                </p>
                <p className="mt-3 text-2xl font-semibold">{uniqueEmails}</p>
              </div>
              <div className="rounded-2xl border border-gray-200/60 dark:border-gray-800/70 bg-white/80 dark:bg-white/5 p-5 shadow-sm sm:col-span-2">
                <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  Latest submission
                </p>
                <p className="mt-3 text-base font-semibold">
                  {latestSubmission ? latestSubmission.name : "—"}
                </p>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  {latestTime}
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-gray-200/70 dark:border-gray-800/80 bg-white/80 dark:bg-white/5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
              <div className="flex items-center justify-between border-b border-gray-200/70 dark:border-gray-800/80 px-6 py-4">
                <div>
                  <h2 className="text-lg font-semibold">All submissions</h2>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Sorted by most recent first
                  </p>
                </div>
                <span className="rounded-full bg-gray-900/10 dark:bg-white/10 px-3 py-1 text-xs font-semibold text-gray-700 dark:text-gray-200">
                  {totalSubmissions} total
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm">
                  <thead className="bg-gray-50/80 dark:bg-white/5 text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    <tr>
                      <th className="px-6 py-4">Name</th>
                      <th className="px-6 py-4">Email</th>
                      <th className="px-6 py-4">Location</th>
                      <th className="px-6 py-4">Message</th>
                      <th className="px-6 py-4">IP</th>
                      <th className="px-6 py-4">Created</th>
                    </tr>
                  </thead>
                  <tbody>
                    {submissions.map((item) => (
                      <tr
                        key={item.id}
                        className="border-b border-gray-200/60 dark:border-gray-800/60 last:border-none hover:bg-gray-50/60 dark:hover:bg-white/5 transition"
                      >
                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                          {item.name}
                        </td>
                        <td className="px-6 py-4">{item.email}</td>
                        <td className="px-6 py-4">{item.location}</td>
                        <td className="px-6 py-4 max-w-xs">
                          <p className="line-clamp-2 text-gray-600 dark:text-gray-300">
                            {item.message}
                          </p>
                        </td>
                        <td className="px-6 py-4">{item.ip || "N/A"}</td>
                        <td className="px-6 py-4">
                          {new Date(item.createdAt).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                    {!submissions.length && !loading && (
                      <tr>
                        <td
                          className="px-6 py-10 text-center text-gray-500"
                          colSpan={6}
                        >
                          No submissions yet.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
