import { useEffect, useRef } from "react";
import {  useQuery , useInfiniteQuery , useMutation } from "react-query"
import { api } from "../utils/axios"

export const fetchData = (data) =>  api({url:data})
export const useData = (data , options = {} ) =>   useQuery( data , ()=> fetchData(data)  , options )


export const fetchInfiniteData = async (data, id, limit, pageNumber) => {
  const response = await api({
      url: `${data}/${id}?_limit=${limit}&_page=${pageNumber}`,
      method: "GET",
  });
  return response.data; 
};


export const useInfiniteData = (queryKey, id , fn ,limit = 8 ) => {
  const loadMoreRef = useRef(null); 

  const query = useInfiniteQuery(
    [queryKey],
    ({ pageParam = 1 }) => fetchInfiniteData(queryKey, id , limit, pageParam),
    {
      select : fn , 
      getNextPageParam: (lastPage) => {
        if (lastPage.current_page < lastPage.total_pages) {
          return lastPage.current_page + 1;
        }
        return undefined;
      },
    }
  );

  useEffect(() => {
    if (!query.hasNextPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          query.fetchNextPage();
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
  }, [query.hasNextPage, query.fetchNextPage]);

  return { ...query, loadMoreRef };
};


const postData = async (link, data) => {
    try {
        const response = await api({ url: link, method: 'post', data: data });
        return response.data;
    } catch (error) {
        throw new Error(`Failed to post data to ${link}: ${error.message}`);
    }
};
export const usePost = (link, options = {}) => {
    const { onSuccess, onError } = options;
    return useMutation((data) => postData(link, data), { onSuccess, onError });
};






                    // Example usage For useInfinite Hook 
// const { data:products, fetchNextPage, hasNextPage,  loadMoreRef , isLoading } = useInfiniteData("products1" , categoryId , fn );

// const fn = (data) => {
//   return data?.pages?.map((page) => {
//   return page?.data?.map((item) => {
//       let url = `${item.title['en']}`;
//       return {
//       ...item,
//       link: decodeURIComponent(url),
//       };
//   });
//   }).flat(); 
// };

// {hasNextPage && <button onClick={() => fetchNextPage()}>Load More</button>}
// <div ref={loadMoreRef} style={{ height: "10px", background: "transparent" }}></div>






