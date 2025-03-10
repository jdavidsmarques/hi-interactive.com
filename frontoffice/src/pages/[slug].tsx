import { useRouter } from "next/router"
import PostDetail from "../components/post-detail/post-detail"


export async function getServerSideProps({query : { slug }}:any) {

    const resRecord = await fetch("http://127.0.0.1:1337/api/posts?filters[slug][$eq]="+slug+"&populate=image")
    const postRecord = await resRecord.json()
  
    const resList = await fetch("http://127.0.0.1:1337/api/posts?populate=image&pagination[pageSize]=4&filters[slug][$ne]="+slug+"")
    const postList = await resList.json()
   

    return { props: { 
      record : postRecord.data[0],
      list : postList
     }
    }
  }

// Page component
export default function Page(props:any) {

    return <div className="main-content">
        <PostDetail
            title={props.record.attributes.title}
            media={null}
            time={props.record.attributes.updatedAt}
            content={props.record.attributes.content}
            postList={props.list.data}
            timeToRead={props.record.attributes.timeToRead}
        />
    </div>
}