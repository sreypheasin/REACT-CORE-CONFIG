import { useGetAllBlogQuery } from "./features/blog/blogSlice";

function App() {
  const { data } = useGetAllBlogQuery();

  console.log(data);
  
  return (
    <>
      <h1>Good luck with your final project</h1>
    </>
  );
}

export default App;
