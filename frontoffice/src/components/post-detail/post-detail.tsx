import Link from "next/link";
import PostCard from "../post-card/post-card"
import "./post-detail.scss"
import moment from"moment";

export default function PostDetail(props:any){

    let time = moment(props.time).format("MMM DD, YYYY");

    return <div className="post-detail">
        <h1 className="post-detail__title">{props.title}</h1>
        <p className="post-detail__time">{time} - <svg stroke="currentColor" fill="currentColor" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path></svg> <b>{props.timeToRead} min to read</b></p>
        <div className="post-detail__content">
            <div className="post-detail__content-left">
                <div className="post-detail__content-left-html" dangerouslySetInnerHTML={{__html: props.content}}></div>
            </div>
            <div className="post-detail__content-right">
                <div className="post-detail__content-right-posts">
                    {
                    props.postList.map((item:any) => 
                        <PostCard
                            slug={item.attributes.slug}
                            key={item.id}
                            title={item.attributes.title}
                            imageURL={process.env.apiUrl+item.attributes.image.data.attributes.formats.thumbnail.url}
                            url={"/" + item.attributes.slug}
                            categoryName={item.attributes.categoryName}
                            categoryURL={item.attributes.categoryURL}
                            shortText={item.attributes.shortText}
                            time={item.attributes.publishedAt}
                            timeToRead={item.attributes.timeToRead}
                        />
                    )}
                </div>
                <Link href="/" title="View more">View more</Link>
            </div>
        </div>
    </div>
}