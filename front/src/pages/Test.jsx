import {   useInfiniteData  } from "../hooks/useData";

function Test() {

  const fn = (data) => {
    return data?.pages?.map((page) => {
      return page?.data?.map((item) => {
        let url = `${item.title['en']}`;
        return {
          ...item,
          link: decodeURIComponent(url),
        };
      });
    }).flat(); 
  };
  
  const { data:products, fetchNextPage, hasNextPage, loadMoreRef , isLoading } = useInfiniteData("products1" , 'dresses' , fn );




  return (
    <>

      <div>


        <ul>
          {products?.map((product) => <li key={product.id}>{product.title['en']}</li>)}
        </ul>
        {hasNextPage && <button onClick={() => fetchNextPage()}>Load More</button>}
      </div>
      <div ref={loadMoreRef} style={{ height: "10px", background: "transparent" }}></div>

    </>
  );
}

export default Test;
