// InfiniteQuery


import { Link } from "react-router-dom";
import { useInfiniteQuery } from "react-query";
import { useEffect, useRef } from "react";
import axios from "axios";

const fetchData = (pageNumber) => {
  return axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=20&page=${pageNumber}`);
};

function Test1() {
  const {
    isLoading,
    data,
    isError,
    error,
    hasNextPage,
    fetchNextPage,
    isFetching,
    isFetchingNextPage
  } = useInfiniteQuery(["posts"], ({ pageParam = 1 }) => fetchData(pageParam), {
    getNextPageParam: (_lastPage, pages) => {
      return pages.length < 5 ? pages.length + 1 : undefined;
    },
  });

  // Reference for the "Load More" trigger
  const loadMoreRef = useRef(null);

  useEffect(() => {
    if (!hasNextPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      { threshold: 1.0 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [hasNextPage, fetchNextPage]);

  if (isLoading) {
    return <div>Loading... the spinner here</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      {data?.pages?.map((page) =>
        page.data.map((el) => (
            <div key={el.id} className="my-4">{el.title}</div>
        ))
      )}

      {/* Invisible div for triggering automatic loading */}
      <div ref={loadMoreRef} style={{ height: "10px", background: "transparent" }}></div>

      <div>{isFetching && isFetchingNextPage ? "Fetching..." : ""}</div>
    </>
  );
}

export default Test1;
