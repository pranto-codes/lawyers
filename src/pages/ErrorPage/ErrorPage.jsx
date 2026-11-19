import React from "react";
import { Link, useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-5">
      <div className="max-w-lg text-center">
        <p className="text-8xl font-black tracking-tight text-emerald-800">
          404
        </p>

        <div className="mx-auto mt-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-3xl">
          ⚠
        </div>

        <h1 className="mt-6 text-3xl font-extrabold text-gray-900">
          Page Not Found
        </h1>

        <p className="mt-4 leading-7 text-gray-500">
          Sorry! The page you're looking for doesn't exist, may have been moved,
          or the URL might be incorrect.
        </p>

        {error?.statusText && (
          <p className="mt-3 text-sm text-gray-400">{error.statusText}</p>
        )}

        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-emerald-800 px-8 py-4 font-bold text-white transition hover:bg-emerald-900"
        >
          ← Back to Homepage
        </Link>
      </div>
    </main>
  );
};

export default ErrorPage;
