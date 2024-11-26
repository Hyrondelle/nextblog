import Hero from '../components/hero'
import Categories from '../components/categories'
import Postslist from '../components/posts-list'

export default function Home() {
  
  return (
    <div className="flex flex-col items-center justify-items-center gap-2 ">
      <Hero/>
      <Categories/>
      <Postslist/>
    </div>
  );
}
